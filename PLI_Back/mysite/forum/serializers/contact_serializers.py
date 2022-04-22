from .user_serializers import UserSerializer
from ..models import ContactMessage
from .dynamic_model_serializer import DynamicFieldsModelSerializer

class ContactSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

class ContactOutputSerializer(DynamicFieldsModelSerializer):
    student = UserSerializer(fields=('id', 'username', 'first_name', 'last_name', 'role'))
    professional = UserSerializer(fields=('id', 'username', 'first_name', 'last_name', 'role', 'company'))
    class Meta:
        model = ContactMessage
        fields = '__all__'