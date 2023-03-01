import React, {Component} from 'react';
import SmallCard from './SmallCard';


class ContentRowMovies extends Component {

    constructor(){
        super();
        this.state = {
            cardProps: []
        }
    }

    componentDidMount(){
        Promise.all([fetch('//localhost:3001/api/products'), fetch('//localhost:3001/api/users')])

        .then(([products, users]) => {
            return Promise.all([products.json(), users.json()]); 
        })

        .then(([products, users])=>{

            let productsInDataBase = {
                color: "primary",
                titulo: "Productos totales", 
                valor: products.count,
                icono: "fa-light fa-box-open"
            }
            
            let CategoriesInDataBase = {
                color: "success",
                titulo: "Categorias",
                valor: products.countCategories,
                icono: "fa-regular fa-tag"
            }
            
            let usersInDataBase = {
                color: "warning",
                titulo: "Usuarios totales",
                valor: users.meta.count, 
                icono: "fas fa-user"
            }
            
            let cardProps = [productsInDataBase, CategoriesInDataBase, usersInDataBase]

            this.setState({cardProps: cardProps})
        })

        .catch(error => console.log(Error))

    }



    render () {
        return (
            <React.Fragment>
                {            
                  this.state.cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                  }) 
                }   
            </React.Fragment>
        )
    }

}



export default ContentRowMovies; 