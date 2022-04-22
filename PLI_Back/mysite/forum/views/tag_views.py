from ..serializers.user_serializers import UserSerializer
from ..models import Tag, User
from ..serializers.tag_serializers import TagSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response as DRF_Response
import operator
from django.db.models import Q
from functools import reduce
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from django.http import Http404

class TagList(APIView):
    # Search a Tag by name
    def get(self, request, format=None):
        if 'search' in request.query_params:
            search_input = request.query_params['search']
            if not search_input:
                results = Tag.objects.all()
            else:
                search_words = search_input.split(' ')
                results = Tag.objects.filter(reduce(operator.or_, (Q(name__icontains=word) for word in search_words)))
            if not results:
                return DRF_Response(status=status.HTTP_404_NOT_FOUND)
            serializer = TagSerializer(results, fields=('id', 'name', 'description'), many=True)
            return DRF_Response(serializer.data)
        tags = Tag.objects.all()
        serializer = TagSerializer(tags, fields=('id', 'name', 'description'), many=True)
        return DRF_Response(serializer.data)

class TagByUserDetail(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return Tag.objects.get(pk=pk)
        except Tag.DoesNotExist:
            raise Http404

    # Add a skill to current user
    def put(self, request, tag_id, format=None):
        if request.user.role != User.PROFESSIONAL:
            return DRF_Response('You need to be a professional to perform this action !', status=status.HTTP_401_UNAUTHORIZED)
        tag = self.get_object(tag_id)
        user = request.user
        user.skills.add(tag)
        output = UserSerializer(user, fields=('id', 'last_login', 'username', 'first_name', 'last_name', 'date_joined', 'skills'))
        return DRF_Response(output.data, status=status.HTTP_200_OK)

    # Delete skill for current user
    def delete(self, request, tag_id, format=None):
        if request.user.role != User.PROFESSIONAL:
            return DRF_Response('You need to be a professional to perform this action !', status=status.HTTP_401_UNAUTHORIZED)
        tag = self.get_object(tag_id)
        user = request.user
        if not user.skills.filter(id=tag_id).exists():
            return DRF_Response('This user does not have this skill !', status=status.HTTP_400_BAD_REQUEST)
        user.skills.remove(tag)
        output = UserSerializer(user, fields=('id', 'last_login', 'username', 'first_name', 'last_name', 'date_joined', 'skills'))
        return DRF_Response(output.data, status=status.HTTP_200_OK)

class TagByUserList(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    # Get all the skills for current user
    def get(self, request, format=None):
        user = request.user
        skills = user.skills.all()
        serializer = TagSerializer(skills, fields=('id', 'name', 'description'), many=True)
        return DRF_Response(serializer.data)
