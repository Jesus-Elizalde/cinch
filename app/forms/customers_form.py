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
    first_name=StringField("first_name",validators=[DataRequired(),Length(min=3,message="At least 3 chars")])
    last_name=StringField("last_name",validators=[DataRequired(),Length(min=3,message="At least 3 chars")])
    mobile_number=StringField("mobile_number",validators=[DataRequired(),Length(min=7,message="At least 7 digits")])
    home_number=StringField("home_number",)
    email=StringField("email",validators=[DataRequired(),is_email,customer_exists])
    note=StringField("note")
    edited_by=StringField("edited_by",validators=[DataRequired()])
    business_id=IntegerField("business_id",validators=[DataRequired()])
    id=IntegerField("id")

class EditCustomerForm(FlaskForm):
    first_name=StringField("first_name",validators=[DataRequired(),Length(min=3,message="At least 3 chars")])
    last_name=StringField("last_name",validators=[DataRequired(),Length(min=3,message="At least 3 chars")])
    mobile_number=StringField("mobile_number",validators=[DataRequired(),Length(min=7,message="At least 7 digits")])
    home_number=StringField("home_number",)
    email=StringField("email")
    note=StringField("note")
    edited_by=StringField("edited_by",validators=[DataRequired()])
    business_id=IntegerField("business_id",validators=[DataRequired()])
    id=IntegerField("id")
