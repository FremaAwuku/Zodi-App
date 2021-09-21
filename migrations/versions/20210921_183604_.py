"""empty message

Revision ID: 9500cf4edbfe
Revises: ffdc0a98111c
Create Date: 2021-09-21 18:36:04.705555

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9500cf4edbfe'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('friend_requests',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('requesting_user_id', sa.Integer(), nullable=False),
    sa.Column('accepting_friend_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['accepting_friend_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['requesting_user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('friends',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('friend_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['friend_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('horoscope_posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('horoscope', sa.String(), nullable=False),
    sa.Column('content', sa.String(length=280), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('zodiac_lists',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=40), nullable=False),
    sa.Column('first_name_id', sa.Integer(), nullable=True),
    sa.Column('first_name_sign', sa.String(length=12), nullable=False),
    sa.Column('match_name', sa.String(length=40), nullable=False),
    sa.Column('match_name_id', sa.Integer(), nullable=True),
    sa.Column('match_name_sign', sa.String(length=12), nullable=False),
    sa.Column('compatibility', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['first_name_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['match_name_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('content', sa.Text(), nullable=False),
    sa.ForeignKeyConstraint(['post_id'], ['horoscope_posts.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('likes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['post_id'], ['horoscope_posts.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('users', sa.Column('profile_picture', sa.String(), nullable=True))
    op.add_column('users', sa.Column('sun_sign', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'sun_sign')
    op.drop_column('users', 'profile_picture')
    op.drop_table('likes')
    op.drop_table('comments')
    op.drop_table('zodiac_lists')
    op.drop_table('horoscope_posts')
    op.drop_table('friends')
    op.drop_table('friend_requests')
    # ### end Alembic commands ###
