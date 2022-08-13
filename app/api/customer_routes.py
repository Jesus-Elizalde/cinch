from flask import Blueprint,jsonify,request
from app.models import db, Customer ,Business
from app.forms import CustomerForm,EditCustomerForm
from app.utils import validation_errors_to_error_messages

from app.googlegeo import geocode

customer_routes = Blueprint("customer",__name__)


@customer_routes.route("/")
def get_all_customers():
    customers = Customer.query.all()
    return jsonify([customer.to_dict() for customer in customers])


@customer_routes.route("/", methods=["POST"])
def new_customer():
    form = CustomerForm()

    form['csrf_token'].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_customer = Customer(
            first_name = form.data["first_name"],
            last_name = form.data["last_name"],
            mobile_number = form.data["mobile_number"],
            home_number = form.data["home_number"],
            email = form.data["email"],
            note = form.data["note"],
            edited_by = form.data["edited_by"],
            business_id = form.data["business_id"]
        )

        db.session.add(new_customer)
        db.session.commit()
        return new_customer.to_dict()

    return {"errors":validation_errors_to_error_messages(form.errors)},401

@customer_routes.route("/<int:id>",methods=["PUT"])
def edit_customer(id):
    form = EditCustomerForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        edit_customer = Customer.query.get(id)

        edit_customer.first_name = form.data["first_name"],
        edit_customer.last_name = form.data["last_name"],
        edit_customer.mobile_number = form.data["mobile_number"],
        edit_customer.home_number = form.data["home_number"],
        edit_customer.email = form.data["email"],
        edit_customer.note = form.data["note"],
        edit_customer.edited_by = form.data["edited_by"],
        edit_customer.business_id = form.data["business_id"]

        db.session.commit()
        return edit_customer.to_dict()

    return {"errors":validation_errors_to_error_messages(form.errors)}, 401


@customer_routes.route("/<int:id>",methods=["DELETE"])
def delete_customer(id):
    customer = Customer.query.get(id)

    if customer:
        db.session.delete(customer)
        db.session.commit()

        return jsonify(id)

    return {"errors":"customer doesn't exist"}, 401
