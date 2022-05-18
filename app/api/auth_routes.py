from flask import Blueprint, jsonify, session, request
from app.models import User, db,Business, Category, Service
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from sqlalchemy import or_

from app.utils import validation_errors_to_error_messages

auth_routes = Blueprint('auth', __name__)


# def validation_errors_to_error_messages(validation_errors):
#     """
#     Simple function that turns the WTForms validation errors into a simple list
#     """
#     errorMessages = []
#     for field in validation_errors:
#         for error in validation_errors[field]:
#             errorMessages.append(f'{field} : {error}')
#     return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(or_(User.email == form.data['email_username'], User.username == form.data['email_username'])).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if form.data['role'] == "owner":
            business = Business()
            db.session.add(business)
            db.session.commit()

            category1 = Category(name="Service Call",business_id=business.id)
            category2 = Category(name="Diagnose and Repair",business_id=business.id)
            category3 = Category(name="Install",business_id=business.id)
            db.session.add(category1)
            db.session.add(category2)
            db.session.add(category3)
            db.session.commit()

            service1 = Service(name="Diagnose a problem",description="Have an appliance problem? Have an expert come over to diagnose what is going on.",cost=5.00,price=25.00,category_id=category1.id)

            service2 = Service(name="Refrigerator",description="Diagnose and repair your existing refrigerator or freezer.",cost=25.00,price=125.00,category_id=category2.id)
            service3 = Service(name="Washing Machine",description="Diagnose and repair your existing washing machine.",cost=25.00,price=125.00,category_id=category2.id)
            service4 = Service(name="Dryer",description="Diagnose and repair your existing gas or electric dryer.",cost=25.00,price=125.00,category_id=category2.id)
            service5 = Service(name="Gas or Electric Oven",description="Repair your existing gas or electric oven.",cost=15.00,price=65.00,category_id=category2.id)
            service6 = Service(name="Cooktop",description="Diagnose and repair your existing cooktop.",cost=5.00,price=50.00,category_id=category2.id)
            service7 = Service(name="Trash Compactor",description="Diagnose and repair your existing trash compactor",cost=5.00,price=55.00,category_id=category2.id)

            service8 = Service(name="Washer / Dryer",description="Hookup and install an owner purchased washer and/or dryer.",cost=525.00,price=625.00,category_id=category3.id)
            service9 = Service(name="Dishwasher",description="Hookup and install an owner purchased Dishwasher",cost=250.00,price=350.00,category_id=category3.id)
            service10 = Service(name="Oven",description="Hookup and install an owner supplied gas or electric oven. Installation in same spot as existing and does not include new circuit run to appliance.",cost=250.00,price=350.00,category_id=category3.id)
            service11 = Service(name="Built-in Microwave",description="Demo and remove old range hood. Install new owner supplied range hood.",cost=150.00,price=200.00,category_id=category3.id)

            db.session.add(service1)
            db.session.add(service2)
            db.session.add(service3)
            db.session.add(service4)
            db.session.add(service5)
            db.session.add(service6)
            db.session.add(service7)
            db.session.add(service8)
            db.session.add(service9)
            db.session.add(service10)
            db.session.add(service11)
            db.session.commit()



            user = User(
                username=form.data['username'],
                email=form.data['email'],
                password=form.data['password'],
                first_name=form.data['first_name'],
                last_name=form.data['last_name'],
                role=form.data['role'],
                color=form.data['color'],
                business_id=business.id
            )
            db.session.add(user)
            db.session.commit()
            login_user(user)
            return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
