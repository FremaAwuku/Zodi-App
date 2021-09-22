from flask_wtf import FlaskForm
from wtforms.fields.core import IntegerField, SelectField
from wtforms.fields.simple import FileField
from wtforms.fields import DateField
from wtforms.validators import DataRequired

class GetSignForm(FlaskForm):
    birth_month = SelectField("Birth Month",
    validators=[DataRequired()],
    choices=[
        ('1','January'),
        ('2','February'),
        ('3','March'),
        ('4','April'),
        ('5','May'),
        ('6','June'),
        ('7','July'),
        ('8','August'),
        ('9','September'),
        ('10','October'),
        ('11','November'),
        ('12','December'),
    ]
    )
    birth_date = IntegerField("Birth Date",validators=[DataRequired()])
