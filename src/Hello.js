import React from 'react';
import './App.css';
import './Hello.css';

function Hello({user}) {
  return (
      <div>
           <p className="myName">Mr. {user} you are welcome from hello.js </p> 
      </div>
  
    );
}

export default Hello;