
from django.conf.urls import url
from django.contrib import admin
from calcCotacao.views import *

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^jogos/',jogos, name='jogos'),
]
