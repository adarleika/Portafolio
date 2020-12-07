import React, { useState } from 'react';
import Logo from '../../img/letter.svg';
import Modal from 'react-bootstrap/Modal';
import About from '../About/About';
import './Home.css';


const Home = () => {
    const [ aboutmeShow, setAboutmeShow ] = useState(false);

    return (

        <div className="containerMain">
            <div className="containerLogo">
                <img className="img-nav-logo" src={Logo} alt="Portafolio" />
            </div>

            <div className="hello-world">

                <p className="p-1-style">Hello World</p>

                <p className="p-2-style">Soy Adarleika, <br />
                Front - End Developer</p>
            </div>

            <button className="btn-aboutme" onClick={() => setAboutmeShow(true)}>
            Sobre mi...
            </button>

            <Modal size="lg" show={aboutmeShow} onHide={() => setAboutmeShow(false)}>
			<Modal.Header className="modal-header-banco" closeButton />
				<Modal.Body className="probando">
					<About />
				</Modal.Body>
				<Modal.Footer className="modal-footer-banco" />
			</Modal>

        </div>

        

    );
};


export default Home;