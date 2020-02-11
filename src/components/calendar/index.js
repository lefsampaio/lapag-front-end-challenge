import { Calendar, momentLocalizer } from 'react-big-calendar'

import moment from 'moment'
import React from 'react'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const myEventsList =  [
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2015, 3, 0),
      end: new Date(2015, 3, 1),
    },
    {
      id: 1,
      title: 'Long Event',
      start: new Date(2015, 3, 7),
      end: new Date(2015, 3, 10),
    },
  
    {
      id: 2,
      title: 'DTS STARTS',
      start: new Date(2016, 2, 13, 0, 0, 0),
      end: new Date(2016, 2, 20, 0, 0, 0),
    },
  
    {
      id: 3,
      title: 'DTS ENDS',
      start: new Date(2016, 10, 6, 0, 0, 0),
      end: new Date(2016, 10, 13, 0, 0, 0),
    },
  
    {
      id: 4,
      title: 'Some Event',
      start: new Date(2015, 3, 9, 0, 0, 0),
      end: new Date(2015, 3, 10, 0, 0, 0),
    },
    {
      id: 5,
      title: 'Conference',
      start: new Date(2015, 3, 11),
      end: new Date(2015, 3, 13),
      desc: 'Big conference for important people',
    },
    {
      id: 6,
      title: 'Meeting',
      start: new Date(2015, 3, 12, 10, 30, 0, 0),
      end: new Date(2015, 3, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
      id: 7,
      title: 'Lunch',
      start: new Date(2015, 3, 12, 12, 0, 0, 0),
      end: new Date(2015, 3, 12, 13, 0, 0, 0),
      desc: 'Power lunch',
    },
    {
      id: 8,
      title: 'Meeting',
      start: new Date(2015, 3, 12, 14, 0, 0, 0),
      end: new Date(2015, 3, 12, 15, 0, 0, 0),
    },
    {
      id: 9,
      title: 'Happy Hour',
      start: new Date(2015, 3, 12, 17, 0, 0, 0),
      end: new Date(2015, 3, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day',
    },
    {
      id: 10,
      title: 'Dinner',
      start: new Date(2015, 3, 12, 20, 0, 0, 0),
      end: new Date(2015, 3, 12, 21, 0, 0, 0),
    },
    {
      id: 11,
      title: 'Birthday Party',
      start: new Date(2015, 3, 13, 7, 0, 0),
      end: new Date(2015, 3, 13, 10, 30, 0),
    },
    {
      id: 12,
      title: 'Late Night Event',
      start: new Date(2015, 3, 17, 19, 30, 0),
      end: new Date(2015, 3, 18, 2, 0, 0),
    },
    {
      id: 12.5,
      title: 'Late Same Night Event',
      start: new Date(2015, 3, 17, 19, 30, 0),
      end: new Date(2015, 3, 17, 23, 30, 0),
    },
    {
      id: 13,
      title: 'Multi-day Event',
      start: new Date(2015, 3, 20, 19, 30, 0),
      end: new Date(2015, 3, 22, 2, 0, 0),
    },
    {
      id: 14,
      title: 'Today',
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
      id: 15,
      title: 'Point in Time Event',
      start: new Date(),
      end: new Date(),
    },
    {
      id: 16,
      title: 'Video Record',
      start: new Date(2015, 3, 14, 15, 30, 0),
      end: new Date(2015, 3, 14, 19, 0, 0),
    },
    {
      id: 17,
      title: 'Dutch Song Producing',
      start: new Date(2015, 3, 14, 16, 30, 0),
      end: new Date(2015, 3, 14, 20, 0, 0),
    },
    {
      id: 18,
      title: 'Itaewon Halloween Meeting',
      start: new Date(2015, 3, 14, 16, 30, 0),
      end: new Date(2015, 3, 14, 17, 30, 0),
    },
    {
      id: 19,
      title: 'Online Coding Test',
      start: new Date(2015, 3, 14, 17, 30, 0),
      end: new Date(2015, 3, 14, 20, 30, 0),
    },
    {
      id: 20,
      title: 'An overlapped Event',
      start: new Date(2015, 3, 14, 17, 0, 0),
      end: new Date(2015, 3, 14, 18, 30, 0),
    },
    {
      id: 21,
      title: 'Phone Interview',
      start: new Date(2015, 3, 14, 17, 0, 0),
      end: new Date(2015, 3, 14, 18, 30, 0),
    },
    {
      id: 22,
      title: 'Cooking Class',
      start: new Date(2015, 3, 14, 17, 30, 0),
      end: new Date(2015, 3, 14, 19, 0, 0),
    },
    {
      id: 23,
      title: 'Go to the gym',
      start: new Date(2015, 3, 14, 18, 30, 0),
      end: new Date(2015, 3, 14, 20, 0, 0),
    },
  ]



const localizer = momentLocalizer(moment)

const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

export default MyCalendar;
// import React, { Component } from 'react';
// import MDBFullCalendar from 'mdbreact';
// import { addHours, addDays, addWeeks, startOfWeek } from 'date-fns';

// const today = new Date();

// class Calendario extends Component {
//   state = {
//     tasks: [
//       {
//         id: 'task1',
//         title: 'Frankfurt delegation',
//         startDate: addHours(addDays(today, 0), 8),
//         endDate: addHours(addDays(today, 2), 20),
//         color: 'danger'
//       },
//       {
//         id: 'task2',
//         title: 'Front end conference',
//         startDate: addWeeks(today, 1),
//         endDate: addDays(addWeeks(today, 1), 2),
//         color: 'success'
//       },
//       {
//         id: 'task3',
//         title: 'Feedback',
//         startDate: addHours(addDays(startOfWeek(addWeeks(today, 0)), 3), 10),
//         endDate: addHours(addDays(startOfWeek(addWeeks(today, 0)), 3), 14),
//         color: 'primary'
//       },
//       {
//         id: 'task4',
//         title: 'Daily coding challenge',
//         startDate: addDays(startOfWeek(addWeeks(today, 0)), 1),
//         endDate: addDays(startOfWeek(addWeeks(today, 0)), 8),
//         color: 'warning'
//       },
//       {
//         id: 'task5',
//         title: 'Meeting',
//         startDate: addHours(addDays(startOfWeek(addWeeks(today, 1)), 1), 10),
//         endDate: addHours(addDays(startOfWeek(addWeeks(today, 1)), 1), 14),
//         color: 'info'
//       },
//       {
//         id: 'task6',
//         title: 'Vocation',
//         startDate: addDays(startOfWeek(addWeeks(today, 2)), 1),
//         endDate: addDays(startOfWeek(addWeeks(today, 2)), 6),
//         color: 'secondary'
//       }
//     ]
//   }

//   render() {
//     return (
//       <MDBFullCalendar tasks={this.state.tasks} />
//     )
//   }
// }


// export default Calendario;

// // import React from 'react';
// // import Calendar from 'react-calendar';

// // const Calendario = (props) => {

// //     return (
// //         <div>
// //             <Calendar
// //                 onChange={props.onChange}
// //                 value={props.date}
// //             />
// //         </div>
// //     )
// // }


// // export default Calendario