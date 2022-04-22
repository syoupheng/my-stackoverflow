from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response as DRF_Response
from ..serializers.user_serializers import UserSerializer
from ..models import User
from django.http import Http404
import bcrypt
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
import operator
from django.db.models import Q
from functools import reduce

# Create your views here.

class UserList(APIView):
    # Get all Users
    def get(self, request, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, fields=('id', 'last_login', 'username', 'first_name', 'last_name', 'date_joined'), many=True)
        return DRF_Response(serializer.data)

    # Create a User
    def post(self, request, format=None):
        input_fields = ('password', 'username', 'first_name', 'last_name', 'email', 'role',)
        if request.data['role'] == User.PROFESSIONAL:
            input_fields += ('company',) 
        serializer = UserSerializer(data=request.data, fields=input_fields)
        if serializer.is_valid():
            print(serializer.validated_data)
            serializer.validated_data['password'] = make_password(serializer.validated_data['password'], salt=bcrypt.gensalt())
            user = serializer.save()
            output_fields = ('id', 'username', 'first_name', 'last_name', 'date_joined', 'role')
            output = UserSerializer(user, fields=output_fields)
            return DRF_Response(output.data, status=status.HTTP_201_CREATED)
        return DRF_Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetail(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    # Get a User by Id
    def get(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = UserSerializer(user, fields=('id', 'last_login', 'username', 'first_name', 'last_name', 'date_joined'))
        return DRF_Response(serializer.data)

    # Update a User
    def put(self, request, pk, format=None):
        user = self.get_object(pk)
        if pk != request.user.id:
            return DRF_Response(status=status.HTTP_401_UNAUTHORIZED)
        serializer = UserSerializer(user, data=request.data, fields=('password', 'username', 'first_name', 'last_name', 'email', 'company'), partial=True)
        if serializer.is_valid():
            if "password" in serializer.validated_data:
                serializer.validated_data['password'] = make_password(serializer.validated_data['password'], salt=bcrypt.gensalt())
            user = serializer.save()
            output = UserSerializer(user, fields=('id', 'last_login', 'username', 'first_name', 'last_name', 'date_joined', 'company', 'role'))
            return DRF_Response(output.data, status=status.HTTP_200_OK)
        return DRF_Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Delete a User
    def delete(self, request, pk, format=None):
        user = self.get_object(pk)
        if pk != request.user.id:
            return DRF_Response(status=status.HTTP_401_UNAUTHORIZED)
        user.delete()
        return DRF_Response(status=status.HTTP_204_NO_CONTENT)

class UserByToken(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    # Get User from token
    def get(self, request, format=None):
        user = self.get_object(request.user.id)
        serializer = UserSerializer(user, fields=('id', 'username', 'first_name', 'last_name', 'email', 'is_active', 'date_joined', 'last_login', 'skills', 'role', 'company'))
        return DRF_Response(serializer.data) 

class UserListByTag(APIView):
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    # Search professionals by skills
    def get(self, request, format=None):
        if 'search' in request.query_params:
            search_input = request.query_params['search']
            tag_list = search_input.split(' ')
            results = User.objects.filter(role=User.PROFESSIONAL)
            for tag in tag_list:
                results = results.filter(skills__name=tag)
            results = results.distinct()
            # results = User.objects.filter(skills__name__in=tag_list).distinct()
            # results = User.objects.filter(reduce(operator.and_, (Q(skills__name=tag) for tag in tag_list))).distinct()
            if not results:
                return DRF_Response(status=status.HTTP_404_NOT_FOUND)
            serializer = UserSerializer(results, fields=('id', 'username', 'first_name', 'last_name', 'email', 'is_active', 'date_joined', 'skills', 'role', 'company'), many=True)
            return DRF_Response(serializer.data)
        results = User.objects.filter(role=User.PROFESSIONAL)
        serializer = UserSerializer(results, fields=('id', 'username', 'first_name', 'last_name', 'email', 'is_active', 'date_joined', 'skills', 'role', 'company'), many=True)
        return DRF_Response(serializer.data)
        
    