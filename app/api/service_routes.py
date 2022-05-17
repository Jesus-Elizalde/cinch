from flask import Blueprint,jsonify,request
from app.models import Service, db
from app.forms import ServiceForm
from app.utils import validation_errors_to_error_messages

service_routes = Blueprint("service",__name__)

@service_routes.route("/")
def get_all_service():
    services = Service.query.all()
    return jsonify([service.to_dict() for service in services])

@service_routes.route('/',methods=["POST"])
def new_service():

    form = ServiceForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        service = Service(
            name = form.data["name"],
            description = form.data["description"],
            image = form.data["image"],
            unit = form.data["unit"],
            cost = form.data["cost"],
            price = form.data["price"],
            category_id = form.data["category_id"])
        db.session.add(service)
        db.session.commit()
        return service.to_dict()
    return {"errors":validation_errors_to_error_messages(form.errors)},401

@service_routes.route('/<int:id>',methods=["PUT"])
def edit_service(id):

    form = ServiceForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        service = Service.query.get(id)

        service.name = form.data["name"]
        service.description = form.data["description"]
        service.image = form.data["image"]
        service.unit = form.data["unit"]
        service.cost = form.data["cost"]
        service.price = form.data["price"]

        db.session.commit()
        return service.to_dict()
    return {"errors":validation_errors_to_error_messages(form.errors)},401


@service_routes.route("/<int:id>",methods=["DELETE"])
def delete_service(id):
    service = Service.query.get(id)

    if service:
        db.session.delete(service)
        db.session.commit()
        return str(id)

    return {"error": "category doesn't exists"}, 401
