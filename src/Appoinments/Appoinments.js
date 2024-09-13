import React from "react";
import "./Appoinments.css";

const Appointments = () => {
  const schedule = [
    {
      name: "John Doe",
      age: 29,
      sex: "Male",
      time: "10:30 AM",
      type: "video call",
      status: "upcoming",
      action: "view details",
    },
    {
      name: "Jane Smith",
      age: 32,
      sex: "Female",
      time: "2:00 PM",
      type: "audio call",
      status: "not scheduled",
      action: "view details",
    },
    {
      name: "Alice Johnson",
      age: 24,
      sex: "Female",
      time: "3:15 PM",
      type: "live",
      status: "finished",
      action: "view details",
    },
    {
      name: "Bob Williams",
      age: 45,
      sex: "Male",
      time: "11:45 AM",
      type: "video call",
      status: "upcoming",
      action: "view details",
    },
    {
      name: "Emily Brown",
      age: 37,
      sex: "Female",
      time: "1:00 PM",
      type: "audio call",
      status: "upcoming",
      action: "view details",
    },
    {
      name: "David Lee",
      age: 52,
      sex: "Male",
      time: "9:00 AM",
      type: "live",
      status: "finished",
      action: "view details",
    },
    {
      name: "Sophia Davis",
      age: 28,
      sex: "Female",
      time: "4:30 PM",
      type: "audio call",
      status: "not scheduled",
      action: "view details",
    },
    {
      name: "Michael Clark",
      age: 33,
      sex: "Male",
      time: "10:00 AM",
      type: "video call",
      status: "upcoming",
      action: "view details",
    },
    {
      name: "Olivia Martinez",
      age: 41,
      sex: "Female",
      time: "2:30 PM",
      type: "live",
      status: "finished",
      action: "view details",
    },
    {
      name: "James Rodriguez",
      age: 36,
      sex: "Male",
      time: "5:15 PM",
      type: "video call",
      status: "not scheduled",
      action: "view details",
    },
  ];

  return (
    <div className="whole">
      <div className="appoinments">
        <div className="upcoming_title">Upcoming Appointments</div>
        <div className="up_title">
          <div>PATIENTS</div>
          <div>TIME</div>
          <div>TYPE</div>
          <div>STATUS</div>
          <div>ACTION</div>
        </div>

        {schedule.map((appointment, index) => (
          <div className="details" key={index}>
            <div>
              <div className="view_name">{appointment.name}</div>
              <div className="view_age">
                {appointment.age} years, {appointment.sex}
              </div>
            </div>
            <div className="view_time">{appointment.time}</div>
            <div className="view_video_call">{appointment.type}</div>
            <div className="view_upcomming">{appointment.status}</div>
            <div className="view_details">{appointment.action}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
