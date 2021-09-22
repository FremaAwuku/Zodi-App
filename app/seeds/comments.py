from app.models import db, Comment


# Adds a demo ZodiacList, you can add other ZodiacLists here if you want
def seed_comments():
    comment1 = Comment(
    post_id=2,
    user_id=1,
    content="Oooooo thats so you!"
    )
    comment2= Comment(
        post_id=1,
        user_id=2,
        content="I love this for you!"
    )
    comment3= Comment(
        post_id=1,
        user_id=3,
        content="I had a similar horoscope a few weeks back"
    )
    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the ZodiacLists table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
