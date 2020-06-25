import React from 'react';
import logo from './logo.svg';
import './App.css';
import hello from './Hello';
import Hello from './Hello';

function App({name,age}) {
  return (
    <div class="body">
      <p>User Name : {name} and Age is : {age}</p>
      <br/>
        <Hello user={name}></Hello>
    </div>
    );
}

export default App;
