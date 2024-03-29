from .db import db
from datetime import datetime

class Customer(db.Model):
    __tablename__ = "customers"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(55))
    last_name = db.Column(db.String(55))
    mobile_number = db.Column(db.String(255))
    home_number = db.Column(db.String(255))
    email = db.Column(db.String(255))
    note = db.Column(db.Text,default=" ")

    edited_by = db.Column(db.String(10))
    joined_date = db.Column(db.DateTime,nullable=False,default=datetime.now)
    created_at = db.Column(db.DateTime,nullable=False,default=datetime.now)
    updated_at= db.Column(db.DateTime,nullable=False,default=datetime.now,onupdate=datetime.now)

    business_id = db.Column(db.Integer,db.ForeignKey("businesses.id"), nullable=False)

    businesses = db.relationship("Business",back_populates = "customers")

    addresses = db.relationship("Address",back_populates="customer")

    jobs = db.relationship("Job",back_populates = "customers",cascade='all, delete-orphan')

    invoices = db.relationship("Invoice",back_populates = "customers")
    estimates = db.relationship("Estimate",back_populates = "customers")

    def to_dict(self):
        return {
            'id': self.id,
            'first_name':self.first_name,
            'last_name':self.last_name,
            'mobile_number':self.mobile_number,
            'home_number':self.home_number,
            'email':self.email,
            "note" : self.note,
            "editied_by":self.edited_by,
            "joined_date":self.joined_date,
            'created_at':self.created_at,
            'updated_at':self.updated_at,
            'business_id':self.business_id,
            'addresses':[add.to_dict() for add in self.addresses]
        }
