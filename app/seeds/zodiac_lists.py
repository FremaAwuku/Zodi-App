from app.models import db, ZodiacList


# Adds a demo ZodiacList, you can add other ZodiacLists here if you want
def seed_zodiac_lists():
    zodi_list1 = ZodiacList(
    user_id=1,
    first_name='Demo-Lisa',
    first_name_id=1,
    first_name_sign='Aries',
    match_name='Fremy',
    match_name_id=2,
    match_name_sign='Taurus',
    compatibility=3
    )
    zodi_list2 = ZodiacList(
    user_id=1,
    first_name='Demo-Lisa',
    first_name_id=1,
    first_name_sign='Aries',
    match_name='ChiChi',
    match_name_id=9,
    match_name_sign='Sagittarius',
    compatibility=7
    )
    zodi_list3 = ZodiacList(
    user_id=1,
    first_name='Momma',
    first_name_id=5,
    first_name_sign='Leo',
    match_name=None,
    match_name_id=None,
    match_name_sign=None,
    compatibility=None
    )

    db.session.add(zodi_list1)
    db.session.add(zodi_list2)
    db.session.add(zodi_list3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the ZodiacLists table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_zodiac_lists():
    db.session.execute('TRUNCATE zodiac_lists RESTART IDENTITY CASCADE;')
    db.session.commit()
