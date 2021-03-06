"""empty message

Revision ID: 863fd6285e4d
Revises: 983b7047c892
Create Date: 2021-09-22 19:59:31.311743

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '863fd6285e4d'
down_revision = '983b7047c892'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('sun_signs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('sign', sa.String(), nullable=False),
    sa.Column('dates', sa.String(), nullable=False),
    sa.Column('qualities', sa.String(), nullable=False),
    sa.Column('element', sa.String(), nullable=False),
    sa.Column('ruling_planet', sa.String(), nullable=False),
    sa.Column('symbol', sa.String(), nullable=False),
    sa.Column('strengths', sa.String(), nullable=False),
    sa.Column('weaknesses', sa.String(), nullable=False),
    sa.Column('short_description', sa.String(), nullable=False),
    sa.Column('long_description', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('compatibilities',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('sign_1', sa.Integer(), nullable=True),
    sa.Column('sign_2', sa.Integer(), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['sign_1'], ['sun_signs.id'], ),
    sa.ForeignKeyConstraint(['sign_2'], ['sun_signs.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('users', sa.Column('sun_sign_id', sa.Integer(), nullable=True))
    op.add_column('users', sa.Column('cusp', sa.Boolean(), nullable=True))
    op.create_foreign_key(None, 'users', 'sun_signs', ['sun_sign_id'], ['id'])
    op.drop_column('users', 'sun_sign')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('sun_sign', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.drop_constraint(None, 'users', type_='foreignkey')
    op.drop_column('users', 'cusp')
    op.drop_column('users', 'sun_sign_id')
    op.drop_table('compatibilities')
    op.drop_table('sun_signs')
    # ### end Alembic commands ###
