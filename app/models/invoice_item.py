from .db import db

class InvoiceItem(db.Model):
    __tablename__ = "Invoice_Item"

    id = db.Column(db.Integer, primary_key=True)

    quantity = db.Column(db.String)
    note = db.Column(db.Text)
    total = db.Column(db.String)

    invoice_id = db.Column(db.Integer,db.ForeignKey("invoices.id"), nullable=False)
    item_id = db.Column(db.Integer,db.ForeignKey("items.id"), nullable=False)

    invoices = db.relationship("Invoice",back_populates="invoice_items")
    items = db.relationship("Item",back_populates="invoice_items")

    def to_dict(self):
        return {
            "id":self.id
        }
