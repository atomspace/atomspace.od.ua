import React from "react";
import AnimatePlanet from "./AnimatePlanet";
class Main extends React.Component {
  componentDidMount(){
    
  }
  render() {
    
    console.log(this.props);
    return (
      <div className="main-container">
        
        <AnimatePlanet />
      </div>
    );
  }
}

export default Main;
