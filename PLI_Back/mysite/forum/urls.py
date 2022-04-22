from django.urls import path

from .views.contact_views import ContactMessageList, ContactMessageDetail
from .views.tag_views import TagByUserDetail, TagList, TagByUserList
from .views.auth_views import LoginView, LogoutView, MyTokenRefreshView
from .views.response_views import ResponseByTopic, ResponseDetail, ResponseList, ResponseListByUser
from .views.user_views import UserByToken, UserDetail, UserList, UserListByTag
from .views.topic_views import TopicListByUser, TopicsDetail, TopicsList
from .views.comment_views import CommentDetail, CommentList, CommentByTopic, CommentByResponse
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('users/', UserList.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
    # path('topics/', TopicSearch.as_view()),
    path('responses/', ResponseList.as_view()),
    path('responses/<int:pk>/', ResponseDetail.as_view()),
    path('auth/users/responses/', ResponseListByUser.as_view()),
    path('topics/<int:topic_id>/responses', ResponseByTopic.as_view()),
    path('topics/', TopicsList.as_view()),
    path('topics/<int:pk>/', TopicsDetail.as_view()),
    path('auth/users/topics/', TopicListByUser.as_view()),
    path('comments/', CommentList.as_view()),
    path('comments/<int:pk>/', CommentDetail.as_view()),
    path('topics/<int:topic_id>/comments', CommentByTopic.as_view()),
    path('responses/<int:response_id>/comments', CommentByResponse.as_view()),
    path('tags/', TagList.as_view()),
    path('auth/users/tags/<int:tag_id>', TagByUserDetail.as_view()),
    path('auth/users/tags/', TagByUserList.as_view()),
    path('auth/', LoginView.as_view(), name='login'),
    path('auth/refresh', MyTokenRefreshView.as_view(), name='token_refresh'),
    path('auth/user', UserByToken.as_view(), name='user_by_token'),
    path('auth/logout', LogoutView.as_view(), name='logout'),
    path('users/professionals', UserListByTag.as_view()),
    path('users/professionals/<int:pro_id>/contact', ContactMessageDetail.as_view()),
    path('auth/users/contact', ContactMessageList.as_view()),
    # path('topic', TopicView.as_view()),
    # path('response', ResponseViewSet.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
