from .db import db

invoice_discount = db.Table(
    "invoice_discount",
        db.Column(
            "invoice_id", db.Integer, db.ForeignKey("invoices.id"), primary_key=True
        ),
        db.Column(
            "discount_id", db.Integer, db.ForeignKey("discounts.id"), primary_key=True
        )

)
