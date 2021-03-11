import React from "react";
// import "./index.css";
import generatePassword from "./utils/generate";

interface IAppProps {}
interface IAppState {
  chars: string;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: string) {
    super(props);
    this.state = {
      chars: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState({
      chars: event.target.value,
    });
    console.log(generatePassword(12));
    // const pass = document.getElementById("output");
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
          <input
            type="text"
            className="form-control"
            name="output"
            id="output"
            placeholder="Output"
            value=""
          ></input>
        </form>
      </div>
    );
  }
}

export default App;
