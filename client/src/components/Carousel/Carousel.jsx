import {Component} from "react";

export class Carousel extends Component{
    constructor(){

    }
    render(){
        return (<div>
            {people.map(emp => (
                <div className="carousel-block">
                  <div className="carousel-info">
                    <div className="carousel-info__photo">
                      <img
                        className="photo-logo"
                        src="http://placekitten.com/g/400/200"
                        alt=""
                      />
                    </div>
                    <div className="carousel-info__header">
                      <span className="info-header-name">{`КОМАНДА`}</span>
                    </div>
                    <div className="carousel-info__desc">
                      <span className="info-name">{emp.name}</span>
                      <span className="info-position">{emp.position}</span>
                    </div>
                  </div>
                </div>
              ))}
        </div>);
    }
}