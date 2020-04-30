import React from 'react';
import { Link } from 'react-router-dom';
import surficon from '../image/surf-black.svg';
import beachicon from '../image/beach.svg';
import coffeeicon from '../image/coffee.svg';
import peticon from '../image/pet.svg';
import Footer from './Footer';

class BeachDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      status: '',
      title: '',
      locationCity: '',
      imageCurrentPreview: '',
      playerLifetimeEmbed: '',
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
    return (
      <div>
        <Link to={`../`}>Homepage</Link>
        <h1>{this.state.title}</h1>
        <h2>{this.state.locationCity}</h2>
        <p>
          Portugal is famed for its beautiful beaches, and along the 1,794 km of
          coastline are found some of Europe’s finest beaches. These beaches are
          as diverse and varied as Portugal, ranging from vast expanses of
          golden sands through to secluded coves with picturesque scenery. If
          you are seeking a country that offers beautiful beaches and a glorious
          climate, then Portugal is the ideal holiday destination for you.
        </p>
        <div className="icons">
          <div>
            <img src={surficon} alt="Surf" />
            Surf spot
          </div>
          <div>
            <img src={beachicon} alt="Beach" />
            Beach spot
          </div>
          <div>
            <img src={peticon} alt="Pet" />
            Pet Friendly spot
          </div>
          <div>
            <img src={coffeeicon} alt="Coffee" />
            Food places
          </div>
        </div>
        <iframe
          width="300"
          height="200"
          src={this.state.playerLifetimeEmbed}
        ></iframe>
        <Footer />
      </div>
    );
  }
}

export default BeachDetail;
