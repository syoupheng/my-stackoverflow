from ..models import Tag
from .dynamic_model_serializer import DynamicFieldsModelSerializer

class TagSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'