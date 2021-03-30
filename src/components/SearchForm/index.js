import React from "react";


function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language"></label>
        <input
          onChange={props.onChange}
          value={props.value}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in the name of an employee"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchForm;
