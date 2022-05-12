from flask import Blueprint,jsonify
from flask_login import login_required
from app.models import Business

business_routes = Blueprint("business",__name__)

@business_routes.route('/')
def get_all_business():
    businesses = Business.query.all()
    return jsonify([business.to_dict() for business in businesses])
