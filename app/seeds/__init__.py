from flask.cli import AppGroup
from .users import seed_users, undo_users
from .friends import seed_friends, undo_friends
from .friend_requests import seed_friend_requests, undo_friend_requests
from .horoscope_posts import seed_horoscope_posts, undo_horoscope_posts
from .comments import seed_comments, undo_comments
from .likes import seed_likes, undo_likes
from .zodiac_lists import seed_zodiac_lists, undo_zodiac_lists
from .sun_signs import seed_sun_signs, undo_sun_signs
from .compatibilities import seed_compatabilities, undo_compatabilities
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_sun_signs()
    seed_compatabilities()
    seed_users()
    seed_friends()
    seed_friend_requests()
    seed_horoscope_posts()
    seed_comments()
    seed_likes()
    seed_zodiac_lists()


    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_sun_signs()
    undo_compatabilities()
    undo_users()
    undo_friends()
    undo_friend_requests()
    undo_horoscope_posts()
    undo_comments()
    undo_likes()
    undo_zodiac_lists()

    # Add other undo functions here
