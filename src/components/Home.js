import React from "react";
import { Link } from "react-router-dom";
import Beach from "./Beach";

const Home = ({ apiBeaches }) => {
  return (
    <div>
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
};

export default Home;
