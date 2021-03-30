import React, { Component} from 'react';
import TableBody from "../TableBody";

function Table(props){

     return (
        <table className="table">
          <thead>
            <tr onClick={props.onClick}>
                <th scope="col" className="image tableHead">Thumbnail</th> 
                <th scope="col" className="tableHead">Name</th>
                <th scope="col" className="tableHead">Address  </th>
                <th scope="col" className="tableHead">Phone Number  </th>
                <th scope="col" className="tableHead">Email  </th>
            </tr>
        </thead>
        </table> 
        
      )
    } 

export default Table;
