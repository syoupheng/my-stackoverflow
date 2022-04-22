from ..serializers.user_serializers import UserSerializer
from ..models import ContactMessage, User
from ..serializers.contact_serializers import ContactSerializer, ContactOutputSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response as DRF_Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from django.http import Http404
from django.core.mail import send_mail
from django.conf import settings

class ContactMessageDetail(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    # Send a contact message
    def post(self, request, pro_id, format=None):
        professional = self.get_object(pro_id)
        if request.user.role != User.STUDENT:
            return DRF_Response('You need to be a student to perform this action !', status=status.HTTP_401_UNAUTHORIZED) 
        serializer = ContactSerializer(data=request.data)
        serializer.initial_data['student'], serializer.initial_data['professional'] = request.user.id, professional.id
        if serializer.is_valid():
            contact_message = serializer.save()
            send_mail(subject='Demande de contact - Forum', message=request.data['content'], from_email=settings.EMAIL_HOST_USER, recipient_list=[professional.email])
            output = ContactOutputSerializer(contact_message)
            return DRF_Response(output.data, status=status.HTTP_201_CREATED)
        return DRF_Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ContactMessageList(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    # Get all contact messages
    def get(self, request, format=None):
        if request.user.role == User.PROFESSIONAL:
            messages = ContactMessage.objects.filter(professional=request.user.id)
        elif request.user.role == User.STUDENT:
            messages = ContactMessage.objects.filter(student=request.user.id)
        serializer = ContactOutputSerializer(messages, fields=('id', 'student', 'professional', 'content'), many=True)
        return DRF_Response(serializer.data)
