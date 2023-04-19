from django.shortcuts import Http404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class CompanyDetailAPIView(APIView):
    def get_object(self, company_id):
        try:
            return Company.objects.get(id=company_id)
        except Company.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_404_NOT_FOUND)

    def get(self, request, company_id):
        company = self.get_object(company_id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    
    def put(self, request, company_id):
        company = self.get_object(company_id)
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
    
    def delete(self, request, company_id):
        company = self.get_object(company_id)
        company.delete()
        return Response({'deleted': 'true'})


class CompanyVacanciesAPIView(APIView):
    def get_object(self, company_id):
        try:
            return Company.objects.get(id=company_id)
        except Company.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_404_NOT_FOUND)

    def get(self, request, company_id):
        company = self.get_object(company_id)
        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


