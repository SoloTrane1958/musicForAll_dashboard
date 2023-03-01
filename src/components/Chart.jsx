import React, {Component} from 'react';
import ChartRow from './ChartRow';


class Chart extends Component {

    constructor(){
        super();
        this.state = {
            tableRowsData: []
        }

    }

    componentDidMount(){
        fetch('//localhost:3001/api/products')

        .then(respuesta => {
            return respuesta.json()
        })

        .then(products => {

            this.setState({tableRowsData: products.products})
            
        })
    }
    render (){
        return(
            <div className="card shadow mb-4">
               <div className="card-body">
                   <div className="table-responsive">
                       <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                   <th>Nombre</th>
                                   <th>Descripción</th>
                                   <th>Categoria</th>
                                   <th>Marca</th>
                                   <th>URL</th>
                                </tr>
                            </thead>
                            <tbody>

                               {    
                                    this.state.tableRowsData.map( ( row , index) => {

                                        return <ChartRow { ...row} key= {index} />
                                    })
                                }

                            </tbody>
                       </table>
                   </div>
               </div>
           </div>

        ); 
    }

}

export default Chart;