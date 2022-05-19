from app.models import Customer,db
import json
import os


def seed_customers():
    f = open(os.getcwd()+"/app/seeds/Customers.json")

    data = json.load(f)

    for customer_dict in data:

        new_customer = Customer(
            first_name=customer_dict["firstName"],
            last_name=customer_dict["lastName"],
            display_name=customer_dict["firstName"],
            street=customer_dict["address"]["address"],
            city=customer_dict["address"]['city'],
            state=customer_dict["address"]["state"],
            country="USA",
            postal_code=customer_dict["address"]["postalCode"],
            lat=customer_dict["address"]['coordinates']["lat"],
            long=customer_dict["address"]['coordinates']["lng"],
            mobile_number=customer_dict["phone"],
            home_number=customer_dict["phone"],
            email=customer_dict["email"],
            company=customer_dict["company"]["name"],
            job_title=customer_dict["company"]["title"],
            work_number=customer_dict["phone"],
            business_id=1)
        db.session.add(new_customer)

    db.session.commit()

    f.close()



def undo_customers():
    db.session.execute('TRUNCATE customers RESTART IDENTITY CASCADE;')
    db.session.commit()
