import React from 'react';
import './About.css';
import foto from '../../img/descarga.png';

const Proyects = () => {
    return (

        <div className="containerAbout">

            <div className="containerSobremi">
                <div className="titles">
                <img className="img-foto" src={foto} alt="foto" />
                    <p className="p-descripcion">Ingeniera en informática con experiencia <br/>
                    en  desarrollo de software front-end. He <br/>
                    colaborado en proyectos de diferente  <br/>
                    índole, pertenecientes al Bootcamp de <br/>
                    Laboratoria, pudiendo así reforzar tanto <br/>
                    mis habilidades técnicas como blandas. <br/>
                    También he tenido la fortuna de <br/>
                    participar en equipos multidisciplinarios, <br/>
                    lo que me ha permitido fortalecer la <br/>
                    comunicación efectiva, la organización y <br/>
                    el trabajo en equipo. </p>

                </div>

            </div>

        </div>



    )
}

export default Proyects;