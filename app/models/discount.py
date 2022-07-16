from .db import db
from datetime import datetime
from .job_discount import job_discount
from .invoice_discount import invoice_discount
from .estimate_discount import estimate_discount

class Discount(db.Model):
    __tablename__ = "discounts"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    amount = db.Column(db.String(255))
    type = db.Column(db.String(255),nullable=False,default="%")
    archive = db.Column(db.Boolean,nullable=False,default=False)

    edited_by = db.Column(db.String(10))
    created_at = db.Column(db.DateTime,nullable=False,default=datetime.now)
    updated_at= db.Column(db.DateTime,nullable=False,default=datetime.now,onupdate=datetime.now())

    job_discounts = db.relationship("Job",secondary=job_discount,back_populates="job_discounts")
    estimate_discounts = db.relationship("Estimate",secondary=estimate_discount,back_populates="estimate_discounts")
    invoice_discounts = db.relationship("Invoice",secondary=invoice_discount,back_populates="invoice_discounts")


    def to_dict(self):
        return {
            "id":self.id
        }
