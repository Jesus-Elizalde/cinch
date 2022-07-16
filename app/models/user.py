from email.policy import default
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
    profile_picture = db.Column(db.String(255),nullable=False,default=" ")
    light_mode = db.Column(db.String(55),nullable=False,default="light")
    login_mode = db.Column(db.Boolean,nullable=False,default=False)

    date_joined = db.Column(db.DateTime, nullable=False , default=datetime.now)
    last_login = db.Column(db.DateTime, nullable=False , default=datetime.now)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    updated_at = db.Column(db.DateTime, nullable=False,default=datetime.now,onupdate=datetime.now)

    business_id = db.Column(db.Integer,db.ForeignKey("businesses.id"), nullable=False)

    businesses = db.relationship("Business",back_populates="users")

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
            'role': self.role,
            'date_joined':self.date_joined,
            'last_login':self.last_login,
            'business_id':self.business_id

        }
