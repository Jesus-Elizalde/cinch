import googlemaps
from .config import Config

gmaps = googlemaps.Client(key=Config.GEOCODER_KEY)

geocode_result = gmaps.geocode('1600 Amphitheatre Parkway')

def geocode(address):
    return gmaps.geocode(address)[0]["geometry"]['location']
