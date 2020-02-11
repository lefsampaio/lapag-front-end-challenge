<<<<<<< HEAD
import React, { Component } from "react";
import "./components/header/style.css";
import Header from './components/header/index'

function App() {
  return (
    <div>
      <Header/>
    </div>
    );
  }
  
  export default App;
=======
import React, { useState, useEffect } from "react";
import logo from "./logo-white.png";
import "./App.css";
import { professionalMocks, servicesMocks, clientsMocks } from "./mocks/mocks";


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
      <div className="App-header">
        <h1 className="App-title">Front-End Challenge</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      {services.map(i => {
        return (
          <div key={i.id}  >
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


>>>>>>> 8da54f4d6af05057987a6a880a8f22aeeb74a62d
