from django import forms
from .models import Order, ItemOrder,Jogo


class OrderForms(forms.ModelForm):
	cliente = forms.CharField(
		label = 'Nome do Solicitante',
		widget = forms.TextInput(
			attrs = {
				'placeholder': 'Nome do Solicitante',
				'required': 'required',
				'class': 'form-control'
			}
		)
	)

	email = forms.EmailField(
		label = 'Email do Solicitante',
		widget = forms.TextInput(
			attrs = {
				'placeholder': 'exemplo@exemplo.com',
				'required': 'required',
				'class': 'form-control'
			}
		)
	)

	preco_total = forms.DecimalField(
		label = 'Valor Total',
		widget = forms.NumberInput(
			attrs = {
				'required': 'required',
				'class': 'form-control',
				'id': 'preco_total',
				'readonly': 'true',
			}
		)
	)

	class Meta:
		model = Order
		exclude = ['data']


class ItemOrderForms(forms.ModelForm):

	preco = forms.DecimalField(
		label = 'Valor',
		min_value = 0,
		widget = forms.NumberInput(
			attrs = {
				'required': 'required',
				'class': 'form-control',
				'id': 'preco',
				'readonly': 'true',
			}
		)
	)

	quantidade = forms.IntegerField(
		label = 'Quantidade',
		widget = forms.NumberInput(
			attrs = {
				'required': 'required',
				'class': 'form-control',
				'id': 'qtd',
			}
		)
	)

	jogo = forms.ModelChoiceField(
		label = 'Jogo',
		queryset = Jogo.objects.all(),
		widget = forms.Select(
			attrs = {
				'required': 'required',
				'class': 'form-control',
				'id': 'jogo',
			}
		)
	)

	class Meta:
		model = ItemOrder
		exclude = ['order']