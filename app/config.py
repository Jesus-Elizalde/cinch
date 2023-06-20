import os


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # SQLAlchemy 1.4 no longer supports url strings that start with 'postgres'
    # (only 'postgresql') but heroku's postgres add-on automatically sets the
    # url in the hidden config vars to start with postgres.
    # so the connection uri must be updated here
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        'DATABASE_URL').replace('postgres://', 'postgresql://')
    SQLALCHEMY_ECHO = True
    GEOCODER_KEY=os.environ.get("GOOGLE_GEOCODER_API_KEY")
    MAPS_KEY=os.environ.get("GOOGLE_MAPS_API_KEY")
    WEATHER_KEY=os.environ.get("WEATHER_API_KEY")
