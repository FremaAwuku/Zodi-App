from os import error
from app.forms.get_sign_form import GetSignForm
from app.forms import ProfilePictureForm
from app.api.aws import upload_to_aws
from flask import Blueprint, request
from flask_login import login_required
from app.models import db,User, ZodiacList, Compatibility, Friend, FriendRequest, HoroscopePost
from app.forms import GetSignForm , CompatibilityForm, NewListRowForm


user_routes = Blueprint('users', __name__)

BUCKET_NAME='zodiappbucket'

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages
#GET ALL USERS
@user_routes.route('')
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}

#GET ONE USER
# @user_routes.route('/<int:id>')
# @login_required
# def user(id):
#     user = User.query.get(id)
#     return user.to_dict()

@user_routes.route('/<int:userId>/photo',methods=['PUT'])
@login_required
def update_profile_pic(userId):
    print("<<<<<<<<<<<<<<<<<<<<HEREREREE")
    form = ProfilePictureForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    # if form.validate_on_submit():


    image= request.files[0]
    print(request.files[0], "<<<<<<req .files")
    url= upload_to_aws(image, BUCKET_NAME)
    user = User.query.get(userId)
    user.profile_picture = url

    db.session.commit()
    return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#UPDATE USER SUN SIGN
@user_routes.route('/<int:id>/sun_sign',methods=['PUT'])
@login_required
def user_sun_sign(id):
    form = GetSignForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # birth_month = form.data['birth_month']
    # birth_date = form.data['birth_date']
    # print(isinstance(birth_month , str) ,"<<<<<<<BIRTH MONTH")
    # print(birth_month == "January" ,"<<<<<<<BIRTH MONTH")
    # print(birth_date ,"<<<<<<<BIRTH DATE")
    # print(request.form ,"<<<<<<<BIRTH MONTH BACK")

    birth_month = int(request.form['birth_month'])
    birth_date = int(request.form['birth_date'])
    print(birth_month  ,"<<<<<<<BIRTH MONTH")
    print(birth_date ,"<<<<<<<BIRTH DATE BACK")


    user_sign = 0
    cusp = False
    if  birth_month == 1:
        print("<<<<<<INSIDE IFFFFFF")
        if birth_date > 19:
            user_sign = 11
        elif birth_date == 19:
            user_sign=10
            cusp = True
        else:
            user_sign=10

    elif  birth_month == 2:
        if birth_date > 18:
            user_sign = 12
        elif birth_date == 18:
            user_sign=11
            cusp = True
        else:
            user_sign=11

    elif  birth_month == 3:
        if birth_date > 21:
            user_sign = 1
        elif birth_date == 21:
            user_sign=12
            cusp = True
        else:
            user_sign=12

    elif  birth_month == 4:
        if birth_date > 20:
            user_sign = 2
        elif birth_date == 20:
            user_sign = 2
            cusp = True
        else:
            user_sign=1

    elif  birth_month == 5:
        if birth_date > 21:
            user_sign = 3
        elif birth_date == 21:
            user_sign = 3
            cusp = True
        else:
            user_sign=2

    elif  birth_month == 6:
            if birth_date > 21:
                user_sign = 4
            elif birth_date == 21:
                user_sign = 3
                cusp = True
            else:
                user_sign=3

    elif  birth_month == 7:
        if birth_date > 23:
            user_sign = 5
        elif birth_date == 23:
                user_sign = 5
                cusp = True
        else:
            user_sign=4

    elif  birth_month == 8:
        if birth_date > 22:
            user_sign = 6
        elif birth_date == 22:
                user_sign = 5
                cusp = True
        else:
            user_sign=5

    elif  birth_month ==9:
        if birth_date > 23:
            user_sign = 7
        elif birth_date == 23:
                user_sign = 7
                cusp = True
        else:
            user_sign=6

    elif  birth_month == 10:
        if birth_date > 23:
            user_sign = 8
        elif birth_date == 23:
                user_sign = 7
                cusp = True
        else:
            user_sign=7

    elif  birth_month == 11:
        if birth_date > 22:
            user_sign = 9
        elif birth_date == 22:
                user_sign = 9
                cusp = True
        else:
            user_sign=8

    elif  birth_month == 12:
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
@login_required
def get_user_list(id):
    zodiac_list_rows = ZodiacList.query.filter(ZodiacList.user_id == id).all()
    return {"zodiac_list_rows":[rows.to_dict() for rows in zodiac_list_rows]}

# CREATE NEW ROW IN ZODIAC LIST
@user_routes.route('/<int:id>/zodiac_list', methods=['POST'])
@login_required
def new_row_list(id):
    form = NewListRowForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    row = {}

    print(request.form,"<<<<<<<<<FORM REQUEST BACKEND")


    if len(request.form) > 2:
        first_name = request.form['first_name']
        print(request.form,"<<<<<<<<<FORM REQUEST BACKEND")
        first_name_id = "null"
        if request.form['first_name_id'] == 'null':

            first_name_id = None
        else:
            first_name_id = int(request.form['first_name_id'])

        first_name_sign = request.form['first_name_sign']

        new_row = ZodiacList(
            user_id=id,
            first_name = first_name,
            first_name_id = first_name_id,
            first_name_sign = first_name_sign
        )
        db.session.add(new_row)
        row = new_row
    else:
        first_name = request.form['first_name']
        first_name_sign = request.form['first_name_sign']
        new_row = ZodiacList(
            user_id=id,
            first_name = first_name,

            first_name_sign = first_name_sign
        )
        db.session.add(new_row)
        row = new_row

    db.session.commit()
    return row.to_dict()


#ADD COMPATIBILITY TO ROW
@user_routes.route('/<int:user_id>/zodiac_list/<int:list_id>', methods=['PUT'])
@login_required
def add_row_compatibility(user_id,list_id):
    form = CompatibilityForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(">>>>>>>>>>>WE IN HERE!!!!")
    print(request.form,"<<<<<<<REQUEST FORM")
    updated_row = {}
    # if form.validate_on_submit():
    if len(request.form) > 2:
        #GET EXISTING ROW
        zodiac_list_row = ZodiacList.query.get(list_id)


        #ASSIGN VARIABLE TO USE IN COMP FILTER
        first_name_sign = zodiac_list_row.first_name_sign
        print
        first_name_sign_id = 0
        if first_name_sign == "Aries":
            first_name_sign_id = 1
        elif first_name_sign == "Taurus":
            first_name_sign_id = 2
        elif first_name_sign == "Gemini":
            first_name_sign_id = 3
        elif first_name_sign == "Cancer":
            first_name_sign_id = 4
        elif first_name_sign== "Leo":
            first_name_sign_id = 5
        elif first_name_sign== "Virgo":
            first_name_sign_id = 6
        elif first_name_sign == "Libra":
            first_name_sign_id = 7
        elif first_name_sign == "Scorpio":
            first_name_sign_id = 8
        elif first_name_sign == "Sagittarius":
            first_name_sign_id = 9
        elif first_name_sign == "Capricorn":
            first_name_sign_id = 10
        elif first_name_sign == "Aquarius":
            first_name_sign_id = 11
        elif first_name_sign == "Pisces":
            first_name_sign_id = 12
        print(request.form,"<<<<<<<REQUEST FORM IN IF")
        print(request.form['match_name'],"<<<<<<<REQUEST FORM IN IF")
        #PULL DATA TO BE UPDATED FROM REQUEST
        match_name = request.form['match_name']
        match_name_id_str = request.form['match_name_id']
        match_name_id = None
        if match_name_id_str  == "null":
            match_name_id = None
        else:
            match_name_id = request.form['match_name_id']


        match_name_sign = request.form['match_name_sign']
        match_name_sign_id = 0
        if match_name_sign == "Aries":
            match_name_sign_id = 1
        elif match_name_sign == "Taurus":
            match_name_sign_id = 2
        elif match_name_sign == "Gemini":
            match_name_sign_id = 3
        elif match_name_sign == "Cancer":
            match_name_sign_id = 4
        elif match_name_sign== "Leo":
            match_name_sign_id = 5
        elif match_name_sign== "Virgo":
            match_name_sign_id = 6
        elif match_name_sign == "Libra":
            match_name_sign_id = 7
        elif match_name_sign == "Scorpio":
            match_name_sign_id = 8
        elif match_name_sign == "Sagittarius":
            match_name_sign_id = 9
        elif match_name_sign == "Capricorn":
            match_name_sign_id = 10
        elif match_name_sign == "Aquarius":
            match_name_sign_id = 11
        elif match_name_sign == "Pisces":
            match_name_sign_id = 12
        else:
            error("wrong input")


        # FIND COMP AND FILTER RATING
        zodiac_comp= Compatibility.query.filter(Compatibility.sign_1 == first_name_sign_id ).filter(Compatibility.sign_2 == match_name_sign_id).first()
        print(zodiac_comp,"<<<<<<<<ZODIAC COMP")

        # if(zodiac_comp):
        compatibility = zodiac_comp.rating

        # UPDATE EXISTING ROW
        zodiac_list_row.match_name = match_name
        zodiac_list_row.match_name_id = match_name_id
        zodiac_list_row.match_name_sign = match_name_sign
        zodiac_list_row.compatibility = compatibility

        # ADD UPDATED ROW TO SESSION
        db.session.add(zodiac_list_row)
        db.session.commit()
        updated_row = zodiac_list_row
    else:
        #GET EXISTING ROW
        zodiac_list_row = ZodiacList.query.get(list_id)

        #ASSIGN VARIABLE TO USE IN COMP FILTER
        first_name_sign = zodiac_list_row.first_name_sign


        #PULL DATA TO BE UPDATED FROM REQUEST
        match_name = request.form['match_name']
        match_name_sign = request.form['match_name_sign']

        # FIND COMP AND FILTER (where first sign and match sign match)THEN GET RATING
        zodiac_comp= Compatibility.query.filter(Compatibility.sign_1 == first_name_sign ).filter(Compatibility.sign_2 == match_name_sign).first()
        compatibility = zodiac_comp.rating

        # UPDATE EXISTING ROW
        zodiac_list_row.match_name = match_name
        zodiac_list_row.match_name_sign = match_name_sign
        zodiac_list_row.compatibility = compatibility
        # ADD UPDATED ROW TO SESSION
        db.session.add(zodiac_list_row)
        db.session.commit()
        updated_row=zodiac_list_row
    # db.session.commit()
    return updated_row.to_dict()
# return {"flask-errors":flask_form_errors(form.errors)},401

"""
USER FRIENDS==============================================================
"""

# GET USERS FRIENDS
@user_routes.route('/<int:user_id>/friends')
# @login_required
def get_user_friends(user_id):
    user_friends = Friend.query.filter(Friend.user_id == user_id).all()
    return {"user_friends":[friend.to_dict() for friend in user_friends]}


#ADD FRIENDSHIP BOTHWAYS
@user_routes.route('/<int:user_id>/add_friend/<int:friend_id>', methods=['POST'])
@login_required
def add_friend_both_ways(user_id, friend_id):
    users_current_friends = Friend.query.filter(Friend.user_id == user_id).all()


    user_ids = [user.friend_id for user in users_current_friends]
    if friend_id in user_ids :
        return {'friendship': "You are already friends with this user!"}, 401
    else:
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
            'friend_to_user': friend_add.to_dict()
        }

# DELETE FRIENDSHIP BOTHWAYS
@user_routes.route('/<int:user_id>/delete_friend/<int:friend_id>', methods=['DELETE'])
@login_required
def delete_friend_both_ways(user_id, friend_id):
    user_to_delete = Friend.query.filter(Friend.user_id == user_id).filter(Friend.friend_id == friend_id).first()

    friend_to_delete = Friend.query.filter(Friend.user_id == friend_id).filter(Friend.friend_id == user_id).first()


    db.session.delete(user_to_delete)
    db.session.delete(friend_to_delete)
    db.session.commit()

    return{
        "user_id":user_id,
        "friend_id":friend_id
    }

"""
REQUEST/PENDING==========================================================
"""

#GET USERS INCOMING FRIEND REQUEST (FOR USER TO ACCEPT AS FRIEND)
@user_routes.route('/<int:user_id>/incoming_requests')
@login_required
def get_incoming_request(user_id):
    incoming_request = FriendRequest.query.filter(FriendRequest.accepting_friend_id == user_id).all()
    return {"incoming": [r.to_dict() for r in incoming_request]}

#GET USERS PENDING FRIENDS REQUEST (WAITING FOR FRIEND APPROVAL)
@user_routes.route('/<int:user_id>/pending_requests')
@login_required
def get_pending_request(user_id):
    pending_request = FriendRequest.query.filter(FriendRequest.requesting_user_id == user_id).all()
    return {"pending": [r.to_dict() for r in pending_request]}


# SEND FRIEND REQUEST (FROM USER TO POTENTIAL FRIEND)
@user_routes.route('/<int:user_id>/send_request/<int:friend_id>', methods=['POST'])
@login_required
def send_friend_request(user_id,friend_id):
    request = {}
    users_current_friends = Friend.query.filter(Friend.user_id == user_id).all()
    user_ids = [user.id for user in users_current_friends]
    if friend_id in user_ids:
        return {'friendship': "You are already friends with this user!"}, 401
    else:

        users_current_requests = FriendRequest.query.filter(FriendRequest.requesting_user_id == user_id).all()
        request_user_ids = [user.accepting_friend_id for user in users_current_requests]
        if friend_id not in request_user_ids:
            r = FriendRequest(requesting_user_id=user_id,accepting_friend_id=friend_id)

            db.session.add(r)
            request = r
            db.session.commit()
            return request.to_dict()
        else:
            return {'request': "You've already requested to be this user's friend"}, 401

# @user_routes.route('/<int:user_id>/delete_request/<int:request_id>', methods=['DELETE'])
# @login_required
# def delete_request(user_id,request_id):
#     request = FriendRequest.query.get(request_id)

#     db.session.delete(request)
#     db.session.commit()
#     return {"request_id":request_id}

"""
USER HOROSCOPE POSTS ===========================
"""

#GET ALL USERS HOROSCOPE POSTS
@user_routes.route('/<int:user_id>/horoscope_posts')
@login_required
def get_users_posts(user_id):
    users_posts = HoroscopePost.query.filter(HoroscopePost.user_id == user_id).all()

    return {"users_posts":[posts.to_dict() for posts in users_posts]}



# #EDIT USERS HOROSCOPE POSTS
# @user_routes.route('/<int:user_id>/horoscope_posts/<int:post_id>')
# @login_required
# def edit_users_posts(user_id, post_id):
#     users_post = HoroscopePost.query.get(post_id)
#     return users_posts.to_dict()
