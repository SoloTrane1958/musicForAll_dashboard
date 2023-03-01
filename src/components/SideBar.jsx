// Creo un componente stateless, funcional y sin estado (internamente no implementan mucha mas logica que un return/map/if). 

// 1- Importo el modulo de react 

import React, { useState } from 'react'; 
import image from '../assets/images/Logo_PC.png';

// 2- Creo una funcion nativa de JS la cual generalmente lleva el mismo nombre del archivo y la exporto. 

function SideBar(props){

	//creo el estado pagina y le doy un estado inicial
	const [pagina, setPagina] = useState('Dashboard - Music For All'); 

	//El segundo elemento del array es una funcion predefinida que cambia el contenido del primer elemento. 

	const handleClick = (linkName) => {
		setPagina(linkName);
	}; 



    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
		    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			   {/*<!-- Sidebar - Brand -->*/}
			   <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				   <div className="sidebar-brand-icon">
					   <img className="w-100" src={image} alt="Digital House"/>
				   </div>
			    </a>

			    {/*<!-- Divider -->*/}
			    <hr className="sidebar-divider my-0"/>

			    {/*</hr><!-- Nav Item - Dashboard -->*/}
			    <li className="nav-item active">
				    <a className="nav-link" href="/">
					  <i className="fas fa-fw fa-tachometer-alt"></i>
					  <span>{pagina}</span>
                    </a>
			    </li>

			    {/*<!-- Divider -->*/}
			    <hr className="sidebar-divider"/>

			    {/*<!-- Heading -->*/}
			    <div className="sidebar-heading">Actions</div>

				{/*-Como estoy iterando sobre la etiqueta links y tiene 4 elementos realiza 4 impresiones. 
				
				-En cada lista iterada dibamicamente los hijos deben tener una propiedad unica llamada key. Pongo una prop mas llamada key a la cual le paso un valor unico. El key va adentro del li ya que al iterar ese es el elemento que se repite. Se recomienda que sea un valor unico del elemento. El id por lo general. 
				
				
				-Si los elementos de la API no vienen primero tengo que validar que links exista. Cuando accedo a un atributo o propiedad de un objeto ese atributo puede ser undefines intentar acceder a la propiedad de un objeto no da error, da undefined. si existe props.links hace lo que esta a la derecha*/
				}

				{props.links && props.links.map((link, idx) => 
				   <li key={link.name + idx}class="nav-item">
				        <a className="nav-link collapsed" href={link.path}>
						    <i className={link.icono}></i>
				            <span onClick={() => handleClick(link.name)}>{link.name}</span>
				        </a>
			        </li> 
				)}

				{/* el onclick recibe una funcion anonima/flecha. Cuando ese evento de dispare va a ejecutar esa funcion flecha va a ejecutar nuestro evento personalizado que se llama on redir. */}

				{/* recibe una props que es un array y por cada elemento del array estamos generando una etiqueta li. Y en el componente principall app convocamos el sidebar y le pasamos el arreglo de links a traves de props*/ }

			    {/*<!-- Divider -->*/}
			    <hr className="sidebar-divider d-none d-md-block"/>
		    </ul>
		    {/*<!-- End of Sidebar -->*/}
       
           
        </React.Fragment>
    )
}

export default SideBar; 