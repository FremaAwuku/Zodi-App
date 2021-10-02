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
    post4= HoroscopePost(
        user_id=3,
        horoscope= "don't allow your anger to get the best of you in the next coming days. These are tests to get your next steps in self growth and success",
        content="WHEW! chile! idk.... if this co-worker try me this week... i may need to find a new job lol"
    )
    post5= HoroscopePost(
        user_id=4,
        horoscope= "Things may be tough, but they only make you more prepared to see these situations from happening in the future, protecting both you and those you love from unnecessary hurt",
        content="...damn, i guess it is what it is. Its good to know i'll be more prepared for this next time around"
    )
    post6= HoroscopePost(
        user_id=5,
        horoscope= "Is there someone you've been eyeing lately? Now's the time to make your move! Hurry before the opportunity goes away ",
        content="OMG OMG OMG!!!!, this! how did they know?!! (i'm literally scared af tbh)"
    )
    post7= HoroscopePost(
        user_id=6,
        horoscope= "Grace yourself with some kindness, every once in a while. It's not like you aren't doing enough for everybody else",
        content="Yesssss sis! A READ, ughhh need to some TLC and a spa-day stat! #selfcare"
    )
    post8= HoroscopePost(
        user_id=7,
        horoscope= "Get on your A game, the time is now! Move in confidence",
        content="Man, i really gotta get my s*** together! "
    )
    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)
    db.session.add(post7)
    db.session.add(post8)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the ZodiacLists table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_horoscope_posts():
    db.session.execute('TRUNCATE horoscope_posts RESTART IDENTITY CASCADE;')
    db.session.commit()
