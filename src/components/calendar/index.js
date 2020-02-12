import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import Modal from 'react-modal';
import Button from '../button/index'
import Dropdown from '../dropdown/index'
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
  const handleSelect = ({ start, end }) => {
      const title = setIsOpen(true)
      if (title) {
        setEventsList([ ...eventsList, { start, end, title } ]);
      }
  }

  function closeModal( { arrName} ){
    setIsOpen(false);
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
        className='modal'>

          <h2 className='title'>Hello</h2>
    <select className='select'><option> {arrName}</option></select>
          <Button handleClick={closeModal}>close</Button>
          <div>Agendamento</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
}

export default MyCalendar;
