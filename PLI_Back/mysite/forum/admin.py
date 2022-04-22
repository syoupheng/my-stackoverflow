from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Topic, Response, Comment, Tag

# Register your models here.

admin.site.register(User, UserAdmin)
admin.site.register(Topic)
admin.site.register(Response)
admin.site.register(Comment)
admin.site.register(Tag)