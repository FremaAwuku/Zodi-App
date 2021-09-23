from flask_wtf import FlaskForm
from wtforms.fields.core import StringField
from wtforms.fields.simple import FileField
from wtforms.fields import DateField, SelectField
from wtforms.validators import DataRequired

class NewListRowForm(FlaskForm):
    first_name = StringField("First Match's Name",validators=[DataRequired()])
    first_name_sign = StringField("First Match's Sign",validators=[DataRequired()])
