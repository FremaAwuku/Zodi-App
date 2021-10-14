from flask import Blueprint
from app.models import Friend, friends
from flask_login import login_required

friends_routes = Blueprint('friends_routes', __name__)

@friends_routes.route('')
@login_required
def get_all_friends():
    friends = Friend.query.all()
    print(friends,"<<<<<OOOPs")

    return {"friends":[friend.to_dict() for friend in friends]}
