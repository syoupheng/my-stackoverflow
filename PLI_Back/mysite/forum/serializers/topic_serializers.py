from ..models import Topic
from .dynamic_model_serializer import DynamicFieldsModelSerializer
from .user_serializers import UserSerializer
from .comment_serializers import CommentOutputSerializer

class TopicSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'

class OutputTopicSerializer(DynamicFieldsModelSerializer):
    author = UserSerializer(fields = ('id', 'username', 'first_name', 'last_name'))
    comments = CommentOutputSerializer(many=True, read_only=True)
    class Meta:
        model = Topic
        fields = '__all__'