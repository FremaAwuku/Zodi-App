from app.forms.get_sign_form import GetSignForm
from flask import Blueprint, request
from flask_login import login_required
from app.models import db,User, ZodiacList
from app.forms import GetSignForm , CompatibilityForm, NewListRowForm, compatibility_form, new_list_row_form


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
@login_required
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
    cusp = False
    if  birth_month == "January":

        if birth_date > 19:
            user_sign = "Aquarius"
        elif birth_date == 19:
            user_sign="Capricorn"
            cusp = True
        else:
            user_sign="Capricorn"

    elif  birth_month == "February":
        if birth_date > 18:
            user_sign = "Pisces"
        elif birth_date == 18:
            user_sign="Aquarius"
            cusp = True
        else:
            user_sign="Aquarius"

    elif  birth_month == "March":
        if birth_date > 21:
            user_sign = "Aries"
        elif birth_date == 21:
            user_sign="Pisces"
            cusp = True
        else:
            user_sign="Pisces"

    elif  birth_month == "April":
        if birth_date > 20:
            user_sign = "Taurus"
        elif birth_date == 20:
            user_sign = "Taurus"
            cusp = True
        else:
            user_sign="Aries"

    elif  birth_month == "May":
        if birth_date > 21:
            user_sign = "Gemini"
        elif birth_date == 21:
            user_sign = "Gemini"
            cusp = True
        else:
            user_sign="Taurus"

    elif  birth_month == "June":
            if birth_date > 21:
                user_sign = "Cancer"
            elif birth_date == 21:
                user_sign = "Cancer"
                cusp = True
            else:
                user_sign="Gemini"

    elif  birth_month == "July":
        if birth_date > 23:
            user_sign = "Leo"
        elif birth_date == 23:
                user_sign = "Leo"
                cusp = True
        else:
            user_sign="Cancer"

    elif  birth_month == "August":
        if birth_date > 22:
            user_sign = "Virgo"
        elif birth_date == 22:
                user_sign = "Leo"
                cusp = True
        else:
            user_sign="Leo"

    elif  birth_month == "September":
        if birth_date > 23:
            user_sign = "Libra"
        elif birth_date == 23:
                user_sign = "Libra"
                cusp = True
        else:
            user_sign="Virgo"

    elif  birth_month == "October":
        if birth_date > 23:
            user_sign = "Scorpio"
        elif birth_date == 23:
                user_sign = "Libra"
                cusp = True
        else:
            user_sign="Libra"

    elif  birth_month == "November":
        if birth_date > 22:
            user_sign = "Sagittarius"
        elif birth_date == 22:
                user_sign = "Sagittarius"
                cusp = True
        else:
            user_sign="Scorpio"

    elif  birth_month == "December":
        if birth_date > 21:
            user_sign = "Capricorn"
        elif birth_date == 21:
                user_sign = "Sagittarius"
                cusp = True
        else:
            user_sign="Sagittarius"


    user = User.query.get(id)
    user.sun_sign = user_sign
    user.cusp = cusp
    db.session.add(user)
    db.session.commit()

    return user.to_dict()


"""
USER ZODIAC LISTS

"""

# GET USERS ZODIAC LIST ROWS
@user_routes.route('/<int:id>/zodiac_list')
@login_required
def get_user_list(id):
    zodiac_list_rows = ZodiacList.filter(ZodiacList.user_id == id).all()
    return zodiac_list_rows.to_dict()

# CREATE NEW ROW IN ZODIAC LIST
@user_routes.route('/<int:id>/zodiac_list', methods=['POST'])
@login_required
def new_row_list(id):
    form = NewListRowForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        first_name = request.form['first_name']
        first_name_id = int(request.form['first_name_id'])
        first_name_sign = request.form['first_name_sign']

        new_row = ZodiacList(
            user_id=id,
            first_name = first_name,
            first_name_id = first_name_id,
            first_name_sign = first_name_sign
        )
        db.session.add(new_row)
        db.session.commit()
        return new_row.to_dict()
    return {"flask-errors":flask_form_errors(form.errors)},401

#ADD COMPATIBILITY TO ROW
@user_routes.route('/<int:id>/zodiac_list/<int:list_id>', methods=['PUT'])
@login_required
def add_row_compatibility(id,list_id):
    form = CompatibilityForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    # if form.validate_on_submit():
    compatibility = 0

    first_name = request.form['first_name']
    first_name_id = int(request.form['first_name_id'])
    first_name_sign = request.form['first_name_sign']

    match_name = request.form['match_name']
    match_name_id = int(request.form['match_name_id'])
    match_name_sign = request.form['match_name_sign']

    # if first_name == Aries

    new_row = ZodiacList(
        user_id=id,
        first_name = first_name,
        first_name_id = first_name_id,
        first_name_sign = first_name_sign
    )
    db.session.add(new_row)
    db.session.commit()
    return new_row.to_dict()
# return {"flask-errors":flask_form_errors(form.errors)},401
