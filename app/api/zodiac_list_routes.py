from flask import Blueprint, request
from app.models import db, ZodiacList
from flask_login import login_required


zodiac_list_routes = Blueprint('zodiac_list', __name__)


""""
DELETE ROW FROM ZODIAC LIST
"""

@zodiac_list_routes.route('/<int:row_id>', methods=['DELETE'])
@login_required
def delete_row(row_id):

    row_to_delete = ZodiacList.query.filter_by(id = row_id).first()

    db.session.delete(row_to_delete)

    db.session.commit()
    return {"row_id":row_id}
