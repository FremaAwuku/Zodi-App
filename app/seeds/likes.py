from app.models import db, Like


# Adds a demo ZodiacList, you can add other ZodiacLists here if you want
def seed_likes():
    like1 = Like(
    post_id=2,
    user_id=1,
    )
    like2= Like(
        post_id=1,
        user_id=2,
    )
    like3= Like(
        post_id=1,
        user_id=3,
    )
    like4= Like(
        post_id=1,
        user_id=1,
    )
    db.session.add(like1)
    db.session.add(like2)
    db.session.add(like3)
    db.session.add(like4)
    
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the ZodiacLists table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
