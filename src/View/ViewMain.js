import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Home from '../Components/Home/Home.jsx'
import Navbar from '../Components/Navbar/Navbar.jsx'



const Main = () => {
    return(
        <div>
            <FullPage>
                <Slide>
                    <Navbar />
                    <Home />
                </Slide>
            </FullPage>
            
        </div>

    );
};

export default Main;