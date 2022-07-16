from flask import Blueprint,jsonify,request
from app.models import db, Customer ,Business
from app.forms import CustomerForm,EditCustomerForm
from app.utils import validation_errors_to_error_messages
from app.googlegeo import geocode

customer_routes = Blueprint("customer",__name__)

@customer_routes.route('/')
def get_all_customer():
    customers = Customer.query.all()
    return jsonify([customer.to_dict() for customer in customers])

@customer_routes.route("/business_id/<int:business_id>")
def get_customer_by_business(business_id):
    customers = Customer.query.join(Business).filter(Business.id == business_id)
    return jsonify([customer.to_dict() for customer in customers])

@customer_routes.route('/',methods=['POST'])
def customer():
    form = CustomerForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        try:
            geolocation = geocode(form.data["street"]+" "+form.data["city"]+" "+form.data["state"]+" "+form.data["country"]+" "+ form.data["postal_code"])

            customer = Customer(
            first_name=form.data["first_name"],
            last_name=form.data["last_name"],
            display_name=form.data["display_name"],
            street=form.data["street"],
            city=form.data["city"],
            state=form.data["state"],
            country=form.data["country"],
            postal_code=geolocation["zipcode"],
            lat=geolocation["coords"]["lat"],
            long=geolocation["coords"]["lng"],
            mobile_number=form.data["mobile_number"],
            home_number=form.data["home_number"],
            email=form.data["email"],
            company=form.data["company"],
            job_title=form.data["job_title"],
            work_number=form.data["work_number"],
            business_id=form.data["business_id"])

            db.session.add(customer)
            db.session.commit()
            return customer.to_dict()
        except:
            return {"errors":["Not a valid address"]}, 401
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@customer_routes.route('/<int:id>',methods=['PUT'])
def customer_put(id):

    form = EditCustomerForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        customer = Customer.query.get(id)

        try:
            geolocation = geocode(form.data["street"]+" "+form.data["city"]+" "+form.data["state"]+" "+form.data["country"])

            customer.first_name=form.data["first_name"]
            customer.last_name=form.data["last_name"]
            customer.display_name=form.data["display_name"]
            customer.street=form.data["street"]
            customer.city=form.data["city"]
            customer.state=form.data["state"]
            customer.country=form.data["country"]
            customer.postal_code=geolocation["zipcode"]
            customer.lat=geolocation["coords"]["lat"]
            customer.long=geolocation["coords"]["lng"]
            customer.mobile_number=form.data["mobile_number"]
            customer.home_number=form.data["home_number"]
            customer.email=form.data["email"]
            customer.company=form.data["company"]
            customer.job_title=form.data["job_title"]
            customer.work_number=form.data["work_number"]

            db.session.commit()
            return customer.to_dict()
        except:
            return {"errors":["Not a valid address"]}, 401
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@customer_routes.route("/<int:id>",methods=["DELETE"])
def delete_customer(id):
    customer = Customer.query.get(id)
    business_id_temp = customer.business_id

    if customer:
        db.session.delete(customer)
        db.session.commit()
        business = Business.query.get(business_id_temp)

        return business.to_dict()
    else:
        return {"error": "customer doesn't exists"}, 401
