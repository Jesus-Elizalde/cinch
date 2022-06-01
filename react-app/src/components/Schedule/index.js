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
import { getJobsDetailts } from "../../store/job";

// import Paper from "@mui/material/Paper";
// import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
// import {
//   Scheduler,
//   Toolbar,
//   TodayButton,
//   DateNavigator,
//   ViewSwitcher,
//   WeekView,
//   MonthView,
//   DayView,
//   Appointments,
//   EditRecurrenceMenu,
//   AppointmentForm,
//   ConfirmationDialog,
// } from "@devexpress/dx-react-scheduler-material-ui";

const Schedule = () => {
  const dispatch = useDispatch();

  const rawJobs = useSelector((state) => Object.values(state.jobs));

  const jobs = rawJobs?.map((job) => {
    return {
      startDate: job.from_date_time,
      endDate: job.to_date_time,
      title: job.customer_id,
    };
  });

  const [data, setData] = useState(jobs);
  console.log("🚀 ~ file: index.js ~ line 54 ~ Schedule ~ data", data);

  const [currentViewName, setCurrentViewName] = useState("work-week");
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    dispatch(getJobsDetailts());
  }, [dispatch]);

  const commitChanges = ({ added, changed, deleted }) => {
    if (added) {
      const startingAddedId =
        data.length > 0 ? data[data.length - 1].id + 1 : 0;

      setData([...data, { id: startingAddedId, ...added }]);
    }

    if (changed) {
      setData(
        data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        )
      );

      if (deleted !== undefined) {
        setData(data.filter((appointment) => appointment.id !== deleted));
      }
    }
    return { data };
  };

  const currentViewNameChange = (currentViewName) => {
    setCurrentViewName(currentViewName);
  };

  const selectedDateChange = (currentDate) => {
    setSelectedDate({ currentDate });
  };

  return (
    <Paper>
      <Scheduler data={data} height={750}>
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
          excludedDays={[0, 7]}
          startDayHour={7}
          endDayHour={19}
        />
        <MonthView />
        <DayView startDayHour={9} endDayHour={17} />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
        <ViewSwitcher />
        <ConfirmationDialog ignoreCancel />
        <AppointmentTooltip showOpenButton showDeleteButton />
        <AppointmentForm />
      </Scheduler>
    </Paper>
  );

  //   const [data, setData] = useState([
  //     {
  //       startDate: "2018-11-01T09:45",
  //       endDate: "2018-11-01T11:00",
  //       title: "Meeting",
  //     },
  //   ]);
  //   const [currentViewName, setCurrentViewName] = useState("work-week");
  //   const [selectedDate, setSelectedDate] = useState(new Date());
  //   const [title, setTitle] = useState("");
  //   const [startDate, setStartDate] = useState("");
  //   const [endDate, setEndDate] = useState("");
  //   const currentViewNameChange = (currentViewName) => {
  //     setCurrentViewName(currentViewName);
  //   };
  //   const selectedDateChange = (currentDate) => {
  //     setSelectedDate({ currentDate });
  //   };
  //   const appointmentDataChange = ({ title, endDate, startDate }) => {
  //     setTitle(title);
  //     setEndDate(endDate);
  //     setStartDate(startDate);
  //   };
  //   return (
  //     <Paper>
  //       <Scheduler data={data} height={660}>
  //         <ViewState
  //           defaultCurrentDate={selectedDate}
  //           currentViewName={currentViewName}
  //           onCurrentViewNameChange={currentViewNameChange}
  //           onCurrentDateChange={selectedDateChange}
  //         />
  //         <WeekView startDayHour={10} endDayHour={19} />
  //         <WeekView
  //           name="work-week"
  //           displayName="Work Week"
  //           excludedDays={[0, 7]}
  //           startDayHour={7}
  //           endDayHour={19}
  //         />
  //         <MonthView />
  //         <DayView />
  //         <Toolbar />
  //         <DateNavigator />
  //         <TodayButton />
  //         <ViewSwitcher />
  //         <Appointments />
  //         <AppointmentForm
  //           onAppointmentDataChange={appointmentDataChange}
  //           appointmentData={{ title, startDate, endDate }}
  //         />
  //       </Scheduler>
  //     </Paper>
  //   );
};

export default Schedule;
