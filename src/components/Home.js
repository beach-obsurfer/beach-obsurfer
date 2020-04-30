import React from "react";
import { Link } from "react-router-dom";
import Beach from "./Beach";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../image/logotipo.svg";
import "./Home.scss";
import SearchBar from './SearchBar';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBeachValue: '',
            beaches: ''
        }
    }

    handleChange = (event) => {
        this.setState({ searchBeachValue: event.target.value })
        }
     
    handleSubmit = () => {
        const apiKey = 'key=xaJX84ccYJ93CJwroxGVNlxvHshmxJVV';
        const apiCountry = 'country=PT';
        const apiBeaches = 'category=beach';
        const apiLimit = 'limit=50';
        const apiPopularity = 'orderby=popularity';
        const url = `https://api.windy.com/api/webcams/v2/list/${apiCountry}/${apiLimit}/${apiBeaches}/${apiPopularity}?show=webcams:image,location,player&${apiKey}`;

        let searchBeachValue = this.state.searchBeachValue;

        axios.get(url).then((response) => {
            let beaches = response.data.result.webcams;
            beaches = beaches.filter(beach => {
               if (beach.location.city.toLowerCase() === searchBeachValue.toLowerCase()) {
                    return beach
               } else if (
                  beach.title.toLowerCase().includes(searchBeachValue.toLowerCase()) 
               ){
                return beach
               } 
            })
            this.props.updateBeachHandler(beaches);
            })
        }
    


    render() {
        const { apiBeaches } = this.props;
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
    <Row><Col>
      <SearchBar
            input={this.state.searchInputValue}
            inputChangeHandler={this.handleChange}
            inputSubmitHandler={this.handleSubmit} /></Col></Row>
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
    <div>
      

      
  
    
  );
}
};

export default Home;
