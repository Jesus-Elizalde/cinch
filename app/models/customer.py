from .db import db
from datetime import datetime

class Customer(db.Model):
    __tablename__ = "customers"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(55),nullable=False)
    last_name = db.Column(db.String(55),nullable=False)
    mobile_number = db.Column(db.String(255),nullable=False)
    home_number = db.Column(db.String(255))
    email = db.Column(db.String(255),nullable=False)
    note = db.Column(db.Text,nullable=False,default=" ")

    edited_by = db.Column(db.String(10))
    joined_date = db.Column(db.DateTime,nullable=False,default=datetime.now)
    created_at = db.Column(db.DateTime,nullable=False,default=datetime.now)
    updated_at= db.Column(db.DateTime,nullable=False,default=datetime.now,onupdate=datetime.now)

    business_id = db.Column(db.Integer,db.ForeignKey("businesses.id"), nullable=False)

    businesses = db.relationship("Business",back_populates = "customers")

    # addresses = db.relationship("Address",back_poplates="customers")

    jobs = db.relationship("Job",back_populates = "customers",cascade='all, delete-orphan')

    invoices = db.relationship("Invoice",back_populates = "customers")
    estimates = db.relationship("Estimate",back_populates = "customers")

    def to_dict(self):
        return {
            'id': self.id,
            'first_name':self.first_name,
            'last_name':self.last_name,
            'street':self.street,
            'city':self.city,
            'state':self.state,
            'country':self.country,
            'postal_code':self.postal_code,
            'coords': [self.lat,self.long],
            'mobile_number':self.mobile_number,
            'home_number':self.home_number,
            'email':self.email,
            'company':self.company,
            'job_title':self.job_title,
            'work_number':self.work_number,
            'business_id':self.business_id,
            'created_at':self.created_at,
            'updated_at':self.updated_at,
            'jobs':[singlejob.to_dict() for singlejob in self.job]
        }
