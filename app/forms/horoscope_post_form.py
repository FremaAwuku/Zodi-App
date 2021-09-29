from flask_wtf import FlaskForm
from wtforms.fields import TextAreaField
from wtforms.fields.core import StringField
from wtforms.validators import DataRequired

class PostForm(FlaskForm):
    
    content=TextAreaField("Share a few words about your Horoscope!",[DataRequired()])

class EditPostForm(FlaskForm):
    content=TextAreaField("Make and Edit to your previous post")
