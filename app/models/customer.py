from .db import db
from datetime import datetime

class Customer(db.Model):
    __tablename__ = "customers"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(55),nullable=False)
    last_name = db.Column(db.String(55),nullable=False)
    display_name = db.Column(db.String(55),nullable=False)
    street = db.Column(db.String(255),nullable=False)
    city = db.Column(db.String(255),nullable=False)
    state = db.Column(db.String(255),nullable=False)
    country = db.Column(db.String(255),nullable=False)
    postal_code = db.Column(db.String(255),nullable=False)
    lat = db.Column(db.String(255))
    long = db.Column(db.String(255))
    mobile_number = db.Column(db.String(255),nullable=False)
    home_number = db.Column(db.String(255))
    email = db.Column(db.String(255),nullable=False)
    company = db.Column(db.String(255))
    job_title = db.Column(db.String(255))
    work_number = db.Column(db.String(255))
    business_id = db.Column(db.Integer,db.ForeignKey("businesses.id"), nullable=False)
    created_at = db.Column(db.DateTime,nullable=False,default=datetime.now)
    updated_at= db.Column(db.DateTime,nullable=False,default=datetime.now,onupdate=datetime.now)

    business = db.relationship("Business",back_populates="customer")
    job = db.relationship("Job",back_populates="customer",cascade='all, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'first_name':self.first_name,
            'last_name':self.last_name,
            'display_name':self.display_name,
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
