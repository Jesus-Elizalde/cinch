from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class CategoryForm(FlaskForm):
    id = IntegerField("id")
    name = StringField("name",validators=[DataRequired()])
    image = StringField("image",validators=[DataRequired()])
    business_id = IntegerField("business_id")
