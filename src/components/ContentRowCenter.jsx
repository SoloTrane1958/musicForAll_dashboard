import React, {Component} from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';

class ContentRowCenter extends Component{
    constructor(){

        super()

        this.state ={

            newest: []

        }


    }

    componentDidMount(){

        fetch('//localhost:3001/api/products')

        .then(respuesta => {
            return respuesta.json()
        })

        .then(products => {
            console.log(products)
            this.setState({newest: products.newest})
        })
    }

    render (){
        return (
            <div className="row">

                {
                    this.state.newest.map((newest,index)=>{
                        return  <LastProductInDb  {...newest}  key={index} />
                    })
                }
            
              {/*<!-- Last Movie in DB -->*/}
            
              {/*<!-- End content row last movie in Data Base -->*/}

              {/*<!-- Genres in DB -->*/}
              <CategoriesInDb />

            </div>

        )
    }
}

export default ContentRowCenter;