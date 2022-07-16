from flask import Blueprint,jsonify
from flask_login import login_required
from app.models import Business, business

business_routes = Blueprint("business",__name__)

@business_routes.route('/')
def get_all_business():
    businesses = Business.query.all()
    return jsonify([business.to_dict() for business in businesses])

@business_routes.route("/<int:id>")
def get_single_business(id):
    business = Business.query.get(id)
    print(business,"===="*100)
    if business:
        return jsonify([business.to_dict()])
    return {"error": f'no business with id: {id}'}
