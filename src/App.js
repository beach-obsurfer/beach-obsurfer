import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import axios from "axios";
import BeachDetail from "./components/BeachDetail";
import Home from "./components/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beaches: JSON.parse(localStorage.getItem("beaches")) || [],
      isPageLoaded: false,
    };
  }

  componentDidMount() {
      this.getBeaches();
  }

  getBeaches() {
    const apiKey = "key=xaJX84ccYJ93CJwroxGVNlxvHshmxJVV";
    const apiCountry = "country=PT";
    const apiBeaches = "category=beach";
    const apiLimit = "limit=50";
    const apiPopularity = "orderby=popularity";
    //const showRegions = 'list?show=regions';
    //const apiNearby = 'nearby={lat},{lng},{radius}';
    //const apiExclude = 'exclude={webcamid}[,{webcamid}...]';
    //const apiShowImageLocation = '?show=webcams:location,image';

    const url = `https://api.windy.com/api/webcams/v2/list/${apiCountry}/${apiLimit}/${apiBeaches}/${apiPopularity}?show=webcams:image,location,player&${apiKey}`;

    axios.get(url).then((response) => {
      this.setState({
        beaches: response.data.result.webcams,
        isPageLoaded: true,
      });
      localStorage.setItem(
        "beaches",
        JSON.stringify(response.data.result.webcams)
      );
    });
  }

  render() {
    const { beaches, isPageLoaded } = this.state;
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              apiBeaches={beaches}
              isPageLoaded={isPageLoaded}
              updateBeachHandler={(beaches) => this.setState({ beaches })}
            />
          </Route>
          <Route
            path="/beach/:beachId"
            component={(props) => (
              <BeachDetail
                {...props}
                apiBeaches={beaches}
                isPageLoaded={isPageLoaded}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
