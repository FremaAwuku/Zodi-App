from .db import db

class Like(db.Model):
    __tablename__ = "likes"
    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey("horoscope_posts.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    
    user_details = db.relationship("User", back_populates="like_details", cascade="all, delete")
    post_details = db.relationship("HoroscopePost", back_populates="like_details", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'post_id': self.post_id,
            'user_id': self.user_id,
        }
