from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
from sqlalchemy import or_


def user_exists(form, field):
    # Checking if user exists
    email_username = field.data
    user = User.query.filter(or_(User.email == email_username, User.username == email_username)).first()
    if not user:
        raise ValidationError('Email or Username provided not found.')



def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email_username = form.data['email_username']
    user = User.query.filter(or_(User.email == email_username, User.username == email_username)).first()
    if not user:
        raise ValidationError('No such user exists.')
    if not user.check_password(password):
        raise ValidationError('Password was incorrect.')


class LoginForm(FlaskForm):
    email_username = StringField('email_username', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[
                           DataRequired(), password_matches])
