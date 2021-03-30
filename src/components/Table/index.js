import React, { Component} from 'react';
import TableBody from "../TableBody";

function Table(props){

     
      return (
<table className="table">
          <thead>
            <tr>
                <th scope="col" className="image tableHead">Thumbnail</th> 
                <th scope="col" className="tableHead">Name</th>
                <th scope="col" className="tableHead">Address  </th>
                <th scope="col" className="tableHead">Phone Number  </th>
                <th scope="col" className="tableHead">Email  </th>
            </tr>
        </thead>
        </table> 
   /*       <tbody>
        <tr scope="row">
          <td><img src={props.img}/></td>
          <td>{props.name}</td>
          <td>{props.address}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td></tr>

      {   <tr scope="row"><td>{props.name}</td></tr>
        <tr scope="row"><td>{props.address}</td></tr>
        <tr scope="row"><td>{props.phone}</td></tr>
        <tr scope="row"><td>{props.email}</td></tr> }
   
    </tbody>
         */
      )
    } 

export default Table;
