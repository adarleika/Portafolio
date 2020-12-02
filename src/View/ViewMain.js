import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Navbar from '../Components/Navbar/Navbar.jsx'
import Home from '../Components/Home/Home.jsx'
import Proyects from '../Components/Proyects/Proyects.jsx';
import Skills from '../Components/Skills/Skills.jsx';
import Contacts from '../Components/Contact/Contacts.jsx';


const Main = () => {
    return(
        <div>
            <FullPage>
                    <Navbar />
                <Slide>
                    <Home />
                </Slide>
                <Slide>
                    <Proyects />
                </Slide>
                <Slide>
                    <Skills />
                </Slide>
                <Slide>
                    <Contacts />
                </Slide>
            </FullPage>
        </div>

    );
};

export default Main;