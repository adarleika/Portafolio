import React from 'react';
import Home from '../Components/Home/Home.js'
import { FullPage, Slide } from 'react-full-page';


const Main = () => {
    return(
        <div>
            <FullPage>
                <Slide>
                    <Home />
                </Slide>
            </FullPage>
            
        </div>

    );
};

export default Main;