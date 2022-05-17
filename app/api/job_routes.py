from flask import Blueprint,jsonify
from app.models import Job , db

job_routes = Blueprint("job",__name__)

@job_routes.route("/")
def get_all_job():
    jobs = Job.query.all()
    return jsonify([job.to_dict() for job in jobs])
