from app.models import db, User,Business,Service,Category


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo_business = Business()
    marnie_business = Business()
    bobbie_business = Business()

    db.session.add(demo_business)
    db.session.add(marnie_business)
    db.session.add(bobbie_business)

    db.session.commit()

    category1 = Category(name="Service Call",business_id=demo_business.id)
    category2 = Category(name="Diagnose and Repair",business_id=demo_business.id)
    category3 = Category(name="Install",business_id=demo_business.id)
    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.commit()

    service1 = Service(name="Diagnose a problem",description="Have an appliance problem? Have an expert come over to diagnose what is going on.",cost=5.00,price=25.50,category_id=category1.id)

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

    demo = User(
        username='Demo', email='demo@aa.io', password='password', first_name="Demo", last_name="User", role="owner", business_id=demo_business.id)
    demo2 = User(
        username='Jack123', email='jackRob@aa.io', password='password', first_name="Jack", last_name="Robertson", role="admin", business_id=demo_business.id)
    demo3 = User(
        username='Anabel123', email='anabelJohn@aa.io', password='password', first_name="Anabel", last_name="John", role="specialist", business_id=demo_business.id)
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password',first_name="Marnie", last_name="Jackson", role="owner", business_id=marnie_business.id)
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password',first_name="Bobbie", last_name="Firmino", role="owner",business_id=bobbie_business.id)

    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
    db.session.commit()
