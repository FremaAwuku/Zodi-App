from flask import Blueprint, request
from app.models import db,  Comment
from flask_login import login_required
import datetime

comment_routes = Blueprint('comment',__name__)
"""
GET COMMENTS
"""

@comment_routes.route("")
def get_comments():
    comments = Comment.query.all()

    return {"comments":[comment.to_dict() for comment in comments]}

"""
EDIT COMMENT
"""
@comment_routes.route('/<int:comment_id>',methods=['PUT'])
# @login_required
def edit_comment(comment_id):

    comment = Comment.query.get(comment_id)
    comment.content = request.form['content']
    db.session.commit()
    return comment.to_dict()

"""
DELETE COMMENT
"""
@comment_routes.route('/<int:comment_id>',methods=['DELETE'])
# @login_required
def delete_comment(comment_id):
    comment = Comment.query.get(comment_id)
    db.session.delete(comment)
    db.session.commit()
    return {"comment_id":comment_id}
