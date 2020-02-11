import React, { useState, useEffect } from "react";
import logo from "./logo-white.png";
import "./App.css";
import { professionalMocks, servicesMocks, clientsMocks } from "./mocks/mocks";


export default function App() {
  const [services, setServices] = useState([]);
  const [professional, setProfessional] = useState([]);


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

  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="App-title">Front-End Challenge</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      {services.map(i => {
        return (
          <div>
            {services.map(i => <span key={i._id}> {i.name} </span>)}
            <p key={i._id} name={i.name} />

            {professional.map(i => <span key={i._id}> {i.name} </span>)}
            <p key={i._id} name={i.name} />
          </div>)
      })
      }
    </div>
  );
}


