from flask_wtf import FlaskForm
from wtforms.fields.simple import FileField
from wtforms.fields import DateField
from wtforms.validators import DataRequired

class ProfilePictureForm(FlaskForm):
    profile_picture = FileField("Profile Picture" ,[DataRequired()])

class UpdateUserSignForm(FlaskForm):
    birth_date = DateField("Profile Picture",validators=[DataRequired()])
