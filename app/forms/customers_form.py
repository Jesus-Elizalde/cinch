from flask_wtf import FlaskForm
from wtforms import StringField , IntegerField
from wtforms.validators import DataRequired

class CustomerForm(FlaskForm):
    first_name=StringField("first_name",validators=[DataRequired()])
    last_name=StringField("last_name",validators=[DataRequired()])
    display_name=StringField("display_name",validators=[DataRequired()])
    street=StringField("street",validators=[DataRequired()])

    city=StringField("city",validators=[DataRequired()])
    state=StringField("state",validators=[DataRequired()])
    country=StringField("country",validators=[DataRequired()])
    postal_code=StringField("postal_code",validators=[DataRequired()])
    lat=StringField("lat")
    long=StringField("long")
    mobile_number=StringField("mobile_number")
    home_number=StringField("home_number")
    email=StringField("email",validators=[DataRequired()])
    company=StringField("company")
    job_title=StringField("job_title")
    work_number=StringField("work_number")
    business_id=IntegerField("business_id",validators=[DataRequired()])
    id=IntegerField("id")
