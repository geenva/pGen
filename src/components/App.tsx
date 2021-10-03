import * as React from "react";
import generatePassword from "../utils/generate";

interface IAppProps {}
interface IAppState {
  chars: string;
  password: string;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: string) {
    super(props);
    this.state = {
      chars: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderit = this.renderit.bind(this);
  }

  handleChange(event: any) {
    this.setState({
      chars: event.target.value,
      password: generatePassword(Number(event.target.value)),
    });
  }

  renderit() {
    return <p id="output">{this.state.password}</p>;
  }

  render() {
    let pText = "Password Length (Over 12 is the most secure)";

    return (
      <div>
        <p>
          Made by <a href="https://ymarc.us/">geneva</a> in 2020 while learning
          React. Enjoy.
        </p>

        <h1>pGen</h1>
        <form>
          <input
            value={this.state.chars}
            placeholder={pText}
            onChange={this.handleChange}
          ></input>
          <br />
        </form>
        <this.renderit />
      </div>
    );
  }
}

export default App;
