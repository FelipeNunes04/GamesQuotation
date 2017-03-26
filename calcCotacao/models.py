from django.db import models
import json

class Jogo(models.Model):
	nome = models.CharField(max_length = 100)
	console = models.CharField(max_length = 100)
	preco = models.DecimalField(max_digits=30, decimal_places=2)

	def __str__(self):
		preco = str(self.preco)
		return self.nome +" | "+ self.console +" | R$"+ preco
		

