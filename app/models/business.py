from .db import db
from datetime import datetime

class Business(db.Model):
    __tablename__ = 'businesses'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    street = db.Column(db.String(255))
    city = db.Column(db.String(255))
    state = db.Column(db.String(255))
    postal_code = db.Column(db.String(255))
    website_url = db.Column(db.String(255))
    email = db.Column(db.String(255))
    license_num = db.Column(db.String(255))
    logo = db.Column(db.String(255))
    profile = db.Column(db.Text)
    message = db.Column(db.Text)
    user_id = db.Column(db.Integer,db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime,nullable=False,default=datetime.now())
    updated_at= db.Column(db.DateTime,nullable=False,default=datetime.now(),onupdate=datetime.now())

    user = db.relationship("User",back_populates="business")

    def to_dic(self):
        return {
            'id': self.id,
            'name':self.name,
            'street':self.street,
            'city':self.city,
            'state':self.state,
            'postal_code':self.postal_code,
            'website_url':self.website_url,
            'email':self.email,
            'license_num':self.license_num,
            'logo':self.logo,
            'profile':self.profile,
            'message':self.message,
            'user_id':self.user_id,
            'created_at':self.created_at,
            'updated_at':self.updated_at
        }
