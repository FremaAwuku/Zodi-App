from app.models import db, HoroscopePost


# Adds a demo ZodiacList, you can add other ZodiacLists here if you want
def seed_horoscope_posts():
    post1 = HoroscopePost(
    user_id=1,
    horoscope= "you are a beautiful star be the one you are!",
    content="I mean... i really feel that.... follow my ig"
    )
    post2= HoroscopePost(
        user_id=1,
        horoscope= "don't fall for old routines, spin your self in new dreams!",
        content="this is so on point! I've been feeling so habitual recently"
    )
    post3= HoroscopePost(
        user_id=2,
        horoscope= "you are a naturl born leader, today you will have the opportunity to take charge",
        content="this is something I see my self doing often but have recently taken a less aggressive approach "
    )
    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the ZodiacLists table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_horoscope_posts():
    db.session.execute('TRUNCATE horoscope_posts RESTART IDENTITY CASCADE;')
    db.session.commit()
