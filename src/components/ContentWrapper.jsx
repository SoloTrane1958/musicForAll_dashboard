// 1- Importo el modulo de react 

import React from 'react'; 
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';

// 2- Creo una funcion nativa de JS la cual generalmente lleva el mismo nombre del archivo y la exporto. 

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper-->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}

export default ContentWrapper; 