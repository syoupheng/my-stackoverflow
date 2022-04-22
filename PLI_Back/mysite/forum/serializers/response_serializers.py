from .comment_serializers import CommentOutputSerializer
from ..models import Response
from .dynamic_model_serializer import DynamicFieldsModelSerializer
from .user_serializers import UserSerializer
from rest_framework import serializers

class ResponseSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Response
        fields = '__all__'

class ResponseInputSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Response
        fields = ('content',)

class ResponseOutputSerializer(serializers.ModelSerializer):
    author = UserSerializer(fields=('id', 'last_login', 'username', 'first_name', 'last_name', 'date_joined'))
    comments = CommentOutputSerializer(many=True, read_only=True)
    class Meta:
        model = Response
        fields = ('id', 'content', 'topic', 'created_at', 'modified_at', 'author', 'comments')