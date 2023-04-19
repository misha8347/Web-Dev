from django.urls import path
from api.views import fbv, cbv

urlpatterns = [
    path('companies/', cbv.CompanyListAPIView.as_view()),
    path('companies/<int:company_id>/', cbv.CompanyDetailAPIView.as_view()),
    path('companies/<int:company_id>/vacancies/', cbv.CompanyVacanciesAPIView.as_view()),
    path('vacancies/', fbv.vacancies),
    path('vacancies/<int:vacancy_id>/', fbv.vacancy_detail),
    path('vacancies/top_ten/', fbv.vacancies_top_ten)
]
