import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default App;
