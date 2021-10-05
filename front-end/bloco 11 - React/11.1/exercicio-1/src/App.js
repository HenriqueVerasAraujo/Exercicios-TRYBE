// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Tasks from './components/Tasks'

const myList = ["item1", "item2", "item3", "item4"];

class App extends React.Component {

  render() {
    return(
      <ul>{ myList.map((item) => Tasks(item)) }</ul>
    )
  }
}
export default App;
