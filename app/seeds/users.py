from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', profile_picture='https://i.pinimg.com/originals/3f/4d/74/3f4d7489cae444f51fed45301afec599.jpg', sun_sign_id=None, cusp=True )
    fremy = User(
        username='fremy', email='fremy@aa.io', password='password', profile_picture='https://i.pinimg.com/originals/14/a4/20/14a420a520fd588f3b9e8d99f332718b.jpg', sun_sign_id=2, cusp=False)
    yennefah = User(
        username='yennefah', email='yennefah@aa.io', password='password', profile_picture='https://pictures.depop.com/b0/11586140/984870590_d3c0e34c46d24e37be212704df54a605/P0.jpg', sun_sign_id=3, cusp=False)
    darcy = User(
        username='darcy', email='darcy@aa.io', password='password', profile_picture='https://pictures.depop.com/b0/11586140/984870590_d3c0e34c46d24e37be212704df54a605/P0.jpg', sun_sign_id=3, cusp=True)
    db.session.add(demo)
    db.session.add(fremy)
    db.session.add(yennefah)
    db.session.add(darcy)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
