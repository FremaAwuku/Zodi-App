from app.models.compatibility import Compatibility
from .db import db

class SunSign(db.Model):
    __tablename__="sun_signs"

    id =db.Column(db.Integer, primary_key=True)
    sign =db.Column(db.String, nullable=False)
    dates= db.Column(db.String, nullable=False)
    qualities= db.Column(db.String, nullable=False)
    element= db.Column(db.String, nullable=False)
    ruling_planet= db.Column(db.String, nullable=False)
    symbol= db.Column(db.String, nullable=False)
    strengths= db.Column(db.String, nullable=False)
    weaknesses= db.Column(db.String, nullable=False)
    short_description= db.Column(db.String, nullable=False)
    long_description= db.Column(db.String, nullable=False)


    """
    COMPATABILITY RELATIONSHIP
    """

    sign_of_match_1 = db.relationship(
        'Compatability', back_populates="match_1", primaryjoin=id == Compatibility.sign_1
    )
    sign_of_match_2 = db.relationship(
        'Compatability', back_populates="match_2", primaryjoin=id == Compatibility.sign_2
    )


    def to_dict(self):
        return{
            'id': self.id,
            'sign': self.sign,
            'dates': self.dates,
            'qualities': self.qualities,
            'element': self.element,
            'ruling_planet': self.ruling_planet,
            'symbol': self.symbol,
            'strengths': self.strengths,
            'weaknesses': self.weaknesses,
            'short_description': self.short_description,
            'long_description': self.long_description
        }
