from flask import Blueprint, request
from app.models import db, FriendRequest
from flask_login import login_required


friend_request_routes= Blueprint('friend_request', __name__)


#DELETE FRIEND REQUEST (DELETE WHEN FRIEND ACCEPTS/DECLINES REQUEST)
@friend_request_routes.route('/<int:request_id>', methods=['DELETE'])
@login_required
def delete_friend_request(request_id):
    print(type(request_id),"<<<<<<<<<REQUEST ID")

    request_to_delete = FriendRequest.query.get(request_id)
    print(request_to_delete,"<<<<<<<<<<REQUEST TO DELETE")
    db.session.delete(request_to_delete)
    db.session.commit()
    return {
        "request_id":request_id
    }
