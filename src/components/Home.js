import React from "react";
import { Link } from "react-router-dom";
import Beach from "./Beach";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../image/logotipo.svg";
import "./Home.scss";
import SearchBar from "./SearchBar";
import ModalPopup from "./ModalPopup";
import Loader from "./Loader";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBeachValue: "",
      isPopupShowing: false,
    };
  }

  handleModal = () => {
    const { isPopupShowing } = this.state;
    this.setState({ isPopupShowing: !isPopupShowing });
  };

  handleChange = (event) => {
    this.setState({ searchBeachValue: event.target.value });
  };

  handleSubmit = () => {
    let searchBeachValue = this.state.searchBeachValue;

    let beaches = this.props.apiBeaches;

    beaches = beaches.filter((beach) => {
      if (
        beach.location.city.toLowerCase() === searchBeachValue.toLowerCase() ||
        beach.title.toLowerCase().includes(searchBeachValue.toLowerCase())
      ) {
        return beach;
      }
    });
    console.log(beaches);

    if (!beaches.length) {
      this.handleModal();
    } else {
      this.props.updateBeachHandler(beaches);
    }
  };

  render() {
    const { apiBeaches, isPageLoaded } = this.props;
    return (
      <div className="homepage">
        {isPageLoaded ? (
          <Container fluid>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <header>
                  <img src={logo} alt="logo" className="logo" />
                  <h1>~ Find the best beaches in Portugal! ~</h1>
                </header>
              </Col>
            </Row>
            <Row>
              <Col
                className="text-center"
                xs={12}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 6, offset: 3 }}
              >
                <SearchBar
                  input={this.state.searchInputValue}
                  inputChangeHandler={this.handleChange}
                  inputSubmitHandler={this.handleSubmit}
                />
                <ModalPopup
                  city={this.state.searchBeachValue}
                  show={this.state.isPopupShowing}
                  handlemodal={this.handleModal}
                />
              </Col>
            </Row>
            <Row>
              {apiBeaches.map((beach) => (
                <Col xs={12} sm={6} md={6} lg={4}>
                  <Link
                    to={`/beach/${beach.id}`}
                    id={`beach-${beach.id}`}
                    className="card-wrapper"
                  >
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
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default Home;
