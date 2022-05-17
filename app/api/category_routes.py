from flask import Blueprint,jsonify
from app.models import Category ,db

category_routes = Blueprint("category",__name__)

@category_routes.route("/")
def get_all_category():
    categories = Category.query.all()
    return jsonify([category.to_dict() for category in categories])
