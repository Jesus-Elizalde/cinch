from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField,DateTimeField
from wtforms.validators import DataRequired

class JobForm(FlaskForm):
    id = IntegerField("id")
    from_date_time = DateTimeField("from_date_time",validators=[DataRequired()])
    to_date_time = DateTimeField("to_date_time",validators=[DataRequired()])
    message = StringField("message")
    customer_id = IntegerField("customer_id")
