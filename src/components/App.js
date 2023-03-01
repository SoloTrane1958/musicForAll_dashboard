import React from 'react';

//Nuestro componente app en vez de tener texto va tener componentes. Voy a importar mi componente SideBar: 

import SideBar from '../components/SideBar';
import ContentWrapper from '../components/ContentWrapper';

const links = [
  {name:"Inicio", path: "/", icono: "fas fa-fw fa-folder"},
  {name:"Crear producto", path: "/products/formCreate", icono: "fas fa-fw fa-folder"},
  {name:"Editar producto", path: "/products", icono: "fas fa-fw fa-folder"},
  {name:"Eliminar producto", path: "/products", icono: "fas fa-fw fa-folder"}
]


function App() {
  const handleClickLink = (parametro) => {
    //aca escuchamos la funcion que estamos ejecutando en el navbar
    alert(parametro); 
    /*alert("Click en " + {link.name}) */
  }; 
  
  const handleClickGitHub = () => {
    fetch('https://api.github.com/users/SoloTrane1958/repos')
    .then((response) => response.json())
    .then((datosRepositorio) => console.log(datosRepositorio))

    // hay que listar cada repositorio con su respectivo nombre. 
    
  }
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar links={links} onRedir={handleClickLink}/>
        <ContentWrapper />
      </div>

      {/* traer datos repositorio github. Armo una funcion que se llame handleClickGit que conseolloguee los datos  */}

      <div>
        <button onClick={handleClickGitHub}> GitHub
        </button>
        <h3>Repo</h3>
      </div>

    </React.Fragment>
  );
}

//Export default y el nombre del componente es parte de la estructura basica.

export default App;
