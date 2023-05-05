import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./styling/calendarStyle.css";

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);

  const handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };

  const handleClick = (arg) => {
    console.log(arg);
    console.log(arg.event._def.title);
    console.log(arg.event.extendedProps.booker);
    console.log();
  };

  useEffect(() => {
    // Fetch events from server or any other data source
    const eventsData = [
      {
        id: 1,
        booker: "Omar Letaief",
        title: "Event 1",
        start: "2023-05-10T10:00:00",
        end: "2023-05-10T12:00:00",
      },
      {
        id: 2,
        title: "Event 2",
        start: "2023-05-12T14:00:00",
        end: "2023-05-12T16:00:00",
      },
      {
        id: 3,
        title: "Event 3",
        start: "2023-05-15T09:00:00",
        end: "2023-05-15T11:00:00",
      },
    ];

    setEvents(eventsData);
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      dateClick={handleDateClick}
      eventClick={handleClick}
    />
  );
};

export default CalendarComponent;
