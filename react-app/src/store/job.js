const GET_JOBS = "job/GET_JOBS";
const EDIT_JOB = "job/EDIT_JOB";
const DELETE_JOB = "job/DELETE_JOB";

const getJobs = (jobs) => ({
  type: GET_JOBS,
  jobs,
});
const editJob = (job) => ({
  type: EDIT_JOB,
  job,
});
const deleteJob = (id) => ({
  type: DELETE_JOB,
  id,
});

export const getJobsDetailts = () => async (dispatch) => {
  const response = await fetch(`/api/jobs/`);
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(getJobs(data));
  }
};

export const newJobDetails = (job) => async (dispatch) => {
  const response = await fetch("/api/jobs/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(editJob(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again"];
  }
};

export const editJobDetails = (job) => async (dispatch) => {
  const response = await fetch(`/api/jobs/${job["id"]}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(editJob(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again"];
  }
};

export const deleteJobDetails = (id) => async (dispatch) => {
  const response = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
  if (response.ok) {
    const data = await response.json();
    dispatch(deleteJob(data));
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_JOBS:
      newState = { ...state };
      action.jobs.forEach((job) => (newState[job.id] = job));
      return newState;
    case EDIT_JOB:
      newState = { ...state };
      newState[action.job.id] = action.job;
      return newState;
    case DELETE_JOB:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}
