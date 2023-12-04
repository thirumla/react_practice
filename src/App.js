import './App.css';
import ToDo from './Assignment1/ToDo';
import React from 'react';
import EmployeeInfo from './Assignment2/EmployeeInfo';
import FormValidation from './Assignment3/Assignment3';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDo/>
        <EmployeeInfo className="Employee-css"/>
        <FormValidation/>
      </header>
    </div>
  );
}
}

export default App;
