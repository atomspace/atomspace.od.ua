import React, { Component } from 'react';

class AnimatePlanet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="scale">
        <div className="stars-container">
          <div className="stars">
            <div />
            <div />
            <div />
          </div>
          <div className="stars">
            <div />
            <div />
            <div />
          </div>
          <div className="stars">
            <div />
            <div />
            <div />
          </div>
          <div className="stars">
            <div />
            <div />
            <div />
          </div>
          <div className="stars-2" />
          <div className="stars-2" />
          <div className="stars-2" />
        </div>

        <div className="moon" />

        <div className="planet-container">
          <div className="planet-ring2" />
          <div className="planet" />
          <div className="shine" />
          <div className="shine-2" />
          <div className="planet-ring" />
          <div className="planet-crater" />
        </div>

        <div className="meteor-container">
          <div />
          <div />
          <div />
          <div />
        </div>

        <div className="meteor-container-2">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default AnimatePlanet;
