import React from 'react';
import { Link } from 'react-router-dom';

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
        <h1></h1>
        <iframe
          width="300"
          height="200"
          src={this.state.playerLifetimeEmbed}
        ></iframe>
      </div>
    );
  }
}

export default BeachDetail;
