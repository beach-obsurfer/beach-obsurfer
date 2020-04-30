import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
 
 
function SearchBar({ input, inputChangeHandler, inputSubmitHandler }) {
  return (
        <Container >
          <Row>
            <Col>
              <input
                  id="input"
                  placeholder="Type in city or beach"
                  value={input}
                  onChange={inputChangeHandler}
              />
            <button onClick={inputSubmitHandler}>Search</button>
           </Col>
          </Row>
        </Container>
  )
}
 
export default SearchBar;
