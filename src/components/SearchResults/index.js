import React from "react";
import "./style.css";

function SearchResults(props) {
/*     const notPurchased = props.groceries.filter(grocery => !grocery.purchased); */

  return (
    <tbody>
        <tr>
            <td>image</td>
            <td>name</td>
            <td>address</td>
            <td>phone</td>
            <td>email</td>
        </tr>
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

export default SearchResults;