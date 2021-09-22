from sqlalchemy.orm import backref
from .db import db
from app.models.zodiac_list import ZodiacList
from app.models.friends import Friend
from app.models.friends_request import FriendRequest
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_picture = db.Column(db.String)
    sun_sign_id =  db.Column(db.Integer, db.ForeignKey("sun_sign.id"))
    cusp = db.Column(db.Boolean, default=False)

    """
    SUN SIGN RELATIONSHIPS
    """
    sign_of_user = db.relationship("SunSign",backref="sign")

    """
    FRIENDS RELATIONSHIPS
    """
    current_user = db.relationship(
        'Friend', back_populates="user_in_choice", primaryjoin=id == Friend.user_id
    )
    friend_of_user = db.relationship(
        'Friend', back_populates="friend_to_user", primaryjoin=id == Friend.friend_id
    )

    """
    FRIEND REQUEST RELATIONSHIPS
    """
    request_from = db.relationship(
        'FriendRequest', back_populates="request", primaryjoin=id == FriendRequest.requesting_user_id
    )

    accept_by = db.relationship(
        'FriendRequest', back_populates="pending", primaryjoin=id == FriendRequest.accepting_friend_id
    )

    """
    HOROSCOPE POST RELATIONSHIPS
    """
    post_details = db.relationship(
        "HoroscopePost", back_populates="user_details",
        cascade="all, delete")

    """
    LIKE RELATIONSHIP
    """

    like_details = db.relationship(
        "Like",
        back_populates="user_details",
        cascade="all,delete")

    """
    COMMENT RELATIONSHIP
    """

    comment_details = db.relationship(
        "Comment",
        back_populates="user_details",
        cascade="all, delete")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profile_picture': self.profile_picture,
            'sun_sign': self.sun_sign,
            'cusp':self.cusp
        }
