import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      textId: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/animals')
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({ ...this.state, animals: data });
      });
  };

  handleIdChange = (e) => {
    this.setState({ textId: e.target.value });
  };

  newAnimal = () => {
    fetch('http://localhost:4000/animals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Thor', type: 'cat', gender: 'm', age: 1564661532000 }),
    }).then(response => response.json()).then(data => this.setState({ animals: [...this.state.animals, data] }));
  };

  removeAnimal = (e) => {
    e.preventDefault();
    console.log(this.state.textId);
    fetch('http://localhost:4000/animals', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id: this.state.textId }),
    }).then(response => response.json()).then(data => this.setState({ animals: data, textId: '' }));
  };

  render() {
    return (
      <div>
        there is response from server: {this.state.animals ? JSON.stringify(this.state.animals) : null}
        <div>
          <button onClick={this.newAnimal}>new</button>
        </div>
        <div>
          <input value={this.state.textId} onChange={this.handleIdChange} type="text" />
          <button onClick={this.removeAnimal}>remove</button>
        </div>
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
