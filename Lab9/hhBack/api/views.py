from django.shortcuts import render
from api.models import Company, Vacancy
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.

@csrf_exempt
def companies(request):
    if request.method == 'GET':
        try:
            companies = Company.objects.all()
            companies_list = [comp.to_json() for comp in companies]
        except Exception as e:
            return JsonResponse({'Error': str(e)}, status=400)
        return JsonResponse(companies_list, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        description = data.get('description', '')
        city = data.get('city', '')
        address = data.get('address', '')

        company = Company.objects.create(name=company_name, description=description, city=city, address=address)
        return JsonResponse(company.to_json())

@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Exception as e:
        return JsonResponse({'Error': str(e)}, status=400)
    
    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company_name = data.get('name', company.name)
        company_description = data.get('description', company.description)
        company_city = data.get('city', company.city)
        company_address = data.get('address', company.address)

        company.name = company_name
        company.description = company_description
        company.city = company_city
        company.address = company_address
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': 'true'})

def company_vacancies(request, company_id):
    try:
        company_selected = Company.objects.get(id=company_id)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

    vacancies = Vacancy.objects.filter(company=company_selected)
    vacancies_list = [vac.to_json() for vac in vacancies]
    return JsonResponse(vacancies_list, safe=False)

@csrf_exempt
def vacancies(request):
    if request.method == 'GET':
        try:
            vacancies = Vacancy.objects.all()
            vacancies_list = [vac.to_json() for vac in vacancies]
        except Exception as e:
            return JsonResponse({'Error': str(e)}, status=400)
        return JsonResponse(vacancies_list, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        vacancy_description = data.get('description', '')
        vacancy_salary = data.get('salary', '')
        vacancy_company = data.get('company', '')
        vacancy = Vacancy.objects.create(name=vacancy_name, description=vacancy_description, salary=vacancy_salary, company=Company.objects.get(id=vacancy_company))
        return JsonResponse(vacancy.to_json())

@csrf_exempt
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)
    
    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        vacancy_name = data.get('name', vacancy.name)
        vacancy_description = data.get('description', vacancy.description)
        vacancy_salary = data.get('salary', vacancy.salary)
        vacancy_company = data.get('company', vacancy.company)

        vacancy.name = vacancy_name
        vacancy.description = vacancy_description
        vacancy.salary = vacancy_salary
        vacancy.company = vacancy_company
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'deleted': 'true'})

def vacancies_top_ten(request):
    vacancies = Vacancy.objects.all().order_by("-salary").values()
    vacancies_list = [vacancies[i] for i in range(0, min(10, len(vacancies)))]
    return JsonResponse(vacancies_list, safe=False)
