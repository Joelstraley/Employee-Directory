import React, { Component} from 'react';
import TableBody from "../TableBody";

function Table(props){

     
      return (
        <table className="table">
          <thead>
            <tr>
                <th scope="col" className="image">Thumbnail</th> 
                <th scope="col" className="tableHead">Name</th>
                <th scope="col" className="tableHead">Address  </th>
                <th scope="col" className="tableHead">Phone Number  </th>
                <th scope="col" className="tableHead">Email  </th>
            </tr>
        </thead>
        <TableBody />
        </table>
      )
    }

export default Table;
