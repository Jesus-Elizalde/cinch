from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
import re


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

def is_email(form,field):
    email = field.data
    regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')

    if not re.fullmatch(regex, email):
        raise ValidationError('Email not valid.')

def strong_password(form,field):
    password = field.data
    regex = re.compile(r'(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')

    if not re.fullmatch(regex,password):
         raise ValidationError('Password must contain at least 8 characters, 1 upper case, 1 special character (!@#$&*),1 digit (0-9),1 lower case')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists,is_email])
    password = StringField('password', validators=[DataRequired(),strong_password])
    password = StringField('password', validators=[DataRequired(),strong_password])
    role = StringField('role', validators=[DataRequired()])
    color = StringField('color')
