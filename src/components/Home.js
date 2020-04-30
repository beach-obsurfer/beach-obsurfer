import React from "react";
import { Link } from "react-router-dom";
import Beach from "./Beach";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../image/logotipo.svg";
import "./Home.scss";

const Home = ({ apiBeaches }) => {
  return (
    <div className="homepage">
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <header>
              <img src={logo} alt="logo" className="logo" />
              <h1>~ Find best beaches in Portugal! ~</h1>
            </header>
          </Col>
        </Row>
        <Row>
          {apiBeaches.map((beach) => (
            <Col xs={12} sm={6} md={6} lg={4}>
              <Link to={`/beach/${beach.id}`} id={`beach-${beach.id}`} className="card-wrapper">
                <Beach
                  key={beach.id}
                  title={beach.title}
                  image={beach.image.current.preview}
                  player={beach.player.lifetime.embed}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
