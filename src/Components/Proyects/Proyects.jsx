import React from 'react';
import './Proyects.css';
import TDC from '../../img/tdc.svg';
import Lovers from '../../img/data-lovers.svg';
import Social from '../../img/social-network.svg';

const Proyects = () => {
    return (

        <div className="containerProyects">
            <div className="proyects">

                <p className="p-proyects">Proyectos</p>

            </div>

            <div className="containerTDC">
                <img className="img-tdc" src={TDC} alt="TDC" />
            </div>
            <div className="containerLovers">
                <img className="img-tdc" src={Lovers} alt="Lovers" />
            </div>
            <div className="containerSocial">
                <img className="img-tdc" src={Social} alt="Social" />
            </div>

        </div>



    )
}

export default Proyects;