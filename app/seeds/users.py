from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo~Lisa', email='demo@aa.io', password='password', profile_picture='https://i.pinimg.com/originals/3f/4d/74/3f4d7489cae444f51fed45301afec599.jpg', sun_sign_id=1, cusp=True )
    Fremy = User(
        username='Fremy', email='Fremy@aa.io', password='password', profile_picture='https://data.whicdn.com/images/332453834/original.jpg', sun_sign_id=2, cusp=False)
    Yennefah = User(
        username='Yennefah', email='Yennefah@aa.io', password='password', profile_picture='http://p.favim.com/orig/2019/01/26/tumblr-bratz-tumblr-icons-bratz-Favim.com-6819698.jpg', sun_sign_id=3, cusp=False)
    Darcy = User(
        username='Darcy', email='Darcy@aa.io', password='password', profile_picture='https://pictures.depop.com/b0/11586140/984870590_d3c0e34c46d24e37be212704df54a605/P0.jpg', sun_sign_id=3, cusp=True)
    Ariana = User(
        username='Ariana', email='Ariana@aa.io', password='password', profile_picture='https://i.pinimg.com/originals/6d/b0/15/6db015348f52a6634ce2f623df73e0c7.jpg', sun_sign_id=4, cusp=False)
    Stacy = User(
        username='Stacy', email='Stacy@aa.io', password='password', profile_picture='https://i.pinimg.com/originals/84/42/de/8442ded80292114f6b43204d66b2b283.jpg', sun_sign_id=8, cusp=False)
    Keller = User(
        username='Keller', email='Keller@aa.io', password='password', profile_picture='https://storage.googleapis.com/dystribute-media/ez9qpECGeXe9fmtpt1FD.jpg', sun_sign_id=6, cusp=False)
    Breana = User(
        username='Breana', email='Breana@aa.io', password='password', profile_picture='https://i.pinimg.com/originals/14/a4/20/14a420a520fd588f3b9e8d99f332718b.jpg', sun_sign_id=10, cusp=False)
    Selena = User(
        username='Selena', email='Selena@aa.io', password='password', profile_picture='https://bloximages.newyork1.vip.townnews.com/videtteonline.com/content/tncms/assets/v3/editorial/3/a9/3a959ea6-3d31-11e9-81a9-6b5333200d82/5c7af4122ab93.image.jpg', sun_sign_id=12, cusp=True)

    db.session.add(demo)
    db.session.add(Fremy)
    db.session.add(Yennefah)
    db.session.add(Darcy)
    db.session.add(Ariana)
    db.session.add(Stacy)
    db.session.add(Keller)
    db.session.add(Breana)
    db.session.add(Selena)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
