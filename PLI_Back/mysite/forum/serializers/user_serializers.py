from ..models import User
from .dynamic_model_serializer import DynamicFieldsModelSerializer
from .tag_serializers import TagSerializer

class UserSerializer(DynamicFieldsModelSerializer):
    skills = TagSerializer(fields = ('id', 'name'), many=True, read_only=True)
    class Meta:
        model = User
        fields = '__all__'