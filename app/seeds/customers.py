from app.models import Customer,db
import json
import os


def seed_customers():
    f = open(os.getcwd()+"/app/seeds/Customers.json")

    data = json.load(f)

    for customer_dict in data:

        new_customer = Customer(first_name=customer_dict["firstName"],display_name="1",email="1",last_name=customer_dict["lastName"],street=customer_dict["adress"],city=customer_dict["city"],state=customer_dict["state"],country="USA",postal_code=customer_dict["zipCode"],mobile_number=customer_dict["price"],business_id=1)
        db.session.add(new_customer)

    db.session.commit()

    f.close()



def undo_customers():
    db.session.execute('TRUNCATE customers RESTART IDENTITY CASCADE;')
    db.session.commit()
