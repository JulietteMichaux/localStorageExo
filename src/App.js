import React from 'react';
import LocalStorage from './LocalStorage/LocalStorage';

function App() {

  const user = {
     name:'Juliette',
    lastname:'Michaux'
    };
  
  const userString = JSON.stringify(user);

  localStorage.setItem('user', userString);

  return (
    <div>
      <LocalStorage />
    </div>
  );
}

export default App;
