from .db import db

job_discount = db.Table(
    "job_discount",
        db.Column(
            "job_id", db.Integer, db.ForeignKey("jobs.id"), primary_key=True
        ),
        db.Column(
            "discount_id", db.Integer, db.ForeignKey("discounts.id"), primary_key=True
        )

)
