from app.forms.get_sign_form import GetSignForm
from flask import Blueprint, request
from flask_login import login_required
from app.models import db,User, ZodiacList, Compatibility, Friend, FriendRequest, HoroscopePost
from app.forms import GetSignForm , CompatibilityForm, NewListRowForm


user_routes = Blueprint('users', __name__)

def flask_form_errors(validation_errors):
    errors = []
    for inputs in validation_errors:
        for error in validation_errors[inputs]:
            errors.append(f'{inputs} : {error}')
    return errors

@user_routes.route('')
# @login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
# @login_required
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


    user_sign = 0
    cusp = False
    if  birth_month == "January":

        if birth_date > 19:
            user_sign = 11
        elif birth_date == 19:
            user_sign=10
            cusp = True
        else:
            user_sign=10

    elif  birth_month == "February":
        if birth_date > 18:
            user_sign = 12
        elif birth_date == 18:
            user_sign=11
            cusp = True
        else:
            user_sign=11

    elif  birth_month == "March":
        if birth_date > 21:
            user_sign = 1
        elif birth_date == 21:
            user_sign=12
            cusp = True
        else:
            user_sign=12

    elif  birth_month == "April":
        if birth_date > 20:
            user_sign = 2
        elif birth_date == 20:
            user_sign = 2
            cusp = True
        else:
            user_sign=1

    elif  birth_month == "May":
        if birth_date > 21:
            user_sign = 3
        elif birth_date == 21:
            user_sign = 3
            cusp = True
        else:
            user_sign=2

    elif  birth_month == "June":
            if birth_date > 21:
                user_sign = 4
            elif birth_date == 21:
                user_sign = 4
                cusp = True
            else:
                user_sign=3

    elif  birth_month == "July":
        if birth_date > 23:
            user_sign = 5
        elif birth_date == 23:
                user_sign = 5
                cusp = True
        else:
            user_sign=4

    elif  birth_month == "August":
        if birth_date > 22:
            user_sign = 6
        elif birth_date == 22:
                user_sign = 5
                cusp = True
        else:
            user_sign=5

    elif  birth_month == "September":
        if birth_date > 23:
            user_sign = 7
        elif birth_date == 23:
                user_sign = 7
                cusp = True
        else:
            user_sign=6

    elif  birth_month == "October":
        if birth_date > 23:
            user_sign = 8
        elif birth_date == 23:
                user_sign = 7
                cusp = True
        else:
            user_sign=7

    elif  birth_month == "November":
        if birth_date > 22:
            user_sign = 9
        elif birth_date == 22:
                user_sign = 9
                cusp = True
        else:
            user_sign=8

    elif  birth_month == "December":
        if birth_date > 21:
            user_sign = 10
        elif birth_date == 21:
                user_sign = 9
                cusp = True
        else:
            user_sign=9


    user = User.query.get(id)
    user.sun_sign_id= user_sign
    user.cusp = cusp
    db.session.add(user)
    db.session.commit()

    return user.to_dict()


"""
USER ZODIAC LISTS ================================================

"""

# GET USERS ZODIAC LIST ROWS
@user_routes.route('/<int:id>/zodiac_list')
# @login_required
def get_user_list(id):
    zodiac_list_rows = ZodiacList.query.filter(ZodiacList.user_id == id).all()
    return {"zodiac_list_rows":[rows.to_dict() for rows in zodiac_list_rows]}

# CREATE NEW ROW IN ZODIAC LIST
@user_routes.route('/<int:id>/zodiac_list', methods=['POST'])
# @login_required
def new_row_list(id):
    form = NewListRowForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    row = {}
    if form.validate_on_submit():

        print(request.form,"<<<<<<<<<REQUEST FORM")

        # if request.form['first_name_id']:
        #     first_name = request.form['first_name']
        #     first_name_id = int(request.form['first_name_id'])
        #     first_name_sign = int(request.form['first_name_sign'])

        #     new_row = ZodiacList(
        #         user_id=id,
        #         first_name = first_name,
        #         first_name_id = first_name_id,
        #         first_name_sign = first_name_sign
        #     )
        #     db.session.add(new_row)
        #     row = new_row
        # else:
        first_name = request.form['first_name']
        first_name_sign = int(request.form['first_name_sign'])
        new_row = ZodiacList(
            user_id=id,
            first_name = first_name,

            first_name_sign = first_name_sign
        )
        db.session.add(new_row)

        db.session.commit()
        return new_row.to_dict()
    return {"flask-errors":flask_form_errors(form.errors)},401

#ADD COMPATIBILITY TO ROW
@user_routes.route('/<int:use_id>/zodiac_list/<int:list_id>', methods=['PUT'])
# @login_required
def add_row_compatibility(user_id,list_id):
    form = CompatibilityForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    # if form.validate_on_submit():
    # first_name = request.form['first_name']
    # first_name_id = int(request.form['first_name_id'])
    # first_name_sign = int(request.form['first_name_sign'])

    #GET EXISTING ROW
    zodiac_list_row = ZodiacList.query.get(list_id)


    #ASSIGN VARIABLE TO USE IN COMP FILTER
    first_name_sign = zodiac_list_row.first_name_id_sign

    #PULL DATA TO BE UPDATED FROM REQUEST
    match_name = request.form['match_name']
    match_name_id = int(request.form['match_name_id'])
    match_name_sign = int(request.form['match_name_sign'])

    # FIND COMP AND FILTER RATING
    zodiac_comp= Compatibility.filter(Compatibility.sign_1 == first_name_sign and Compatibility.sign_2 == match_name_sign).one()
    compatibility = zodiac_comp.rating

    # UPDATE EXISTING ROW
    zodiac_list_row.match_name = match_name
    zodiac_list_row.match_name_id = match_name_id
    zodiac_list_row.match_name_sign = match_name_sign
    zodiac_list_row.compatibility = compatibility

    # ADD UPDATED ROW TO SESSION
    db.session.add(zodiac_list_row)
    db.session.commit()
    return zodiac_list_row.to_dict()
# return {"flask-errors":flask_form_errors(form.errors)},401

"""
USER FRIENDS==============================================================
"""

# GET USERS FRIENDS
@user_routes.route('/<int:user_id>/friends')
# @login_required
def get_user_friends(user_id):
    user_friends = Friend.query.filter(Friend.user_id == user_id).all()
    return user.to_dict()

#ADD FRIENDSHIP BOTHWAYS
@user_routes.route('/<int:user_id>/friends/<int:friend_id>')
# @login_required
def add_friend_both_ways(user_id, friend_id):
    user_add = Friend(
       user_id=user_id,
       friend_id=friend_id
    )
    friend_add =Friend(
        user_id=friend_id,
       friend_id=user_id
    )
    db.session.add(user_add)
    db.session.add(friend_add)
    db.session.commit()

    return{
        'user_friendship':user_add.to_dict(),
        'friend_to_user': friend_id.to_dict()
    }

# DELETE FRIENDSHIP BOTHWAYS
@user_routes.route('/<int:user_id>/friends/<int:friend_id>')
# @login_required
def delete_friend_both_ways(user_id, friend_id):
    user_to_delete = Friend.query.filter(Friend.user_id == user_id and Friend.friend_id == friend_id).one()
    friend_to_delete = Friend.query.filter(Friend.user_id == friend_id and Friend.friend_id == user_id).one()
    db.session.add(user_to_delete)
    db.session.add(friend_to_delete)
    db.session.commit()

    return{
        "user_id":user_id,
        "friend_id":friend_id
    }

"""
REQUEST/PENDING==========================================================
"""

#GET USERS INCOMING FRIEND REQUEST (FOR USER TO ACCEPT AS FRIEND)
@user_routes.route('/<int:user_id>/incoming')
# @login_required
def get_incoming_request(user_id):
    incoming_request = FriendRequest.query.filter(FriendRequest.accepting_friend_id == user_id).all()
    return incoming_request.to_dict()

#GET USERS PENDING FRIENDS REQUEST (WAITING FOR FRIEND APPROVAL)
@user_routes.route('/<int:user_id>/pending')
# @login_required
def get_pending_request(user_id):
    pending_request = FriendRequest.query.filter(FriendRequest.requesting_user_id == user_id).all()
    return pending_request.to_dict()


# SEND FRIEND REQUEST (FROM USER TO POTENTIAL FRIEND)
@user_routes.route('/<int:user_id>/request/<int:friend_id>', methods=['POST'])
# @login_required
def send_friend_request(user_id,friend_id):
    request = FriendRequest(
        requesting_user_id=user_id,
        accepting_friend_id=friend_id
    )
    return request.to_dict()



"""
USER HOROSCOPE POSTS ===========================
"""

#GET ALL USERS HOROSCOPE POSTS
@user_routes.route('/<int:user_id>/horoscope_posts')
# @login_required
def get_users_posts(user_id):
    users_posts = HoroscopePost.query.filter(HoroscopePost.user_id == user_id).all()
    return users_posts.to_dict()



# #EDIT USERS HOROSCOPE POSTS
# @user_routes.route('/<int:user_id>/horoscope_posts/<int:post_id>')
# @login_required
# def edit_users_posts(user_id, post_id):
#     users_post = HoroscopePost.query.get(post_id)
#     return users_posts.to_dict()
