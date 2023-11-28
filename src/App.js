import './App.css';
import ToDo from './Assignment1/ToDo';
import React from 'react';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDo/>
      </header>
    </div>
  );
}
}

export default App;
