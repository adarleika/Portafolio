import React from 'react';
import './Home.css';

const Home = () => {
    return(
        <div className="containerMain">
            <div className="hello-world">

            <p className="p-1-style">Hello World</p>

            <p className="p-2-style">Soy Adarleika, <br/>
            Front - End Developer</p>
            </div>

            <button className="btn-aboutme">Sobre mi...</button>
        
        </div>

    );
};

export default Home;