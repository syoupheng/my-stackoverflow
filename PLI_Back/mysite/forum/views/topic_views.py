from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response as DRF_Response
from ..serializers.topic_serializers import TopicSerializer, OutputTopicSerializer
from ..models import Topic
import operator
from django.db.models import Q
from functools import reduce
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from django.http.response import Http404

class TopicsList(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, format=None):
        if 'search' in request.query_params:
            search_input = request.query_params['search']
            search_words = search_input.split(' ')
            results = Topic.objects.filter(reduce(operator.and_, (Q(title__icontains=word) for word in search_words))).order_by('-created_at')
            if not results:
                return DRF_Response(status=status.HTTP_404_NOT_FOUND)
            serializer = TopicSerializer(results, many=True)
            return DRF_Response(serializer.data)
        else:
            topics = Topic.objects.all().order_by('-created_at')
            serializer = TopicSerializer(topics, fields=('id', 'title', 'author', 'content', 'created_at', 'deleted_at', 'modified_at'), many=True)
        return DRF_Response(serializer.data)

    def post(self, request):
        serializer = TopicSerializer(data=request.data)
        serializer.initial_data['author'] = request.user.id
        if serializer.is_valid():
            topics = serializer.save()
            output = OutputTopicSerializer(topics, fields=('id','title', 'author', 'content', 'created_at'))
            return DRF_Response(output.data, status=status.HTTP_201_CREATED)
        return DRF_Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TopicsDetail(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_object(self, pk):
        try:
            return Topic.objects.get(pk=pk)
        except Topic.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        topic = self.get_object(pk)
        serializer = TopicSerializer(data=request.data)
        serializer.initial_data['author'] = request.user.id
        serializer = OutputTopicSerializer(topic)
        return DRF_Response(serializer.data)

    def put(self, request, pk):
        topic = self.get_object(pk)
        serializer = TopicSerializer(topic, data=request.data, fields=('title', 'author', 'content'), partial=True)
        serializer.initial_data['author'] = request.user.id
        if serializer.is_valid():
            topic = serializer.save()
            output = OutputTopicSerializer(topic)
            return DRF_Response(output.data, status=status.HTTP_200_OK)
        return DRF_Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        topic = self.get_object(pk)
        topic.delete()
        return DRF_Response(status=status.HTTP_204_NO_CONTENT)


class TopicSearch(APIView):
    # Search a Topic by title
    def get(self, request, format=None):
        if 'search' in request.query_params:
            search_input = request.query_params['search']
            search_words = search_input.split(' ')
            results = Topic.objects.filter(reduce(operator.and_, (Q(title__icontains=word) for word in search_words))).order_by('-created_at')
            if not results:
                return DRF_Response(status=status.HTTP_404_NOT_FOUND)
            serializer = TopicSerializer(results, many=True)
            return DRF_Response(serializer.data)
        topics = Topic.objects.all().order_by('-created_at')
        serializer = TopicSerializer(topics, many=True)
        return DRF_Response(serializer.data)

class TopicListByUser(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        topics = Topic.objects.filter(author=request.user.id).order_by('-created_at')
        if not topics:
            return DRF_Response(status=status.HTTP_404_NOT_FOUND)
        serializer = TopicSerializer(topics, fields=('id', 'title', 'author', 'content', 'created_at', 'deleted_at', 'modified_at'), many=True)
        return DRF_Response(serializer.data)
