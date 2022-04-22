from django.http.response import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response as DRF_Response
from ..serializers.response_serializers import ResponseSerializer, ResponseOutputSerializer, ResponseInputSerializer
from ..models import Response, Topic
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

class ResponseList(APIView):
    # Get all Responses
    def get(self, request, format=None):
        responses = Response.objects.all().order_by('-created_at')
        serializer = ResponseOutputSerializer(responses, many=True)
        return DRF_Response(serializer.data)

class ResponseByTopic(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    #Get all Responses for a given Topic
    def get(self, request, topic_id, format=None):
        responses = Response.objects.filter(topic=topic_id).order_by('-created_at')
        serializer = ResponseOutputSerializer(responses, many=True)
        return DRF_Response(serializer.data)

    # Create a Response
    def post(self, request, topic_id, format=None):
        try:
            topic = Topic.objects.get(pk=topic_id)
        except Topic.DoesNotExist:
            return DRF_Response({"msg": "there are no topics with this id..."}, status=status.HTTP_400_BAD_REQUEST)
        serializer = ResponseSerializer(data=request.data, fields=('content', 'author', 'topic',))
        serializer.initial_data['author'], serializer.initial_data['topic'] = request.user.id, topic.id
        print(serializer.initial_data)
        if serializer.is_valid():
            print(serializer.validated_data)
            response = serializer.save()
            output = ResponseOutputSerializer(response)
            return DRF_Response(output.data, status=status.HTTP_201_CREATED)
        return DRF_Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ResponseDetail(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_object(self, pk):
        try:
            return Response.objects.get(pk=pk)
        except Response.DoesNotExist:
            raise Http404

    # Get a Response by Id
    def get(self, request, pk, format=None):
        response = self.get_object(pk)
        serializer = ResponseOutputSerializer(response)
        return DRF_Response(serializer.data)

    # Update a Response
    def put(self, request, pk, format=None):
        response = self.get_object(pk)
        if response.author.id != request.user.id:
            return DRF_Response(status=status.HTTP_401_UNAUTHORIZED)
        serializer = ResponseInputSerializer(response, data=request.data, partial=True)
        if serializer.is_valid():
            response = serializer.save()
            output = ResponseOutputSerializer(response)
            return DRF_Response(output.data, status=status.HTTP_200_OK)
        return DRF_Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Delete a Response
    def delete(self, request, pk, format=None):
        response = self.get_object(pk)
        if response.author.id != request.user.id:
            return DRF_Response(status=status.HTTP_401_UNAUTHORIZED)
        response.delete()
        return DRF_Response(status=status.HTTP_204_NO_CONTENT)

class ResponseListByUser(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        responses = Response.objects.filter(author=request.user.id).order_by('-created_at')
        if not responses:
            return DRF_Response(status=status.HTTP_404_NOT_FOUND)
        serializer = ResponseOutputSerializer(responses, many=True)
        return DRF_Response(serializer.data)