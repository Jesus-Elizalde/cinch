from .db import db
from datetime import datetime

class Business(db.Model):
    __tablename__ = 'businesses'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    mobile = db.Column(db.Boolean,nullable=False,default=False)
    street = db.Column(db.String(255))
    city = db.Column(db.String(255))
    state = db.Column(db.String(255))
    country = db.Column(db.String(255))
    postal_code = db.Column(db.String(255))
    lat = db.Column(db.String(255))
    long = db.Column(db.String(255))
    website_url = db.Column(db.String(255))
    email = db.Column(db.String(255))
    license_number = db.Column(db.String(255))
    logo = db.Column(db.String(255),nullable=False,default=" ")
    profile = db.Column(db.Text)
    message = db.Column(db.Text)
    phone_number = db.Column(db.String(255))

    edited_by = db.Column(db.String(10))
    date_created = db.Column(db.Date)
    created_at = db.Column(db.DateTime,nullable=False,default=datetime.now)
    updated_at= db.Column(db.DateTime,nullable=False,default=datetime.now,onupdate=datetime.now())

    users = db.relationship("User",back_populates="businesses")
    customers = db.relationship("Customer",back_populates="businesses")

    def to_dict(self):
        return {
            'id': self.id,
            'name':self.name,
            'street':self.street,
            'city':self.city,
            'state':self.state,
            'country':self.country,
            'postal_code':self.postal_code,
            'coords': [self.lat,self.long],
            'website_url':self.website_url,
            'email':self.email,
            'license_num':self.license_number,
            'logo':self.logo,
            'profile':self.profile,
            'message':self.message,
            'number':self.number,
            'created_at':self.created_at,
            'updated_at':self.updated_at,
        }
