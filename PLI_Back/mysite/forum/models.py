from unicodedata import name
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.deletion import SET_NULL
from django.db.models.fields import DateTimeField
from django.core.validators import MaxValueValidator

# Create your models here.

class Tag(models.Model):
    name = models.CharField(unique=True, blank=False, max_length=200)
    description = models.CharField(null=True, blank=True, max_length=2000)
    created_at = DateTimeField(auto_now_add=True, blank=False)
    deleted_at = DateTimeField(null=True, blank=True)
    modified_at = DateTimeField(auto_now=True, blank=False)

class User(AbstractUser):
    STUDENT = 1
    PROFESSIONAL = 2

    ROLE_CHOICES = (
        (STUDENT, 'Student'),
        (PROFESSIONAL, 'Professional'),
    )

    role = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, default=STUDENT)
    skills = models.ManyToManyField(Tag, related_name='professionals')
    company = models.CharField(null=True, blank=True, max_length=500)

class Topic(models.Model):
    title = models.CharField(blank=False, max_length=200)
    author = models.ForeignKey(User, null=True, blank=False, on_delete=SET_NULL)
    content = models.CharField(null=False, blank=False, max_length=2000)
    created_at = DateTimeField(auto_now_add=True, blank=False)
    deleted_at = DateTimeField(null=True, blank=True)
    modified_at = DateTimeField(auto_now=True, blank=False)

class Response(models.Model):
    author = models.ForeignKey(User, null=True, blank=False, on_delete=SET_NULL)
    topic = models.ForeignKey(Topic, null=False, blank=False, on_delete=models.CASCADE)
    content = models.CharField(null=False, blank=False, max_length=2000)
    created_at = DateTimeField(auto_now_add=True, blank=False)
    deleted_at = DateTimeField(null=True, blank=True)
    modified_at = DateTimeField(auto_now=True, blank=False)

class Comment(models.Model):
    author = models.ForeignKey(User, null=True, blank=False, on_delete=SET_NULL)
    topic = models.ForeignKey(Topic, related_name='comments', null=True, blank=False, on_delete=models.CASCADE)
    response = models.ForeignKey(Response, related_name='comments', null=True, blank=False, on_delete=models.CASCADE)
    content = models.CharField(null=False, blank=False, max_length=2000)
    created_at = DateTimeField(auto_now_add=True, blank=False)
    deleted_at = DateTimeField(null=True, blank=True)
    modified_at = DateTimeField(auto_now=True, blank=False)

class Badge(models.Model):
    name = models.CharField(blank=False, max_length=100)
    user_badge = models.ManyToManyField("User")
    content = models.CharField(null=False, blank=False, max_length=2000)
    score = models.IntegerField(null=False, validators=[MaxValueValidator(2000)])
    created_at = DateTimeField(auto_now_add=True, blank=False)
    deleted_at = DateTimeField(null=True, blank=True)
    modified_at = DateTimeField(auto_now=True, blank=False)

class ContactMessage(models.Model):
    student = models.ForeignKey(User, null=True, blank=False, on_delete=SET_NULL, related_name='contact_message_sent')
    professional = models.ForeignKey(User, null=True, blank=False, on_delete=SET_NULL, related_name='contact_message_received')
    content = models.CharField(null=False, blank=False, max_length=2000)
    created_at = DateTimeField(auto_now_add=True, blank=False)
    deleted_at = DateTimeField(null=True, blank=True)
    modified_at = DateTimeField(auto_now=True, blank=False)
