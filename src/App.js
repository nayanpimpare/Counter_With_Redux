import React from "react";
import Counter from "./component/Counter";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>Count</p>
        <Counter />
      </div>
    );
  }
}

export default App;
