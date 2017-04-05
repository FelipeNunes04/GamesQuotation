from django.views.generic import *
from django.http import HttpResponse
from django.core import serializers
import json
from django.contrib.auth.decorators import login_required
from django.views.generic import *
from .models import Jogo

def jogos(request):
    obj = Jogo.objects.all()
    data = serializers.serialize('json', obj)
    return HttpResponse(data, content_type='json')

class LoginRequiredMixin(object):
    @classmethod
    def as_view(cls, **initkwargs):
        view = super(LoginRequiredMixin, cls).as_view(**initkwargs)
        return login_required(view)

class ListaJogos(LoginRequiredMixin,TemplateView):
	template_name = "lista_jogos.html"