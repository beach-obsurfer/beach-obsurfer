import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import "./BeachDetail.scss";
import localizationicon from "../image/localization-blue.svg";
import arrowlefticon from "../image/arrow-left-blue.svg";
import surficon from "../image/surf-blue.svg";
import beachicon from "../image/beach-blue.svg";
import coffeeicon from "../image/coffee-blue.svg";
import peticon from "../image/pet-blue.svg";
import logo from "../image/logotipo.svg";
import wavesicon from "../image/waves-orange.svg";
import Loader from "./Loader";

class BeachDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      status: "",
      title: "",
      locationCity: "",
      imageCurrentPreview: "",
      playerLifetimeEmbed: "",
    };
  }

  getBeach = (id) => {
    const apiBeaches = this.props.apiBeaches;
    const beach = apiBeaches.find((apiBeach) => apiBeach.id === id);
    console.log(beach);
    this.setState({
      id: beach.id,
      status: beach.status,
      title: beach.title,
      locationCity: beach.location.city,
      imageCurrentPreview: beach.image.current.preview,
      playerLifetimeEmbed: beach.player.lifetime.embed,
    });
  };

  componentDidMount() {
    const {
      match: {
        params: { beachId },
      },
    } = this.props;
    this.getBeach(beachId);
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { beachId },
      },
    } = this.props;

    const prevBeachId = prevProps.match.params.beachId;
    if (prevBeachId !== beachId) {
      this.getBeach(beachId);
    }
  }

  render() {
    const { isPageLoaded } = this.props;
    return (
      <div className="beach-detail">
        {isPageLoaded ? (
          <Container fluid>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <header>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <Link to={`../`} className="back-btn">
                        <img src={logo} alt="logo" className="logo" />
                        <div>
                          <img
                            src={arrowlefticon}
                            alt="button to go back to the homepage"
                            className="arrow-left-icon"
                          />
                          Go back to the Homepage
                        </div>
                      </Link>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      xs={12}
                      sm={12}
                      md={{ span: 10, offset: 1 }}
                      lg={{ span: 8, offset: 2 }}
                    >
                      <h1>{this.state.title}</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      className="text-center"
                      xs={12}
                      sm={12}
                      md={12}
                      lg={{ span: 10, offset: 1 }}
                    >
                      <ul className="icons-wrapper">
                        <li>
                          <img src={localizationicon} alt="localization icon" />
                          {this.state.locationCity}
                        </li>
                        <li>
                          <img src={surficon} alt="Surf" />
                          Surf spot
                        </li>
                        <li>
                          <img src={beachicon} alt="Beach" />
                          Beach spot
                        </li>
                        <li>
                          <img src={peticon} alt="Pet" />
                          Pet Friendly spot
                        </li>
                        <li>
                          <img src={coffeeicon} alt="Coffee" />
                          Food places
                        </li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      className="text-center"
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                    >
                      <img
                        src={wavesicon}
                        alt="waves icon"
                        className="waves-icon"
                      />
                    </Col>
                  </Row>
                </header>
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 6, offset: 3 }}
              >
                <p>
                  Portugal is famed for its beautiful beaches, and along the
                  1,794 km of coastline are found some of Europe’s finest
                  beaches. These beaches are as diverse and varied as Portugal,
                  ranging from vast expanses of golden sands through to secluded
                  coves with picturesque scenery. If you are seeking a country
                  that offers beautiful beaches and a glorious climate, then
                  Portugal is the ideal holiday destination for you.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                <iframe
                  width="90%"
                  height="500px"
                  src={this.state.playerLifetimeEmbed}
                ></iframe>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Footer />
              </Col>
            </Row>
          </Container>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default BeachDetail;
