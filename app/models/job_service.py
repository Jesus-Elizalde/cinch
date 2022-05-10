from .db import db


job_service = db.Table(
    "jobServices",
        db.Column(
            "service_id", db.Integer, db.ForeignKey("services.id"), primary_key=True
        ),
        db.Column(
            "job_id", db.Integer, db.ForeignKey("jobs.id"), primary_key=True
        )

)
