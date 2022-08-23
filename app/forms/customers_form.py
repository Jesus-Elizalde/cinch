from flask_wtf import FlaskForm
from wtforms import StringField , IntegerField, DateTimeField
from wtforms.validators import DataRequired,ValidationError,Length
from app.models import Customer
import re

def is_email(form,field):
    email = field.data
    regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')

    if not re.fullmatch(regex, email):
        raise ValidationError('Email not valid.')

def customer_exists(form, field):
    # Checking if customer exists
    email = field.data
    user = Customer.query.filter(Customer.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

class CustomerForm(FlaskForm):
    first_name=StringField("first_name",validators=[DataRequired()])
    last_name=StringField("last_name")
    mobile_number=StringField("mobile_number")
    home_number=StringField("home_number",)
    email=StringField("email")
    note=StringField("note")
    street=StringField("street")
    city=StringField("city")
    state=StringField("state")
    country=StringField("country")
    postal_code=StringField("postal_code")


class EditCustomerForm(FlaskForm):
    first_name=StringField("first_name")
    last_name=StringField("last_name")
    mobile_number=StringField("mobile_number")
    home_number=StringField("home_number",)
    email=StringField("email")
    note=StringField("note")
    street=StringField("street")
    city=StringField("city")
    state=StringField("state")
    country=StringField("country")
    postal_code=StringField("postal_code")
    id=IntegerField("id")
