from django import forms

# YEARS = [x for x in range(1980, 2005)]
# class MentorForm(forms.Form):
#     name = forms.CharField(label='Your first and last name', max_length=30)
#     number = forms.IntegerField(label='Your phone')
#     email = forms.EmailField(label='Your Email', max_length=50)
#     information = forms.CharField(label='Your information', max_length=300)

# class ResidentForm(forms.Form):
#     name = forms.CharField(label='Your first and last name', max_length=40)
#     email = forms.EmailField(label='Your Email', max_length=50)
#     number = forms.IntegerField(label='Your phone')
#     date = forms.DateField(label='Your birth date', widget=forms.SelectDateWidget(years=YEARS))

class MerchForm(forms.Form):
    name = forms.CharField(label='Name', widget=forms.TextInput(attrs={'class': 'input-group-text'}))
    price = forms.IntegerField(label='Price', widget=forms.NumberInput(attrs={'class': 'input-group-text'}))
    photo = forms.ImageField(label='Item photo(not SVG)')

class NewsForm(forms.Form):
    header = forms.CharField(widget=forms.TextInput(attrs={'class': 'input-group-text'}))
    content = forms.CharField(widget=forms.Textarea(attrs={'class': 'form-control'}))
    photo = forms.ImageField()