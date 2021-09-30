from flask import Blueprint
from app.models import Like


likes_routes = Blueprint('likes',__name__)

@likes_routes.route('')
def horoscope_post_likes():
    likes = Like.query.all()
    return {'likes' : [like.to_dict() for like in likes]}
