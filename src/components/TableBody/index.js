import React from "react";
import "./style.css";

function TableBody(props) {
/*     const notPurchased = props.groceries.filter(grocery => !grocery.purchased); */

  return (
    <tbody>
      <tr>
        <th scope="row"></th>
          <td><img src={props.img}/></td>
          <td>{props.name}</td>
          <td>{props.address}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td></tr>

      {/*   <tr scope="row"><td>{props.name}</td></tr>
        <tr scope="row"><td>{props.address}</td></tr>
        <tr scope="row"><td>{props.phone}</td></tr>
        <tr scope="row"><td>{props.email}</td></tr> */}
   
    </tbody>





   /*  <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{props.title}</h2>
        <a href={props.url}>{props.url}</a>
      </li>
    </ul> 

{ <ul className="list-group">
{notPurchased.map(item => (
  <li className="list-group-item" key={item.id}>
    {item.name}
  </li>
))}
</ul>} */
  );
}

export default TableBody;