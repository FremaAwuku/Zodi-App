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
    request3 = FriendRequest(
        requesting_user_id=4,
        accepting_friend_id = 1
    )
    request4 = FriendRequest(
        requesting_user_id=5,
        accepting_friend_id = 1
    )
    request5 = FriendRequest(
        requesting_user_id=6,
        accepting_friend_id = 1
    )
    db.session.add(request1)
    db.session.add(request2)
    db.session.add(request3)
    db.session.add(request4)
    db.session.add(request5)
    db.session.commit()

def undo_friend_requests():
    db.session.execute('TRUNCATE friend_requests RESTART IDENTITY CASCADE;')
    db.session.commit()
