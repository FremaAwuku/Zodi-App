from flask_wtf import FlaskForm
from wtforms.fields import DateField

class UpdateSunSignForm(FlaskForm):
    birth_date = DateField("Profile Picture")
