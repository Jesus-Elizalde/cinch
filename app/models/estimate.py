from .db import db
from datetime import datetime
from .estimate_discount import estimate_discount

class Estimate(db.Model):
    __tablename__ = "estimates"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    message = db.Column(db.Text)
    due = db.Column(db.String,nullable=False,default="Due upon invoice date")
    service_date = db.Column(db.DateTime,nullable=False)
    total= db.Column(db.String)
    status = db.Column(db.String(255),nullable=False,default="pending")
    note = db.Column(db.Text)
    archive = db.Column(db.Boolean,nullable=False,default=False)

    edited_by = db.Column(db.String(10))
    created_at = db.Column(db.DateTime,nullable=False,default=datetime.now)
    updated_at= db.Column(db.DateTime,nullable=False,default=datetime.now,onupdate=datetime.now)

    customer_id = db.Column(db.Integer,db.ForeignKey("customers.id"), nullable=False)

    customers = db.relationship("Customer",back_populates="estimates")

    estimates_items = db.relationship("EstimateItem",back_populates="estimates")

    estimate_discounts = db.relationship("Discount",secondary=estimate_discount,back_populates="estimate_discounts")

    def to_dict(self):
        return {
            "id":self.id
        }