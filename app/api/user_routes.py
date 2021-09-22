from app.forms.get_sign_form import GetSignForm
from flask import Blueprint, request
from flask_login import login_required
from app.models import db,User
from app.forms import GetSignForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/sun_sign',methods=['PUT'])
# @login_required
def user_sun_sign(id):
    form = GetSignForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    # birth_month = form.data['birth_month']
    # birth_date = form.data['birth_date']
    # print(isinstance(birth_month , str) ,"<<<<<<<BIRTH MONTH")
    # print(birth_month == "January" ,"<<<<<<<BIRTH MONTH")
    # print(birth_date ,"<<<<<<<BIRTH DATE")


    birth_month = request.form['birth_month']
    birth_date = int(request.form['birth_date'])


    user_sign = ''


    if  birth_month == "January":
        print("<<<<<<<<<<<<HERE?")
        if birth_date > 19:
            user_sign = "Aquarius"
        else:
            user_sign="Capricorn"

    elif  birth_month == "February":
        if birth_date > 18:
            user_sign = "Pisces"
        else:
            user_sign="Aquarius"

    elif  birth_month == "March":
        if birth_date > 21:
            user_sign = "Aries"
        else:
            user_sign="Pisces"

    elif  birth_month == "April":
        if birth_date > 20:
            user_sign = "Taurus"
        else:
            user_sign="Aries"

    elif  birth_month == "May":
        if birth_date > 21:
            user_sign = "Gemini"
        else:
            user_sign="Taurus"

    elif  birth_month == "June":
            if birth_date > 21:
                user_sign = "Cancer"
            else:
                user_sign="Gemini"

    elif  birth_month == "July":
        if birth_date > 23:
            user_sign = "Leo"
        else:
            user_sign="Cancer"

    elif  birth_month == "August":
        if birth_date > 23:
            user_sign = "Virgo"
        else:
            user_sign="Leo"

    elif  birth_month == "September":
        if birth_date > 23:
            user_sign = "Libra"
        else:
            user_sign="Virgo"

    elif  birth_month == "October":
        if birth_date > 24:
            user_sign = "Scorpio"
        else:
            user_sign="Libra"

    elif  birth_month == "November":
        if birth_date > 22:
            user_sign = "Sagittarius"
        else:
            user_sign="Scorpio"

    elif  birth_month == "December":
        if birth_date > 21:
            user_sign = "Capricorn"
        else:
            user_sign="Sagittarius"


    user = User.query.get(id)
    user.sun_sign = user_sign
    db.session.add(user)
    db.session.commit()

    return user.to_dict()
