from flask import Blueprint
from app.models import SunSign, Compatibility

data_routes = Blueprint('data', __name__)

@data_routes.route("/sun_sign")
def sun_sign():
    signs = SunSign.query.all()
    return {'sun_signs': [sign.to_dict() for sign in signs]}

@data_routes.route("/compatibilities")
def compatibilities():
    comps = Compatibility.query.all()
    return {'compatibilities': [comp.to_dict() for comp in comps]}
