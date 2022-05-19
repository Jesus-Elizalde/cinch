from .db import db
from .job_service import job_service
from datetime import datetime

class Job(db.Model):
    __tablename__ = "jobs"

    id = db.Column(db.Integer, primary_key=True)
    from_date_time = db.Column(db.DateTime,nullable=False)
    to_date_time = db.Column(db.DateTime,nullable=False)
    message = db.Column(db.Text)
    customer_id = db.Column(db.Integer,db.ForeignKey("customers.id"), nullable=False)
    created_at = db.Column(db.DateTime,nullable=False,default=datetime.now)
    updated_at= db.Column(db.DateTime,nullable=False,default=datetime.now,onupdate=datetime.now)

    customer = db.relationship("Customer",back_populates="job")

    job_services = db.relationship(
        "Service",
        secondary=job_service,
        back_populates="job_services"
    )


    def to_dict(self):
        print(self.job_services,"++++++++++++++")
        return {
            'id': self.id,
            'from_date_time':self.from_date_time,
            'to_date_time':self.to_date_time,
            'message':self.message,
            'customer_id':self.customer_id,
            'created_at':self.created_at,
            'updated_at':self.updated_at,
            "services": [service.to_dict() for service in self.job_services]

        }
