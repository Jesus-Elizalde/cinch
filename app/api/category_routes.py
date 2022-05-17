from flask import Blueprint,jsonify,request
from app.models import Category ,db
from app.forms import CategoryForm
from app.utils import validation_errors_to_error_messages


category_routes = Blueprint("category",__name__)

@category_routes.route("/")
def get_all_category():
    categories = Category.query.all()
    return jsonify([category.to_dict() for category in categories])

@category_routes.route("/", methods=["POST"])
def new_category():
    form = CategoryForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        category = Category(
            name=form.data["name"],
            image=form.data["image"],
            business_id=form.data["business_id"])
        db.session.add(category)
        db.session.commit()
        return category.to_dict()
    return {"errors":validation_errors_to_error_messages(form.errors)},401

@category_routes.route("/<int:id>",methods=["DELETE"])
def delete_customer(id):
    category = Category.query.get(id)

    if category:
        db.session.delete(category)
        db.session.commit()
        return str(id)

    return {"error": "category doesn't exists"}, 401
