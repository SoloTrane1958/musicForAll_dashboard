// Creo un componente stateless, funcional y sin estado (internamente no implementan mucha mas logica que un return/map/if). 

// 1- Importo el modulo de react 

import React from 'react'; 
import ContentRowMovies from './ContentRowMovies';
import LastProductInDb from './LastProductInDb'; 
import CategoriesInDb from './CategoriesInDb'; 
import Chart from './Chart';

// 2- Creo una funcion nativa de JS la cual generalmente lleva el mismo nombre del archivo y la exporto. 

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					<div className='row'>
						{/*<!-- Content Row Movies-->*/}
						<ContentRowMovies/>
					</div>
					<div className="row">
						{/*<!-- Content Row Last Movie in Data Base -->*/}
					    <LastProductInDb/>
						<CategoriesInDb/>
					</div>

				    <Chart />

				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}

export default ContentRowTop; 