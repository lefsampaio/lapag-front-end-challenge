
import React, { useState, useEffect } from "react";
import "./components/header/style.css";
import Header from './components/header/index'
// import Card from './components/card/index'
// import Button from './components/button/index'
import { professionalMocks, servicesMocks, clientsMocks } from "./mocks/mocks";
import MyCalendar from "./components/calendar";
import Dropdown from './components/dropdown/index'
import Modal from './components/modal/index'
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


  const pegarcpf = () => {
    const arr = [];
    services.map(elem => {
      elem.available_professionals.filter(prof => {   
       prof.cpf === professional.document_number
        arr.push(prof.cpf, professional.document_number)
       
      
      return  console.log(arr)
     })

    })
  }
  pegarcpf();
  return (
    <div className="App">
      <Header />
      <div className="App-header">
      </div>
      <MyCalendar />

      {professional.map(i => <span key={i._id}> {i.nickname} <MyCalendar /></span>)}
      
      {/* {services.map(i => {
        return (
          <div key={i.id}  >

            {services.map(i => <span key={i._id}> {i.name} </span>)}
            <p name={i.name} duration={i.duration} />
            <div>
              
              <p name={i.name} />
              {client.map(i => <span key={i._id}> {i.name} </span>)}
              <p name={i.name} /></div>
          </div>)
      })
      } */}
    </div>
  );
}



