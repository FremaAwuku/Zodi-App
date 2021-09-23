from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', profile_picture='', sun_sign_id=1, cusp=True )
    fremy = User(
        username='fremy', email='fremy@aa.io', password='password', profile_picture='', sun_sign_id=2, cusp=False)
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', profile_picture='', sun_sign_id=3, cusp=False)

    db.session.add(demo)
    db.session.add(fremy)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
