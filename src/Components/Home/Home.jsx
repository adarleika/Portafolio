import React from 'react';
import Logo from '../../img/letter.svg';
import './Home.css';

const Home = () => {
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

            <button className="btn-aboutme">Sobre mi...</button>

        </div>

    );
};

export default Home;