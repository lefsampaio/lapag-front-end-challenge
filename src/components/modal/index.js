import React from "react";
import Popup from "reactjs-popup";
import Dropdown from '../dropdown/index'
import Button from '../button/index'
import './style.css'


const Modal = () => (
  <Popup trigger={<button className="button"> Agendar </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Agendamento </div>
        <div className="content">
          {" "}
          <p>Cliente:</p>
          <Dropdown />
          <p>Profissional:</p>
          <Dropdown />
          
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Confirmar </button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
        </div>
      </div>
    )}
  </Popup>
);

export default Modal;