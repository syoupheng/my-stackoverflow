from django.http.response import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response as DRF_Response
from ..serializers.comment_serializers import CommentSerializer, CommentByTopicInputSerializer, CommentByResponseInputSerializer, CommentOutputSerializer, CommentInputSerializer
from ..serializers.response_serializers import ResponseSerializer, ResponseOutputSerializer, ResponseInputSerializer
from ..models import Response, Topic, Comment
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class CommentList(APIView):
    # Get all Comments
    def get(self, request, format=None):
        if 'topic' in request.query_params:
            comments = Comment.objects.filter(topic=request.query_params['topic']).order_by('-created_at')
        elif 'response' in request.query_params:
            comments = Comment.objects.filter(response=request.query_params['response']).order_by('-created_at')
        else:
            comments = Comment.objects.all().order_by('-created_at')
        serializer = CommentSerializer(comments, fields=('id', 'author', 'content', 'response', 'topic', 'created_at', 'modified_at'), many=True)
        return DRF_Response(serializer.data)

class CommentByTopic(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    #Get all Comments for a given Topic
    def get(self, request, topic_id, format=None):
        comments = Comment.objects.filter(topic=topic_id).order_by('-created_at')
        serializer = CommentSerializer(comments, fields=('id', 'author', 'content', 'topic', 'created_at', 'modified_at'), many=True)
        return DRF_Response(serializer.data)

    # Create a Comment for a given Topic
    def post(self, request, topic_id, format=None):
        try:
            topic = Topic.objects.get(pk=topic_id)
        except Topic.DoesNotExist:
            return DRF_Response({"msg": "there are no topics with this id..."}, status=status.HTTP_400_BAD_REQUEST)
        serializer = CommentByTopicInputSerializer(data=request.data)
        serializer.initial_data['author'], serializer.initial_data['topic'] = request.user.id, topic.id
        if serializer.is_valid():
            comment = serializer.save()
            output = CommentOutputSerializer(comment, fields=('id', 'author', 'content', 'topic', 'created_at', 'modified_at'))
            return DRF_Response(output.data, status=status.HTTP_201_CREATED)
        return DRF_Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CommentByResponse(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    #Get all Comments for a given Response
    def get(self, request, response_id, format=None):
        comments = Comment.objects.filter(response=response_id).order_by('-created_at')
        serializer = CommentSerializer(comments, fields=('id', 'author', 'content', 'response', 'created_at', 'modified_at'), many=True)
        return DRF_Response(serializer.data)

    # Create a Comment for a given Topic
    def post(self, request, response_id, format=None):
        try:
            response = Response.objects.get(pk=response_id)
        except Response.DoesNotExist:
            return DRF_Response({"msg": "there are no topics with this id..."}, status=status.HTTP_400_BAD_REQUEST)
        serializer = CommentByResponseInputSerializer(data=request.data)
        serializer.initial_data['author'], serializer.initial_data['response'] = request.user.id, response.id
        if serializer.is_valid():
            comment = serializer.save()
            output = CommentOutputSerializer(comment, fields=('id', 'author', 'content', 'response', 'created_at', 'modified_at'))
            return DRF_Response(output.data, status=status.HTTP_201_CREATED)
        return DRF_Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CommentDetail(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_object(self, pk):
        try:
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise Http404

    # Get a Comment by Id
    def get(self, request, pk, format=None):
        comment = self.get_object(pk)
        serializer = CommentOutputSerializer(comment, fields=('id', 'author', 'content', 'response', 'topic', 'created_at', 'modified_at'))
        print(serializer.data)
        return DRF_Response(serializer.data)

    # Update a Comment
    def put(self, request, pk, format=None):
        comment = self.get_object(pk)
        if comment.author.id != request.user.id:
            return DRF_Response(status=status.HTTP_401_UNAUTHORIZED)
        serializer = CommentInputSerializer(comment, data=request.data, partial=True)
        if serializer.is_valid():
            response = serializer.save()
            output = CommentOutputSerializer(response, fields=('id', 'author', 'content', 'response', 'topic', 'created_at', 'modified_at'))
            return DRF_Response(output.data, status=status.HTTP_200_OK)
        return DRF_Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Delete a Response
    def delete(self, request, pk, format=None):
        comment = self.get_object(pk)
        if comment.author.id != request.user.id:
            return DRF_Response(status=status.HTTP_401_UNAUTHORIZED)
        comment.delete()
        return DRF_Response(status=status.HTTP_204_NO_CONTENT)