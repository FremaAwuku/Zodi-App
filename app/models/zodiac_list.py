from .db import db


class ZodiacList(db.Model):
    __tablename__ = 'zodiac_lists'


    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False , primary_key=True)
    first_name = db.Column(db.String(40), nullable=False)
    first_name_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False , primary_key=True)
    first_name_sign = db.Column(db.String(12), nullable=False)
    match_name = db.Column(db.String(40), nullable=False)
    match_name_id = db.Column(db.Integer, db.ForeignKey("users.id"), primary_key=True)
    match_name_sign = db.Column(db.String(12), nullable=False)
    compatibility = db.Column(db.Integer)

    # zodi_list_owner= db.relationship('User',  back_populates="user_zodiac_list")

    owner_of_list = db.relationship('User', foreign_keys=[user_id],backref="first_input")
    first_input= db.relationship("User", foreign_keys=[first_name_id], backref="first_match_input")
    match_input = db.relationship("User", foreign_keys=[match_name_id] ,backref="second_match_input")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id':  self.user_id,
            'first_name': self.first_name,
            'first_name_id': self.first_name_id,
            'first_name_sign': self.first_name_sign,
            'match_name' : self.match_name,
            'match_name_id':self.match_name_id,
            'match_name_sign':self.match_name_sign,
            'compatibility': self.compatibility
        }
