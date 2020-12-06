import React from 'react';
import CSS from '../../img/css3.svg';
import GIT from '../../img/git.svg';
import GITHUB from '../../img/github.svg';
import HTML from '../../img/html5.svg';
import JS from '../../img/js.svg';
import SERVERS from '../../img/servers.svg';
import REACT from '../../img/react.svg';
import BOOTSTRAP from '../../img/bootstrap.svg';
import SCRUM from '../../img/scrum.svg';

import './Skills.css';


const Skills = () => {
    return (
        <div className="containerSkills">
            <div className="skills">

                <p className="p-skills">Habilidades</p>

            </div>

            <div className="skills2">
                <p className="p-2-skills">Las siguientes tecnologias son algunas <br />
                de  las habilidades tecnicas que manejo <br />
                en el ambito de desarrollo.</p>
            </div>

            <div className="iconImg">
                <ul>
                    <li>
                        <img className="img-css" src={CSS} alt="CSS" />
                        <img className="img-git" src={GIT} alt="GIT" />
                        <img className="img-github" src={GITHUB} alt="GITHUB" />
                        <img className="img-html" src={HTML} alt="HTML" />
                        <img className="img-js" src={JS} alt="JS" />
                        <img className="img-servers" src={SERVERS} alt="SERVERS" />
                        <img className="img-react" src={REACT} alt="REACT" />
                        <img className="img-bootstrap" src={BOOTSTRAP} alt="BOOTSTRAP" />
                        <img className="img-scrum" src={SCRUM} alt="SCRUM" />
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Skills;