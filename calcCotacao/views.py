from django.views.generic import *
from django.http import HttpResponse
from django.core import serializers
import json
from .models import Jogo

def jogos(request):
    obj = Jogo.objects.all()
    data = serializers.serialize('json', obj)
    return HttpResponse(data, content_type='json')