from .db import db

class EstimateItem(db.Model):
    __tablename__ = "Estimate_Item"

    id = db.Column(db.Integer, primary_key=True)

    quantity = db.Column(db.String)
    note = db.Column(db.Text)
    total = db.Column(db.String)

    estimate_id = db.Column(db.Integer,db.ForeignKey("estimates.id"), nullable=False)
    item_id = db.Column(db.Integer,db.ForeignKey("items.id"), nullable=False)

    estimates = db.relationship("Estimate",back_populates="estimate_items")
    items = db.relationship("Item",back_populates="estimate_items")

    def to_dict(self):
        return {
            "id":self.id
        }
