import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.relations[0].category}</td>
                    <td>{props.relations[1].brand}</td>
                    <td><a href={props.url}>{props.url}</a></td>
                </tr>
            )
    }
    
        

export default ChartRow;