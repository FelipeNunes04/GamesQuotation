from django.contrib.auth.views import login,logout
from django.conf.urls import url
from django.contrib import admin
from calcCotacao.views import *

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^jogos/',jogos, name='jogos'),
    url(r'^$',ListaJogos.as_view(), name='lista-jogos'),

    url(r'^usuario/login/$',login,{'template_name':'admin/login.html'},name='login'),
    url(r'^usuario/logout/$',logout,{'template_name':'admin/logout.html'},name='logout'),

]
