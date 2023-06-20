from .db import db
from datetime import datetime
from .job_discount import job_discount

class Job(db.Model):
    __tablename__ = "jobs"

    id = db.Column(db.Integer, primary_key=True)
    from_date_time = db.Column(db.DateTime,nullable=False)
    to_date_time = db.Column(db.DateTime,nullable=False)
    status = db.Column(db.String(255),nullable=False,default="pending")
    note = db.Column(db.Text)
    archive = db.Column(db.Boolean,nullable=False,default=False)

    edited_by = db.Column(db.String(10))
    created_at = db.Column(db.DateTime,nullable=False,default=datetime.now)
    updated_at= db.Column(db.DateTime,nullable=False,default=datetime.now,onupdate=datetime.now)

    customer_id = db.Column(db.Integer,db.ForeignKey("customers.id"), nullable=False)

    customers = db.relationship("Customer",back_populates="jobs")

    job_items = db.relationship("JobItem",back_populates="jobs")

    job_discounts = db.relationship("Discount",secondary=job_discount,back_populates="job_discounts")


    def to_dict(self):
        return {
            "id":self.id
        }
