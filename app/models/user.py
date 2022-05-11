from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(55),nullable=False)
    last_name = db.Column(db.String(55),nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(55),nullable=False)
    date_joined = db.Column(db.DateTime, nullable=False , default=datetime.now)
    last_login = db.Column(db.DateTime, nullable=False , default=datetime.now)
    color = db.Column(db.String(55),nullable=False,default="#00314a")
    business_id = db.Column(db.Integer,db.ForeignKey("businesses.id"), nullable=False)

    business = db.relationship("Business",back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'first_name':self.first_name,
            'last_name':self.last_name,
            'email': self.email,
            'role': self.email,
            'date_joined':self.date_joined,
            'last_login':self.last_login,
            'color':self.color

        }
