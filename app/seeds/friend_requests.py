from app.models import db, FriendRequest

def seed_friend_requests():
    request1 = FriendRequest(
        requesting_user_id=3,
        accepting_friend_id = 1
    )
    request2 = FriendRequest(
        requesting_user_id=2,
        accepting_friend_id = 3
    )

    db.session.add(request1)
    db.session.add(request2)

    db.session.commit()

def undo_friend_requests():
    db.session.execute('TRUNCATE friend_requests RESTART IDENTITY CASCADE;')
    db.session.commit()
