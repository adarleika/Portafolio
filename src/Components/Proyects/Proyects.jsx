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
                <div className="titles">
                    <p className="p-card">CARD VALIDATION</p>
                    <p className="p-tecnology">HTML5, CSS3, JAVASCRIPT</p>
                    <img className="img-tdc" src={TDC} alt="TDC" />
                </div>
                <div className="verTDC">
                    <button className="btn-ver">
                        Ver Proyecto
                    </button>

                </div>

            </div>

            <div className="containerLovers">
                <div className="titles">
                    <p className="p-data">DATA LOVERS</p>
                    <p className="p-tecnology">HTML5, CSS3, JAVASCRIPT</p>
                    <img className="img-tdc" src={Lovers} alt="Lovers" />
                </div>
                <div className="verDATA">
                    <button className="btn-ver">
                        Ver Proyecto
                    </button>

                </div>
            </div>

            <div className="containerSocial">
                <div className="titles">
                    <p className="p-social">SOCIAL NETWORK</p>
                    <p className="p-tecnology-social">HTML5, CSS3, JAVASCRIPT</p>
                    <img className="img-tdc" src={Social} alt="Social" />
                </div>
                <div className="verSOCIAL">
                    <button className="btn-ver">
                        Ver Proyecto
                    </button>

                </div>
            </div>


        </div>



    )
}

export default Proyects;