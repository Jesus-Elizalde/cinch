from flask import Blueprint,jsonify,request
from app.models import Job, db
from app.forms import JobForm
from app.utils import validation_errors_to_error_messages

job_routes = Blueprint("job",__name__)

@job_routes.route("/")
def get_all_job():
    jobs = Job.query.all()
    return jsonify([job.to_dict() for job in jobs])

# @job_routes.route("/",methods=["POST"])
# def new_job():
#     form = JobForm()
#     form["csrf_token"].data = request.cookies["csrf_token"]
#     if form.validate_on_submit():

#         job = Job(
#             from_date_time = form.data["from_date_time"],
#             to_date_time = form.data["to_date_time"],
#             message = form.data["message"],
#             customer_id = form.data["customer_id"]
#         )

#         db.session.add(job)
#         db.session.commit()

#         service_ids = form.data["job_ids"].split("-")

#         for id in service_ids:
#            service = Service.query.get(int(id))
#            job.job_services.append(service)

#         db.session.commit()




#         return job.to_dict()
#     return {"errors":validation_errors_to_error_messages(form.errors)},401

# @job_routes.route("/<int:id>",methods=["PUT"])
# def edit_job(id):

#     form = JobForm()
#     form["csrf_token"].data = request.cookies["csrf_token"]
#     if form.validate_on_submit():
#         job = Job.query.get(id)

#         job.from_date_time = form.data["from_date_time"]
#         job.to_date_time = form.data["to_date_time"]
#         job.message = form.data["message"]
#         job.customer_id = form.data["customer_id"]

#         job.job_services = []
#         service_ids = form.data["job_ids"].split("-")

#         for id in service_ids:
#            service = Service.query.get(int(id))
#            job.job_services.append(service)

#         db.session.commit()

#         db.session.commit()
#         return job.to_dict()
#     return {"errors":validation_errors_to_error_messages(form.errors)},401

# @job_routes.route('/<int:id>',methods=["DELETE"])
# def delete_job(id):
#     job = Job.query.get(id)

#     if job:
#         db.session.delete(job)
#         db.session.commit()

#         return str(id)

#     return {"error": "customer doesn't exists"}, 401
