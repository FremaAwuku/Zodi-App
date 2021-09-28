from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', profile_picture='https://i.pinimg.com/originals/3f/4d/74/3f4d7489cae444f51fed45301afec599.jpg', sun_sign_id=1, cusp=True )
    fremy = User(
        username='fremy', email='fremy@aa.io', password='password', profile_picture='https://data.whicdn.com/images/332453834/original.jpg', sun_sign_id=2, cusp=False)
    yennefah = User(
        username='yennefah', email='yennefah@aa.io', password='password', profile_picture='http://p.favim.com/orig/2019/01/26/tumblr-bratz-tumblr-icons-bratz-Favim.com-6819698.jpg', sun_sign_id=3, cusp=False)
    darcy = User(
        username='darcy', email='darcy@aa.io', password='password', profile_picture='https://pictures.depop.com/b0/11586140/984870590_d3c0e34c46d24e37be212704df54a605/P0.jpg', sun_sign_id=3, cusp=True)
    ariana = User(
        username='ariana', email='ariana@aa.io', password='password', profile_picture='https://i.pinimg.com/originals/6d/b0/15/6db015348f52a6634ce2f623df73e0c7.jpg', sun_sign_id=4, cusp=False)
    stacy = User(
        username='stacy', email='stacy@aa.io', password='password', profile_picture='https://i.pinimg.com/originals/84/42/de/8442ded80292114f6b43204d66b2b283.jpg', sun_sign_id=8, cusp=False)
    keller = User(
        username='keller', email='keller@aa.io', password='password', profile_picture='https://storage.googleapis.com/dystribute-media/ez9qpECGeXe9fmtpt1FD.jpg', sun_sign_id=6, cusp=False)
    breana = User(
        username='breana', email='breana@aa.io', password='password', profile_picture='https://i.pinimg.com/originals/14/a4/20/14a420a520fd588f3b9e8d99f332718b.jpg', sun_sign_id=10, cusp=False)
    selena = User(
        username='selena', email='selena@aa.io', password='password', profile_picture='https://bloximages.newyork1.vip.townnews.com/videtteonline.com/content/tncms/assets/v3/editorial/3/a9/3a959ea6-3d31-11e9-81a9-6b5333200d82/5c7af4122ab93.image.jpg', sun_sign_id=12, cusp=True)

    db.session.add(demo)
    db.session.add(fremy)
    db.session.add(yennefah)
    db.session.add(darcy)
    db.session.add(ariana)
    db.session.add(stacy)
    db.session.add(keller)
    db.session.add(breana)
    db.session.add(selena)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
