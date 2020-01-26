import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Mateusz', age: '18'},
      {name: 'Robert', age: '24'},
      {name: 'Łukasz', age: '21'}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Mam na imie Mateusz</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Nie lubi masła.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
