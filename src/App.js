import React from'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  render(){
    return(
      <div className='App-header'>
        <img src={logo} width="100" height="100" className='App-logo'/>
        <h1 className='app-title'>ToDo App</h1>
        <div className='container'>
          Add an item...
          <br />
          <input type="text" className="input-text" placeholder="Write a task" />
          <button className='add-btn'>Add task</button>
          <div className='list'>
            <ul>
              <li>
                  <input type="checkbox" name=" "  />
                  record
                  <button className='btn'>Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;