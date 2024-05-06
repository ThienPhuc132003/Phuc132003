import React, { Component } from 'react';
import Snowfall from 'react-snowfall';

class Home extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">ADMIN HOME</h2>
        <img src="https://www.thespruce.com/thmb/fNW8BSy54lEB9TY12MUT0dIGrJM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/transforming-furniture-for-small-spaces-4058276-0490f69ad6114680920b7545b42abb92.jpg" width="1000px" height="600px" alt="" />
        {/* Add YouTube video */}
        <Snowfall snowflakeCount={100} style={{ zIndex: 9999 }} />
      </div>


    );
  }
}
export default Home;