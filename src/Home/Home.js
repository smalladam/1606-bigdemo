import React, { PropTypes } from 'react';

class Home extends React.Component {
render () {
    return(
      <div className="home-container">
        <div className="home-cover">
          <div className="home-item">
            <h1>HI, I'M <span>SMALLADAM</span></h1>
            <p>WEB DEVELOPER</p>
            <button className="home-btn"><a href="https://github.com/smalladam">HIRE ME</a></button>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
