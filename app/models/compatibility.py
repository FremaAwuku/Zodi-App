from .db import db

class Compatibility(db.Model):
    __tablename__ = 'compatibilities'

    id=db.Column(db.Integer, primary_key=True)
    sign_1= db.Column(db.Integer, db.ForeignKey("sun_signs.id"))
    sign_2 =db.Column(db.Integer, db.ForeignKey("sun_signs.id"))
    rating = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String, nullable=False)

    match_1=db.relationship('SunSign', foreign_keys=[sign_1], backref="sign_of_match_1")

    match_2=db.relationship('SunSign', foreign_keys=[sign_2], backref='sign_of_match_2')

    def to_dict(self):
        return{
    'id': self.id,
    'sign_1': self.sign_1,
    'sign_2' :self.sign_2,
    'rating' : self.rating,
    'description' : self.description
     }
