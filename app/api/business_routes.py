from flask import Blueprint,jsonify
from flask_login import login_required,current_user
from app.models import Business,User

business_routes = Blueprint("business",__name__)

@business_routes.route('/')
def get_all_business():
    user_id = current_user.to_dict()['id']
    user = User.query.get(user_id)

    business = Business.query.get(user.business_id)
    return jsonify([business.to_dict()])
