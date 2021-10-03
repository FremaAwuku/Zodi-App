from .db import db


class Friend(db.Model):
    __tablename__ = 'friends'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    friend_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    """
    USER RELATIONSHIPS
    """
    user_in_choice=db.relationship('User', foreign_keys=[user_id], back_populates="current_user")

    friend_to_user=db.relationship('User', foreign_keys=[friend_id], back_populates='friend_of_user', )

    # if not friend_to_user:
    #     friend_to_user = None
    # else:
    #     friend_to_user=db.relationship('User', foreign_keys=[friend_id], back_populates='friend_of_user')
    def to_dict(self):
        return{
            'id':self.id,
            'user_id':self.user_id,
            'friend_id': self.friend_id,
            "friend_to_user": self.friend_to_user.to_dict()
        }
