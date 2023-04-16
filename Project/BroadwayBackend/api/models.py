from django.db import models

# Create your models here.

class News(models.Model):
    title = models.CharField(max_length=200)
    text = models.CharField(max_length = 1500)
    image = models.CharField(max_length=1000)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)

    class Meta():
        verbose_name = 'News'
        verbose_name_plural = 'News'
    

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'text': self.text,
            'image': self.image,
            'likes': self.likes,
            'dislikes': self.dislikes
        }
    

    def __str__(self):
        return self.title


class Event(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    image = models.CharField(max_length=1000, default="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg")
    date_time = models.DateTimeField()
    organizer = models.CharField(max_length=50)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)

    class Meta():
        verbose_name = 'Event'
        verbose_name_plural = 'Events'
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'image': self.image,
            'date_time': self.date_time,
            'organizer': self.organizer,
            'likes': self.likes,
            'dislikes': self.dislikes
        }
    
    def __str__(self):
        return self.name
