
import React, { useState, useEffect } from "react";
import "./components/header/style.css";
import Header from './components/header/index'
import Card from './components/card/index'
import Button from './components/button/index'
import { professionalMocks, servicesMocks, clientsMocks } from "./mocks/mocks";
import MyCalendar from "./components/calendar";
// import Card from "./components/card";


export default function App() {

  const [services, setServices] = useState([]);
  const [professional, setProfessional] = useState([]);
  const [client, setClient] = useState([]);


  useEffect(() => {
    const getServices = servicesMocks.map((doc) => ({
      _id: doc._id,
      ...doc
    }))
    setServices(getServices);

    const getProfessionals = professionalMocks.map((doc) => ({
      _id: doc._id,
      ...doc
    }))
    setProfessional(getProfessionals);

    const getClient = clientsMocks.map((doc) => ({
      _id: doc._id,
      ...doc
    }))
    setClient(getClient);

  }, []);

  return (
    <div className="App">
      <Header/>
      {services.map(i => {
        return (
          <div key={i.id}  >
          <Button text='oi' type='submit'/>
          <MyCalendar />
            {services.map(i => <span key={i._id}> {i.name} </span>)}
            <p name={i.name} duration={i.duration} />
            <div>
              {professional.map(i => <span key={i._id}> {i.name} </span>)}
              <p name={i.name} />
              {client.map(i => <span key={i._id}> {i.name} </span>)}
              <p name={i.name} /></div>
          </div>)
      })
      }
    </div>
  );
}



