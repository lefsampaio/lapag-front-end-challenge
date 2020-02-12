import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import Modal from 'react-modal';
import Button from '../button/index'
import {servicesMocks} from '../../mocks/mocks'
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
  const [title, setTitle] = useState([])

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  const handleTitleChange = ev => {
    ev.preventDefault();
    setTitle([ev.target.value]);
  }

  const handleSelect = ({ start, end }) => {
    setIsOpen(true)
    setStart(start)
    setEnd(end)
    setTitle('')
  }

  const closeModal = () => {
    setIsOpen(false);
    if (title) {
      setEventsList([ ...eventsList, { start, end, title } ]);

    }
  }

  const serviceSelect=(e)=> {
    e.persist()
    setTitle([...title," - ", e.target.value])
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
              onSelectEvent={event => event.title.join("-")}
              onSelectSlot={handleSelect}
              style={{ height: 500 }}
          />
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}

        >
          <h2 className='title'>Agendamento</h2>
          <form>
            <p>Cliente:</p>
            <input type="text"
                onChange={handleTitleChange}/>
          </form>
          <br/>
          <p>Serviços:</p>
          <select onChange={serviceSelect}>{servicesMocks.map(i=> <option value = {i.id}>{i.name}</option>)}</select>
          <Button handleClick={closeModal} text='agendar'></Button>
        </Modal>
      </div>
    );
}

export default MyCalendar;
