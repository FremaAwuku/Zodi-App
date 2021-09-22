from app.models import db, Friend


# Adds a demo ZodiacList, you can add other ZodiacLists here if you want
def seed_friends():
    friend1 = Friend(
    user_id=1,
    friend_id = 2
    )
    r_friend1= Friend(
        friend_id=1,
        user_id=2
    )


    db.session.add(friend1)
    db.session.add(r_friend1)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the ZodiacLists table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_friends():
    db.session.execute('TRUNCATE friends RESTART IDENTITY CASCADE;')
    db.session.commit()
