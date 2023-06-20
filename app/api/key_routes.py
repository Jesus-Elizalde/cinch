from flask import Blueprint, jsonify
import app.config

key_routes = Blueprint("key",__name__)

@key_routes.route("/")
def get_key():
    key = app.config.Config.MAPS_KEY
    weather_key = app.config.Config.WEATHER_KEY
    return jsonify({"google_map_key": key , "weather_key":weather_key})
