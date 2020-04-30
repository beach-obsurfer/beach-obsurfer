import React from "react";
import "./SearchBar.scss";

function SearchBar({ input, inputChangeHandler, inputSubmitHandler }) {
  return (
    <div className="search-input">
      <label>Where's the beach you are looking for?
      <input
        placeholder="Search by a city or a beach name"
        value={input}
        onChange={inputChangeHandler}
      />
      </label>

      <button type="submit" onClick={inputSubmitHandler}>
        Find it
      </button>
    </div>
  );
}

export default SearchBar;
