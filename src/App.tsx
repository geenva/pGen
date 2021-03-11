import React from "react";
// import "./index.css";
import generatePassword from "./utils/generate";

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
    return <p>{this.state.password}</p>;
  }

  render() {
    let pText = "Password Length (Over 12 Is Most Secure)";

    return (
      <div>
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
