import React from 'react';
import GITHUB from '../../img/github.svg';
import LINKEDIN from '../../img/linkedin.svg';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="containerContacts">
            <div className="contacts">

                <p className="p-contacts">Contactame</p>

            </div>

            <div className="formContact">
                <ul>
                    <input className="nameContact" placeholder="Nombre Completo"></input>
                    <input className="emailContact" placeholder="Correo Electronico"></input>
                    <textarea className="msjContact" placeholder="Mensaje"></textarea>
                </ul>
            </div>
            <div className="enviar">
                <button className="btn-enviar">
                    Enviar
                </button>

            </div>

            <div className="iconImg">
                <ul>
                    <li>
                        <img className="img-github2" src={GITHUB} alt="GITHUB" />
                        <img className="img-linkedin" src={LINKEDIN} alt="LINKEDIN" />
                    </li>
                </ul>

            </div>
            <div className="containerFooter">
                Copyright © 2020 | Adarleika Silva
            </div>
        </div>
    )
}

export default Contacts;