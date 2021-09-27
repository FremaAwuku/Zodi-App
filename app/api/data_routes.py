from flask import Blueprint, request
from app.models import SunSign, Compatibility

data_routes = Blueprint('data', __name__)

@data_routes.route("/sun_signs")
def sun_sign():
    signs = SunSign.query.all()
    return {'sun_signs': [sign.to_dict() for sign in signs]}

@data_routes.route("/sun_signs", methods=['POST'])
def sun_sign_calc():


    birth_month = int(request.form['birth_month'])
    birth_date = int(request.form['birth_date'])
    user_sign = 0
    cusp = False
    if  birth_month == 1:

        if birth_date > 19:
            user_sign = 11

        else:
            user_sign=10

    elif  birth_month == 2:
        if birth_date > 18:
            user_sign = 12

        else:
            user_sign=11

    elif  birth_month == 3:
        if birth_date > 21:
            user_sign = 1
        else:
            user_sign=12

    elif  birth_month == 4:
        if birth_date > 20:
            user_sign = 2
        else:
            user_sign=1

    elif  birth_month == 5:
        if birth_date > 21:
            user_sign = 3
        else:
            user_sign=2

    elif  birth_month == 6:
            if birth_date > 21:
                user_sign = 4
            else:
                user_sign=3

    elif  birth_month == 7:
        if birth_date > 23:
            user_sign = 5
        else:
            user_sign=4

    elif  birth_month == 8:
        if birth_date > 22:
            user_sign = 6
        else:
            user_sign=5

    elif  birth_month ==9:
        if birth_date > 23:
            user_sign = 7
        else:
            user_sign=6

    elif  birth_month == 10:
        if birth_date > 23:
            user_sign = 8
        else:
            user_sign=7

    elif  birth_month == 11:
        if birth_date > 22:
            user_sign = 9
        else:
            user_sign=8

    elif  birth_month == 12:
        if birth_date > 21:
            user_sign = 10
        else:
            user_sign=9
        sign = SunSign.query.get(user_sign)

    return  sign.to_dict()
@data_routes.route("/compatibilities")
def compatibilities():
    comps = Compatibility.query.all()
    return {'compatibilities': [comp.to_dict() for comp in comps]}
