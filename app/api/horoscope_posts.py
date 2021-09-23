from operator import pos
from flask import Blueprint, request
from app.models import db, HoroscopePost, Comment, Like
from flask_login import login_required
from app.forms import PostForm
import datetime

horoscope_posts_routes = Blueprint('horoscope_posts',__name__)

"""
GET ALL POSTS ON HOROSCOPE FEED
"""

@horoscope_posts_routes.route('')
def get_all_horoscope_posts(post_id):

    posts = HoroscopePost.query.all()


    return {
        "horoscope_posts":[post.to_dict() for post in posts]
    }
"""
GET ONE POST
"""

@horoscope_posts_routes.route('/<int: post_id>')
def get_one_post(post_id):

    post = HoroscopePost.query.get(post_id)
    return post.to_dict()


"""
POST HOROSCOPE POST
"""

@horoscope_posts_routes.route('',methods=['POST'])
@login_required
def post_to_horoscope_feed():
    form = PostForm()

    form['csrf_token'].data = request.cookies['csrf_token']


    if form.validate_on_submit():
        user_id = request.form['user_id']
        horoscope = request.form['horoscope']
        content = request.form['content']

        new_post = HoroscopePost(
            user_id=user_id,
            horoscope=horoscope,
            content=content,
            created = datetime.datetime.utcnow()
        )
        db.session.add(new_post)
        db.session.commit()
        return new_post.to_dict()

"""
EDIT HOROSCOPE POST
"""

@horoscope_posts_routes.route('/<int: post_id>',methods=['PUT'])
@login_required
def edit_horoscope_post(post_id):

    post = HoroscopePost.query.get(post_id)
    post.content = request.form['content']
    db.session.commit()
    return post.to_dict()

"""
DELETE HOROSCOPE POST
"""
@horoscope_posts_routes.route('/<int: post_id>',methods=['DELETE'])
@login_required
def delete_horoscope_post(post_id):
    post = HoroscopePost.query.get(post_id)
    db.session.delete(post)
    db.session.commit()
    return {"horoscope_post_id":post_id}


"""
COMMENTS
"""

#GET ALL POST'S COMMENTS
@horoscope_posts_routes.route('/<int:post_id>/comments')
@login_required
def horoscope_post_comments(post_id):
    comments = Comment.query.filter(Comment.post_id == post_id).all()
    return {'comments' : [comment.to_dict() for comment in comments]}

#ADD COMMENT TO POST
@horoscope_posts_routes.route('/<int:post_id>/comments', methods=["POST"])
@login_required
def add_post_comments(post_id):
    comment = Comment(
        post_id=post_id,
        user_id=request.form['post_id'],
        content=request.form['content']
    )
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()

"""
LIKES
"""
# GET ALL POSTS LIKES

@horoscope_posts_routes.route('/<int:post_id>/likes')
@login_required
def horoscope_post_likes(post_id):
    likes = Like.query.filter(Like.post_id == post_id).all()
    return {'likes' : [like.to_dict() for like in likes]}

#ADD LIKE TO POST
@horoscope_posts_routes.route('/<int:post_id>/likes', methods=['POST'])
@login_required
def add_post_likes(post_id):
    user_id = request.form['user_id']
    user_like = Like(
        user_id=user_id,
        post_id=post_id
    )
    db.session.add(user_like)
    db.session.commit()
    return user_like.to_dict()

#DELETE LIKE POST

@horoscope_posts_routes.route('/<int:post_id>/likes', methods=['DELETE'])
@login_required
def add_post_likes(post_id):
    user_id = request.form['user_id']
    unlike = Like.filter(Like.user_id == user_id and Like.post_id == post_id)
    db.session.delete(unlike)
    db.session.commit()
    return {
        "post_id":post_id,
        "user_id":user_id
    }
