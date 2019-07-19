import React from 'react';
import './LocalStorage.css';

function LocalStorage() {

  const regularData = JSON.parse(localStorage.getItem('user'));
      if (regularData !== null) {
        console.log(regularData.name, regularData.lastName);
      };

  return(
    <div className='sentence'>
      {`Mon nom est ${regularData.name} ${regularData.lastname}`}
    </div>
  )
}

export default LocalStorage;
