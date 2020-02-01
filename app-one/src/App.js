import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Mateusz', age: 18},
      {name: 'Robert', age: 24},
      {name: 'Łukasz', age: 21}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log('personState: ' + personState);
  console.log('otherState: ' + otherState);

  const switchNameHandler = () => {
    setPersonState({
      persons:[
        {name: 'Mateusz', age: personState.persons[0].age+1},
        {name: 'Robert', age: personState.persons[1].age+1},
        {name: 'Łukasz', age: personState.persons[2].age+1}
      ]
    });
  };

    return (
      <div className="App">
        <h1>Mam na imie Mateusz</h1>
        <button onClick={switchNameHandler}>Zmień imie</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>Nie lubi masła.</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age} />
      </div>
    );
}

export default App;
