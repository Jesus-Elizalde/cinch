from .db import db
from datetime import datetime

class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    image = db.Column(db.String(255))
    business_id = db.Column(db.Integer,db.ForeignKey("businesses.id"), nullable=False)

    business = db.relationship("Business",back_populates="category")

    service = db.relationship("Service",back_populates="category")

    def to_dict(self):
        return {
            'id': self.id,
            'name':self.name,
            'image':self.image,
            'business_id':self.business_id,
            'service_ids':[service_id.id for service_id in self.service]
        }
