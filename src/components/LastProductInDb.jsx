import React, {useEffect, useEffects, useState} from 'react';

function LastProductInDb(props){

	
    return (
        <React.Fragment>
            {/*<!-- Last Product in DB -->*/}
            <div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto ingresado</h5>
					</div>
					<div className="card-body">
						<div className="text-center">
							{console.log(props.image)}
							<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src= {props.image} alt=" Star Wars - Mandalorian "/>
						</div>
						<p>{props.name}</p>
						
						<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
					</div>
				</div>
			</div>
            
        </React.Fragment>

    )

}

export default LastProductInDb; 