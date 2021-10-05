import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyName from './componets';


class App extends React.Component {
  render() {
    return(
      <div className="App">
        <h1>Teste React</h1>
        <MyName />
      </div>
    );
  }
}

export default App;
