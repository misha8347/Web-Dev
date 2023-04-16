from rest_framework import serializers
from api.models import News, Event

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'


class EventSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=200)
    description = serializers.CharField(max_length=500)
    image =serializers.CharField(max_length=1000, default="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg")
    date_time = serializers.DateTimeField()
    organizer = serializers.CharField(max_length=50)
    likes = serializers.IntegerField(default=0)
    dislikes = serializers.IntegerField(default=0)

    def create(self, validated_data):
        event = Event.objects.create(**validated_data)
        return event
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.image)
        instance.date_time = validated_data.get('date_time', instance.date_time)
        instance.organizer = validated_data.get('organizer', instance.organizer)
        instance.likes = validated_data.get('likes', instance.likes)
        instance.dislikes = validated_data.get('dislikes', instance.dislikes)

        instance.save()
        return instance