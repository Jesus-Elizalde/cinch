"""Initial migration.

Revision ID: 2e7bb29f2877
Revises: 
Create Date: 2022-07-31 22:14:10.562594

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2e7bb29f2877'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('businesses',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('mobile', sa.Boolean(), nullable=False),
    sa.Column('street', sa.String(length=255), nullable=True),
    sa.Column('city', sa.String(length=255), nullable=True),
    sa.Column('state', sa.String(length=255), nullable=True),
    sa.Column('country', sa.String(length=255), nullable=True),
    sa.Column('postal_code', sa.String(length=255), nullable=True),
    sa.Column('lat', sa.String(length=255), nullable=True),
    sa.Column('long', sa.String(length=255), nullable=True),
    sa.Column('website_url', sa.String(length=255), nullable=True),
    sa.Column('email', sa.String(length=255), nullable=True),
    sa.Column('license_number', sa.String(length=255), nullable=True),
    sa.Column('logo', sa.String(length=255), nullable=False),
    sa.Column('profile', sa.Text(), nullable=True),
    sa.Column('message', sa.Text(), nullable=True),
    sa.Column('phone_number', sa.String(length=255), nullable=True),
    sa.Column('edited_by', sa.String(length=10), nullable=True),
    sa.Column('date_created', sa.Date(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('discounts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('amount', sa.String(length=255), nullable=True),
    sa.Column('type', sa.String(length=255), nullable=False),
    sa.Column('archive', sa.Boolean(), nullable=False),
    sa.Column('edited_by', sa.String(length=10), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('price', sa.String(length=255), nullable=True),
    sa.Column('unit', sa.String(length=255), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('archive', sa.Boolean(), nullable=False),
    sa.Column('edited_by', sa.String(length=10), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('customers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=55), nullable=False),
    sa.Column('last_name', sa.String(length=55), nullable=False),
    sa.Column('mobile_number', sa.String(length=255), nullable=False),
    sa.Column('home_number', sa.String(length=255), nullable=True),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('note', sa.Text(), nullable=False),
    sa.Column('edited_by', sa.String(length=10), nullable=True),
    sa.Column('joined_date', sa.DateTime(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.Column('business_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['business_id'], ['businesses.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=55), nullable=False),
    sa.Column('last_name', sa.String(length=55), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('role', sa.String(length=55), nullable=False),
    sa.Column('profile_picture', sa.String(length=255), nullable=False),
    sa.Column('light_mode', sa.String(length=55), nullable=False),
    sa.Column('login_mode', sa.Boolean(), nullable=False),
    sa.Column('date_joined', sa.DateTime(), nullable=False),
    sa.Column('last_login', sa.DateTime(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.Column('business_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['business_id'], ['businesses.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('addresses',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('street', sa.String(length=255), nullable=False),
    sa.Column('city', sa.String(length=255), nullable=False),
    sa.Column('state', sa.String(length=255), nullable=False),
    sa.Column('country', sa.String(length=255), nullable=False),
    sa.Column('postal_code', sa.String(length=255), nullable=False),
    sa.Column('lat', sa.String(length=255), nullable=True),
    sa.Column('long', sa.String(length=255), nullable=True),
    sa.Column('billing', sa.Boolean(), nullable=False),
    sa.Column('note', sa.Text(), nullable=False),
    sa.Column('edited_by', sa.String(length=10), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.Column('customer_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['customer_id'], ['customers.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('estimates',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('message', sa.Text(), nullable=True),
    sa.Column('due', sa.String(), nullable=False),
    sa.Column('service_date', sa.DateTime(), nullable=False),
    sa.Column('total', sa.String(), nullable=True),
    sa.Column('status', sa.String(length=255), nullable=False),
    sa.Column('note', sa.Text(), nullable=True),
    sa.Column('archive', sa.Boolean(), nullable=False),
    sa.Column('edited_by', sa.String(length=10), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.Column('customer_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['customer_id'], ['customers.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('invoices',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('message', sa.Text(), nullable=True),
    sa.Column('due', sa.String(), nullable=False),
    sa.Column('service_date', sa.DateTime(), nullable=False),
    sa.Column('total', sa.String(), nullable=True),
    sa.Column('status', sa.String(length=255), nullable=False),
    sa.Column('note', sa.Text(), nullable=True),
    sa.Column('archive', sa.Boolean(), nullable=False),
    sa.Column('edited_by', sa.String(length=10), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.Column('customer_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['customer_id'], ['customers.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('jobs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('from_date_time', sa.DateTime(), nullable=False),
    sa.Column('to_date_time', sa.DateTime(), nullable=False),
    sa.Column('status', sa.String(length=255), nullable=False),
    sa.Column('note', sa.Text(), nullable=True),
    sa.Column('archive', sa.Boolean(), nullable=False),
    sa.Column('edited_by', sa.String(length=10), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.Column('customer_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['customer_id'], ['customers.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Estimate_Item',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('quantity', sa.String(), nullable=True),
    sa.Column('note', sa.Text(), nullable=True),
    sa.Column('total', sa.String(), nullable=True),
    sa.Column('estimate_id', sa.Integer(), nullable=False),
    sa.Column('item_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['estimate_id'], ['estimates.id'], ),
    sa.ForeignKeyConstraint(['item_id'], ['items.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Invoice_Item',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('quantity', sa.String(), nullable=True),
    sa.Column('note', sa.Text(), nullable=True),
    sa.Column('total', sa.String(), nullable=True),
    sa.Column('invoice_id', sa.Integer(), nullable=False),
    sa.Column('item_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['invoice_id'], ['invoices.id'], ),
    sa.ForeignKeyConstraint(['item_id'], ['items.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Job_Item',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('quantity', sa.String(), nullable=True),
    sa.Column('note', sa.Text(), nullable=True),
    sa.Column('total', sa.String(), nullable=True),
    sa.Column('job_item', sa.Integer(), nullable=False),
    sa.Column('item_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['item_id'], ['items.id'], ),
    sa.ForeignKeyConstraint(['job_item'], ['jobs.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('estimate_discount',
    sa.Column('estimate_id', sa.Integer(), nullable=False),
    sa.Column('discount_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['discount_id'], ['discounts.id'], ),
    sa.ForeignKeyConstraint(['estimate_id'], ['estimates.id'], ),
    sa.PrimaryKeyConstraint('estimate_id', 'discount_id')
    )
    op.create_table('invoice_discount',
    sa.Column('invoice_id', sa.Integer(), nullable=False),
    sa.Column('discount_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['discount_id'], ['discounts.id'], ),
    sa.ForeignKeyConstraint(['invoice_id'], ['invoices.id'], ),
    sa.PrimaryKeyConstraint('invoice_id', 'discount_id')
    )
    op.create_table('job_discount',
    sa.Column('job_id', sa.Integer(), nullable=False),
    sa.Column('discount_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['discount_id'], ['discounts.id'], ),
    sa.ForeignKeyConstraint(['job_id'], ['jobs.id'], ),
    sa.PrimaryKeyConstraint('job_id', 'discount_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('job_discount')
    op.drop_table('invoice_discount')
    op.drop_table('estimate_discount')
    op.drop_table('Job_Item')
    op.drop_table('Invoice_Item')
    op.drop_table('Estimate_Item')
    op.drop_table('jobs')
    op.drop_table('invoices')
    op.drop_table('estimates')
    op.drop_table('addresses')
    op.drop_table('users')
    op.drop_table('customers')
    op.drop_table('items')
    op.drop_table('discounts')
    op.drop_table('businesses')
    # ### end Alembic commands ###
