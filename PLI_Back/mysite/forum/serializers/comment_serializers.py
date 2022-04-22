from ..models import Comment
from .dynamic_model_serializer import DynamicFieldsModelSerializer
from ..serializers.user_serializers import UserSerializer

class CommentSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class CommentInputSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Comment
        fields = ('content',)

class CommentByTopicInputSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Comment
        fields = ('content', 'author', 'topic')

class CommentByResponseInputSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Comment
        fields = ('content', 'author', 'response')

class CommentOutputSerializer(DynamicFieldsModelSerializer):
    author = UserSerializer(fields = ('id', 'last_login', 'username', 'first_name', 'last_name', 'date_joined'))
    class Meta:
        model = Comment
        fields = '__all__'