import React from 'react';
 
 
function SearchBar({ input, inputChangeHandler, inputSubmitHandler }) {
  return (
      <div>
          <input
              id="input"
              placeholder={input}
              value={input}
              onChange={inputChangeHandler}
          />
          <button onClick={inputSubmitHandler}>Search Beach In Portugal</button>
      </div>
  )
}
 
export default SearchBar;
