from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.utils.encoding import smart_str

from api.models import Ticket
from api.serializers import TicketSerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_ticket_list(request):
    user_id = request.user.id

    if request.method == 'GET':
        tickets = Ticket.objects.filter(user_id=user_id)
        serializer = TicketSerializer(tickets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TicketSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_ticket_details(request, ticket_id):
    try:
        ticket = Ticket.objects.get(id=ticket_id)
    except Ticket.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == 'GET':
        serializer = TicketSerializer(ticket)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = TicketSerializer(instance=ticket, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        ticket.delete()
        return Response({'deleted': 'true'})