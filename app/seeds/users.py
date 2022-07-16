from app.models import db, User,Business


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo_business = Business()
    marnie_business = Business()
    bobbie_business = Business()

    db.session.add(demo_business)
    db.session.add(marnie_business)
    db.session.add(bobbie_business)

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
