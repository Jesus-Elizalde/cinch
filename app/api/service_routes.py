from flask import Blueprint,jsonify
from app.models import Service, db

service_routes = Blueprint("service",__name__)

@service_routes.route("/")
def get_all_service():
    services = Service.query.all()
    return jsonify([service.to_dict() for service in services])

@service_routes.route('/',methods=["POST"]):
def new_service():
