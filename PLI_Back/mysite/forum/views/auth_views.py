from ..serializers.auth_serializers import MyTokenObtainPairSerializer, MyTokenRefreshSerializer
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.response import Response as DRF_Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.middleware import csrf
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from django.conf import settings
from ..serializers.user_serializers import UserSerializer

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class MyTokenRefreshView(TokenRefreshView):
    def post(self, request, format=None):
        refresh_token = request.COOKIES.get('refresh_token')
        data = {'refresh': refresh_token}
        if refresh_token :
            try:
                serializer = MyTokenRefreshSerializer(data=data)
            except TokenError:
                return DRF_Response({TokenError.args}, status=status.HTTP_400_BAD_REQUEST)
            if serializer.is_valid():
                return DRF_Response(serializer.validated_data, status=status.HTTP_201_CREATED)
            return DRF_Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return DRF_Response('No refresh token provided...', status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request, format=None):
        data = request.data
        response = DRF_Response()        
        username = data.get('username', None)
        password = data.get('password', None)
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                data = get_tokens_for_user(user)
                response.set_cookie(
                    key = settings.SIMPLE_JWT['REFRESH_COOKIE'], 
                    value = data["refresh"],
                    expires = settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
                    secure = settings.SIMPLE_JWT['REFRESH_COOKIE_SECURE'],
                    httponly = settings.SIMPLE_JWT['REFRESH_COOKIE_HTTP_ONLY'],
                    samesite = settings.SIMPLE_JWT['REFRESH_COOKIE_SAMESITE']
                )
                csrf.get_token(request)
                serialized_user = UserSerializer(user, fields=('id', 'username', 'first_name', 'last_name', 'email', 'is_active', 'date_joined', 'last_login', 'role'))
                response.data = {"Success" : "Login successfully", "access":data['access'], "user": serialized_user.data}
                return response
            else:
                return DRF_Response({"No active" : "This account is not active!!"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return DRF_Response({"Invalid" : "Invalid username or password!!"}, status=status.HTTP_404_NOT_FOUND)

class LogoutView(APIView):
    def post(seld, request, format=None):
        refresh_token = request.COOKIES.get('refresh_token')
        if refresh_token:
            response = DRF_Response()
            response.delete_cookie('refresh_token')
            return response
        return DRF_Response('No cookie to delete...', status=status.HTTP_200_OK)