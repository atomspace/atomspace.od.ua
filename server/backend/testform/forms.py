from django import forms

class MerchForm(forms.Form):
    name = forms.CharField(label='Name', widget=forms.TextInput(attrs={'class': 'input-group-text'}))
    price = forms.IntegerField(label='Price', widget=forms.NumberInput(attrs={'class': 'input-group-text'}))
    photo = forms.ImageField(label='Item photo(not SVG)')

class NewsForm(forms.Form):
    header = forms.CharField(widget=forms.TextInput(attrs={'class': 'input-group-text'}))
    content = forms.CharField(widget=forms.Textarea(attrs={'class': 'form-control'}))
    photo = forms.ImageField()