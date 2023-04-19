from api.models import Company, Vacancy
from rest_framework import serializers
from rest_framework.response import Response

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance
    
    def delete(self, instance):
        instance.delete()


class VacancySerializer(serializers.ModelSerializer):
    company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all())
    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company')
    
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['company'] = CompanySerializer(instance.company).data
        return ret
    
    def create(self, validated_data):
        # Modify the validated_data dictionary here
        validated_data['name'] = validated_data['name'].upper()

        return super().create(validated_data)