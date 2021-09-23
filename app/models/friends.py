from .db import db


class Friend(db.Model):
    __tablename__ = 'friends'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    friend_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    """
    USER RELATIONSHIPS
    """
    user_in_choice=db.relationship('User', foreign_keys=[user_id], back_populates="current_user",cascade="all, delete")

    friend_to_user=db.relationship('User', foreign_keys=[friend_id], back_populates='friend_of_user',cascade="all, delete")

    def to_dict(self):
        return{
            'id':self.id,
            'requesting_user_id':self.requesting_user_id,
            'accepting_friend_id': self.accepting_friend_id
        }
