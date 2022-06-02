import React, { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Toolbar,
  DateNavigator,
  DayView,
  WeekView,
  TodayButton,
  MonthView,
  Appointments,
  AppointmentForm,
  ViewSwitcher,
  AppointmentTooltip,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteJobDetails,
  editJobDetails,
  getJobsDetailts,
} from "../../store/job";
import { getBusinessesDetails } from "../../store/business";

const Schedule = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const rawJobs = useSelector((state) => Object.values(state.jobs));
  const business = useSelector((state) => state.businesses[user?.business_id]);
  const filteredArr = [];
  business?.customers.forEach((customer) => filteredArr.push(...customer.jobs));

  const jobs = filteredArr?.map((job) => {
    return {
      startDate: new Date(job.from_date_time),
      endDate: new Date(job.to_date_time),
      title: `${job.customer_name}`,
      id: job.id,
      notes: job.message,
      customer_id: job.customer_id,
      job_ids: job.services.map((service) => service.id).join("-"),
    };
  });

  const [currentViewName, setCurrentViewName] = useState("work-week");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [render, setRedner] = useState(false);

  useEffect(() => {
    dispatch(getBusinessesDetails());
    dispatch(getJobsDetailts());
  }, [dispatch, render]);

  const commitChanges = async ({ added, changed, deleted }) => {
    if (added) {
      // console.log("WNP");
      return;
    }

    if (changed) {
      // const jobId = +Object.keys(changed)[0];
      // const editedJob = {
      //   ...jobs?.filter((appointment) => +appointment.id === jobId)[0],
      //   ...changed[jobId],
      // };
      // dispatch(
      //   editJobDetails({
      //     id: editedJob.id,
      //     from_date_time: editedJob.startDate,
      //     to_date_time: editedJob.endDate,
      //     message: editedJob.notes,
      //     customer_id: "1",
      //     job_ids: editedJob.job_ids,
      //   })
      // );
      return;
    }

    if (deleted !== undefined) {
      //   setData(data.filter((appointment) => appointment.id !== deleted));
      const data = await dispatch(deleteJobDetails(deleted));
      setRedner(true);
      setRedner(false);
    }
    return { filteredArr };
  };

  const currentViewNameChange = (currentViewName) => {
    setCurrentViewName(currentViewName);
  };

  const selectedDateChange = (currentDate) => {
    setSelectedDate({ currentDate });
  };

  return (
    <Paper>
      <Scheduler data={jobs} height={750}>
        <ViewState
          defaultCurrentDate={selectedDate}
          currentViewName={currentViewName}
          onCurrentViewNameChange={currentViewNameChange}
          onCurrentDateChange={selectedDateChange}
        />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />
        <WeekView startDayHour={10} endDayHour={19} />
        <WeekView
          name="work-week"
          displayName="Work Week"
          // excludedDays={[0, 7]}
          // startDayHour={7}
          // endDayHour={19}
        />
        <DayView />
        <MonthView />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
        <ViewSwitcher />
        <ConfirmationDialog ignoreCancel />
        <AppointmentTooltip showDeleteButton />
        {/* <AppointmentForm /> */}
      </Scheduler>
    </Paper>
  );
};

export default Schedule;
