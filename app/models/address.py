from .db import db
from datetime import datetime

class Address(db.Model):
    __tablename__ = "addresses"

    id = db.Column(db.Integer, primary_key = True)
    street = db.Column(db.String(255),nullable=False)
    city = db.Column(db.String(255),nullable=False)
    state = db.Column(db.String(255),nullable=False)
    country = db.Column(db.String(255),nullable=False)
    postal_code = db.Column(db.String(255),nullable=False)
    lat = db.Column(db.String(255))
    long = db.Column(db.String(255))
    billing = db.Column(db.Boolean,nullable=False,default=True)
    note = db.Column(db.Text,nullable=False,default=" ")

    edited_by = db.Column(db.String(10))
    created_at = db.Column(db.DateTime,nullable=False,default=datetime.now)
    updated_at= db.Column(db.DateTime,nullable=False,default=datetime.now,onupdate=datetime.now)

    customer_id = db.Column(db.Integer,db.ForeignKey("customers.id"),nullable=False)

    customer = db.relationship("Customer",back_populates="addresses")

    def to_dict(self):
        return {
            "id":self.id,
            "street":self.street,
            "city":self.city,
            "state":self.state,
            "country":self.country,
            "postal_code":self.postal_code,
            "lat":self.lat,
            "long":self.long,
            "billing":self.billing,
            "note":self.note,
            "edited_by":self.edited_by,
            "created_at":self.created_at,
            "updated_at":self.updated_at
        }
