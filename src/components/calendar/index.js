import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment';
import React, { useState } from 'react'
const myEventsList = [
    {
    }, 
]
const localizer = momentLocalizer(moment)
const MyCalendar = props => {
  const [eventsList, setEventsList] = useState(myEventsList);
  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title) {
      setEventsList([ ...eventsList, { start, end, title } ]);
    }
}
    return (
      <div>
          <Calendar
              selectable
              localizer={localizer}
              events={eventsList}
              defaultView={Views.DAY}
              startAccessor="start"
              endAccessor="end"
              onSelectEvent={event => alert(event.title)}
              onSelectSlot={handleSelect}
              style={{ height: 500 }}
          />
      </div>
    );
}
export default MyCalendar;