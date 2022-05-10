from .db import db

class Service(db.Model):
    __tablename__ = 'services'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.Text)
    image = db.Column(db.String(255))
    unit = db.Column(db.String(255),default="each")
    cost = db.Column(db.Float,nullable=False,default=0.0)
    price = db.Column(db.Float,nullable=False)
    category_id = db.Column(db.Integer,db.ForeignKey("categories.id"), nullable=False)

    category = db.relationship("Category",back_populates="service")

    def to_dict(self):
        return {
            'id': self.id,
            'name':self.name,
            'description':self.description,
            'image':self.image,
            'unit':self.unit,
            'cost':self.cost,
            'price':self.price,
            'category_id':self.category_id,
        }
