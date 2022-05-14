from flask import Blueprint, jsonify
import app.config

key_routes = Blueprint("key",__name__)

@key_routes.route("/")
def get_key():
    key = app.config.Config.MAPS_KEY
    return jsonify(key)
