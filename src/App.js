import React, { useState, useEffect } from "react";
import "./components/header/style.css";
import Header from './components/header/index'
import MyCalendar from "./components/calendar";
import { professionalMocks, clientsMocks } from "./mocks/mocks";


export default function App() {
  const [professional, setProfessional] = useState([]);
  const [client, setClient] = useState([]);

  useEffect(() => {

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
      <Header />
      {professional.map(i =>
        <div key={i._id}>
          <p className='professional-name'>{i.nickname}</p>
          <MyCalendar />
        </div>)}
    </div>
  );
}

