import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Content from "./Content";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
  personName: string;
  personSurname: string;
}

interface Person {}

class App extends Component<AppProps, AppState, Person> {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tymon",
      personName: "John",
      personSurname: "Doe"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Content
          nome={this.state.personName}
          cognome={this.state.personSurname}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
