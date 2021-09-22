from sqlalchemy.orm import backref
from .db import db
import datetime
class HoroscopePost(db.Model):
    __tablename__ = 'horoscope_posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    horoscope = db.Column(db.String, nullable=False)
    content = db.Column(db.String(280), nullable=False)
    created = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    user_details= db.relationship("User", back_populates="post_details")

    likes= db.relationship("Like", backref="horoscope_post,", cascade="all, delete")

    comment_details = db.relationship("Comment", back_populates="post_details", cascade="all, delete")

    def to_dict(self):
        return{
            'id': self.id,
            'user_id': self.user_id,
            'horoscope': self.horoscope,
            'content': self.content,
            'user_details': self.user_details.to_dict()
        }
