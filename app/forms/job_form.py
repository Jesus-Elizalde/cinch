from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField,DateTimeField,FieldList
from wtforms.validators import DataRequired

class JobForm(FlaskForm):
    id = IntegerField("id")
    from_date_time = StringField("from_date_time",validators=[DataRequired()])
    to_date_time = StringField("to_date_time",validators=[DataRequired()])
    message = StringField("message")
    customer_id = IntegerField("customer_id",validators=[DataRequired()])
    job_ids = StringField('job_ids', [DataRequired()])
