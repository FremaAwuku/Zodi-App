from flask_wtf import FlaskForm
from wtforms.fields.core import StringField
from wtforms.fields.simple import FileField
from wtforms.fields import DateField, SelectField
from wtforms.validators import DataRequired

class CompatibilityForm(FlaskForm):
    first_name = StringField("First Match's Name",validators=[DataRequired()])
    first_sign = StringField("First Match's Sign",validators=[DataRequired()])
    match_name = StringField("Second Match's Name",validators=[DataRequired()])
    match_sign = StringField("Second Match's Name",validators=[DataRequired()])
