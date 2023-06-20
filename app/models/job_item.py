from .db import db

class JobItem(db.Model):
    __tablename__ = "Job_Item"

    id = db.Column(db.Integer, primary_key=True)

    quantity = db.Column(db.String)
    note = db.Column(db.Text)
    total = db.Column(db.String)

    job_item = db.Column(db.Integer,db.ForeignKey("jobs.id"), nullable=False)
    item_id = db.Column(db.Integer,db.ForeignKey("items.id"), nullable=False)

    jobs = db.relationship("Job",back_populates="job_items")
    items = db.relationship("Item",back_populates="job_items")

    def to_dict(self):
        return {
            "id":self.id
        }
