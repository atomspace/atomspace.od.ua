import React, { Component } from "react";
import { createMentor } from "../../../api/mentor";

class Mentor extends Component {
  state = {
    user: {
      name: "",
      number: 0,
      email: "",
      information: ""
    }
  };
  createMentor = async () => {
    let user = this.state.user;
    let response = await createMentor(user);
  };

  onChangeUser = event => {
    console.dir(event.target.id);
    this.setState({
      user: {
        [event.target.id]: event.target.value
      }
    });
  };
  render() {
    return (
      <div>
        <br />
        <label htmlFor="name" style={{ color: "white" }}>
          Name:
        </label>
        <br />
        <input
          id="name"
          type="text"
          value={this.state.user.name}
          onChange={this.onChangeUser}
        />
        <br />
        <label htmlFor="number" style={{ color: "white" }}>
          Number:
        </label>
        <br />
        <input
          id="number"
          type="number"
          value={this.state.user.number}
          onChange={this.onChangeUser}
        />
        <br />
        <label htmlFor="email" style={{ color: "white" }}>
          Email:
        </label>
        <br />
        <input
          id="email"
          type="text"
          value={this.state.user.email}
          onChange={this.onChangeUser}
        />
        <br />
        <label htmlFor="text" style={{ color: "white" }}>
          Information:
        </label>
        <br />
        <input
          id="information"
          type="text"
          value={this.state.user.information}
          onChange={this.onChangeUser}
        />
        <button
          onClick={this.createMentor.bind(this)}
        >{`Create Mentor`}</button>
      </div>
    );
  }
}

export default Mentor;
