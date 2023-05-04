from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group

# Create your models here.

User = get_user_model()
    
admin_group, created = Group.objects.get_or_create(name='Admins')
editor_group, created = Group.objects.get_or_create(name='Editors')
user_group, created = Group.objects.get_or_create(name='Users')


class Location(models.Model):
    name = models.CharField(max_length=50, default=None, null=True, blank=True)
    city = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    image = models.CharField(max_length=1500, default="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg")
    url = models.CharField(max_length=300, default="")

    class Meta():
        verbose_name = 'Location'
        verbose_name_plural = 'Locations'


class Club(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    logo = models.CharField(max_length=1500, default="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg")
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)

    class Meta():
        verbose_name = 'Club'
        verbose_name_plural = 'Clubs'

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    club = models.ForeignKey(Club, on_delete=models.CASCADE)

class News(models.Model):
    title = models.CharField(max_length=200)
    text = models.CharField(max_length = 1500)
    club = models.ForeignKey(Club, on_delete=models.CASCADE, default=None)
    image = models.CharField(max_length=1000, default="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg")
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)

    class Meta():
        verbose_name = 'News'
        verbose_name_plural = 'News'


class Event(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    image = models.CharField(max_length=1500, default="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg")
    date_time = models.DateTimeField()
    club = models.ForeignKey(Club, on_delete=models.CASCADE, default=None)
    location = models.ForeignKey(Location, on_delete=models.CASCADE, default=None)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)

    class Meta():
        verbose_name = 'Event'
        verbose_name_plural = 'Events'


class Ticket(models.Model):
    TICKET_TYPES = [
        ('standard', 'Standard'),
        ('VIP', 'VIP'),
        ('premium', 'Premium')
    ]

    event = models.ForeignKey(Event, on_delete=models.CASCADE, default=None)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    ticket_type = models.CharField(max_length=10, choices=TICKET_TYPES)
    standard_cost = models.FloatField(default=1000)

    class Meta():
        verbose_name = 'Ticket'
        verbose_name_plural = 'Tickets'