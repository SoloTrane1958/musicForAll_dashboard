import React, {Component} from 'react';
import Category  from './Category';

//los componentes con estado dejan de ser funciones nativas de javascript y pasan a ser clases. Para que sea una clase y ni una funcion hago lo siguiente: 

class CategoriesInDb extends Component {
    //para definir los elementos visuales a renderizar se utiliza el elemento render 
    constructor(){
        //super le va a pasar al componente toda la logica que ya trae el component de react
        super()
        //el estado en si es donde asigno el objeto literal que va a recibir todas las propiedades y sus correspondientes valores que le quiera asignar
        this.state = {
            categoriesList: []
        }
    }

    componentDidMount(){
        fetch('//localhost:3001/api/products')

        .then(respuesta => {
            return respuesta.json()
        })

        .then(categories =>{
            this.setState({categoriesList: categories.categories})
        })

        .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800"> Productos por Categoria</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                { 
                                    this.state.categoriesList.map((category,index)=>{
                                        return  <Category  {...category}  key={index} />
                                    })
                                } 
                            </div>
                        </div>
                    </div>
                </div>
           
            </React.Fragment>

        )
    }

}


export default CategoriesInDb;