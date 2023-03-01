// Creo un componente stateless, funcional y sin estado (internamente no implementan mucha mas logica que un return/map/if). 

// 1- Importo el modulo de react 

import React from 'react'; 
import foto from '../assets/images/jordan-walke.png';

// 2- Creo una funcion nativa de JS la cual generalmente lleva el mismo nombre del archivo y la exporto. 

function TopBar(){
    return (
        <React.Fragment>
            	{/*<!-- Topbar -->*/}
				<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					{/*<!-- Sidebar Toggle (Topbar) -->*/}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav ml-auto">

						{/*<!-- Nav Item - Alerts -->*/}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i className="fas fa-bell fa-fw"></i>
								{/*<!-- Counter - Alerts -->*/}
								<span className="badge badge-danger badge-counter">3+</span>
							</a>
						</li>

						{/*<!-- Nav Item - Messages -->*/}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i className="fas fa-envelope fa-fw"></i>
								{/*<!-- Counter - Messages -->*/}
								<span className="badge badge-danger badge-counter">7</span>
							</a>
						</li>

						<div class="topbar-divider d-none d-sm-block"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li class="nav-item dropdown no-arrow">
							<a class="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span class="mr-2 d-none d-lg-inline text-gray-600 small">Jordan Walke</span>
								<img class="img-profile rounded-circle" src={foto} alt="Jordan Walke - Creador de React" width="60"/>
							</a>
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}
        </React.Fragment>
    )
}

export default TopBar; 