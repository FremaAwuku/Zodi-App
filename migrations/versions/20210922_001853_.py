"""empty message

Revision ID: 0b110a1e78fe
Revises: c5bdddeed993
Create Date: 2021-09-22 00:18:53.007947

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0b110a1e78fe'
down_revision = 'c5bdddeed993'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('horoscope_posts', sa.Column('created', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('horoscope_posts', 'created')
    # ### end Alembic commands ###