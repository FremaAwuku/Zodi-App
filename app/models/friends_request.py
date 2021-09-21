from .db import db

class FriendRequest(db.Model):
    __tablename__ = 'friend_requests'

    id = db.Column(db.Integer, primary_key=True)
    requesting_user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    accepting_friend_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    def to_dict(self):
        return{
            'id':self.id,
            'requesting_user_id':self.requesting_user_id,
            'accepting_friend_id': self.accepting_friend_id
        }
