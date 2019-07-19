import React from 'react';
import './LocalStorage.css';

function LocalStorage() {

  const regularData = JSON.parse(localStorage.getItem('user'));
      if (regularData !== null) {
        console.log(regularData.name, regularData.lastName);
      };

  const table = [
    {nameTable: 'Cléo', 
    lastnameTable:'Peschard'},
    {nameTable:'Marnie',
    lastnameTable:'Peschard'},
    {nameTable: 'Patricia',
    lastnameTable: 'Josenhans'},
    {nameTable: 'Simon',
    lastnameTable: 'Peschard'},
    {nameTable:'Juliette',
    lastnameTable:'Michaux'}
  ]

  return(
    <div>
      <div className='sentence'>
        {`Mon nom est ${regularData.name} ${regularData.lastname}`}
      </div>
      <div>
        {table
       // filter(table => table.lastnameTable === 'Michaux')
        .map((people, index) => {
          return (
            <div key={index} className='table'>
            <ul>
              <li>
                {people.nameTable}
              </li>
              <li>
                {people.lastnameTable}
              </li>
            </ul>
            </div>
            ) 
          }
          )
        }
      </div>
    </div>
  )
};

export default LocalStorage;
