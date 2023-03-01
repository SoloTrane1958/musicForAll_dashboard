// Creo un componente stateless, funcional y sin estado (internamente no implementan mucha mas logica que un return/map/if). 

// 1- Importo el modulo de react 

import React from 'react'; 

// 2- Creo una funcion nativa de JS la cual generalmente lleva el mismo nombre del archivo y la exporto. 

function Footer(){
    return (
        <React.Fragment>
			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
						<span>Copyright &copy; Dashboard 2021</span>
					</div>
				</div>
			</footer>
        </React.Fragment>
    )
}

export default Footer; 