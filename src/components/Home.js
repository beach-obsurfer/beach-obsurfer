import React from "react";
import { Link } from "react-router-dom";
import Beach from "./Beach";
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
            });
            event.preventDefault()
        }
    


    render() {
        const { apiBeaches } = this.props;
  return (
    <div>
        <SearchBar
            input={this.state.searchInputValue}
            inputChangeHandler={this.handleChange}
            inputSubmitHandler={this.handleSubmit} />

        {apiBeaches.map((beach) => (
        <Link to={`/beach/${beach.id}`}>
          <Beach
            key={beach.id}
            title={beach.title}
            image={beach.image.current.preview}
            player={beach.player.lifetime.embed}
          />
        </Link>
      ))}
    </div>
  );
}
};

export default Home;
