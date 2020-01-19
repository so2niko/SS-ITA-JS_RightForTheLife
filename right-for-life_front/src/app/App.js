import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { response: null };
  }

  componentDidMount() {
    fetch('http://localhost:4000/animals')
      .then(resp => resp.json())
      .then(data => this.setState({ ...this.state, response: data }));
  }

  render() {
    return (
      <div>
        there is response from server: {this.state.response ? JSON.stringify(this.state.response) : null}
      </div>
    );
  }
}

// function App() {
//   let resp;
//   fetch('http://localhost:4000/query')
//     .then(resp => resp.json())
//     .then(data => resp = data);
//
// }

export default App;
