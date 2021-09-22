from .db import db

class Compatibility(db.Model):
    __tablename__ = 'compatibilities'

    id=db.Column(db.Integer, primary_key=True)
    sign_1= db.Column(db.String, nullable=False)
    sign_2 =db.Column(db.String, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String, nullable=False)

    def to_dict(self):
        return{
    'id': self.id,
    'sign_1': self.sign_1,
    'sign_2' :self.sign_2,
    'rating' : self.rating,
    'description' : self.description
     }
