from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField,DecimalField
from wtforms.validators import DataRequired

class ServiceForm(FlaskForm):
    id = IntegerField("id")
    name = StringField("name",validators=[DataRequired()])
    description = StringField("description",validators=[DataRequired()])
    image = StringField("image",validators=[DataRequired()])
    unit = StringField("unit",validators=[DataRequired()])
    cost = DecimalField("cost",validators=[DataRequired()])
    price = DecimalField("price",validators=[DataRequired()])
    category_id = IntegerField("category_id")
