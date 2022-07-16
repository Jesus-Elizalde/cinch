from .db import db
from datetime import datetime

class Item(db.Model):
    __tablename__ = "items"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    price = db.Column(db.String(255))
    unit = db.Column(db.String(255),nullable=False,default="per item")
    description = db.Column(db.Text)
    archive = db.Column(db.Boolean,nullable=False,default=False)

    edited_by = db.Column(db.String(10))
    created_at = db.Column(db.DateTime,nullable=False,default=datetime.now)
    updated_at= db.Column(db.DateTime,nullable=False,default=datetime.now,onupdate=datetime.now())

    job_items = db.relationship("JobItem",back_populates="items")
    invoice_items = db.relationship("InvoiceItem",back_populates="items")
    estimate_items = db.relationship("EstimateItem",back_populates="items")


    def to_dict(self):
        return {
            "id":self.id
        }
