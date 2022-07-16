from .db import db

estimate_discount = db.Table(
    "estimate_discount",
        db.Column(
            "estimate_id", db.Integer, db.ForeignKey("estimates.id"), primary_key=True
        ),
        db.Column(
            "discount_id", db.Integer, db.ForeignKey("discounts.id"), primary_key=True
        )

)
