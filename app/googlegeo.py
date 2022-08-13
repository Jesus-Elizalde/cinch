import googlemaps
from .config import Config

gmaps = googlemaps.Client(key=Config.MAPS_KEY)

def geocode(address):

    results = gmaps.geocode(address)

    return {"coords":results[0]["geometry"]['location'],"zipcode":[ dict["long_name"] for dict in results[0]["address_components"] if dict["types"][0]== "postal_code"][0]}



# print([ dict["long_name"] for dict in geocode_result[0]["address_components"] if dict["types"][0]== "postal_code"][0])
# print(geocode("1600 Amphitheatre Parkway"))
