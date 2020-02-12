import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import Modal from 'react-modal';
import moment from 'moment';
import React, { useState } from 'react'
const myEventsList = [
    {
    }, 
]
const localizer = momentLocalizer(moment)
const MyCalendar = props => {
  const [eventsList, setEventsList] = useState(myEventsList);
  const [modalIsOpen,setIsOpen] = useState(false);
  const [start, setStart] = useState()
  const [end, setEnd] = useState()
  const [title, setTitle] = useState()

  const handleTitleChange = ev => {
    ev.preventDefault();
    setTitle(ev.target.value);
  }

  const handleSelect = ({ start, end }) => {
    setIsOpen(true)
    setStart(start)
    setEnd(end)
  }

  const closeModal = () => {
    setIsOpen(false);
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
              min={new Date(2020, 1, 0, 8, 0, 0)}
              max={new Date(2020, 1, 0, 20, 0, 0)}
              startAccessor="start"
              endAccessor="end"
              onSelectEvent={event => event.title}
              onSelectSlot={handleSelect}
              style={{ height: 500 }}
          />
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"

        >

          <h2 >Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input type="text"
                onChange={handleTitleChange}/>
          </form>
        </Modal>
      </div>
    );
}

export default MyCalendar;
