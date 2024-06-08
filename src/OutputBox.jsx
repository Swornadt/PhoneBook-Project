import React from 'react';

const OutputBox = ({ persons, filterText }) => {

  const filteredPersons = filterText === "" ? persons
    : persons.filter(person =>
      person.name.toLowerCase().includes(filterText.toLowerCase())
    );
    
    return (
        <div>
            <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person, index) => (
          <li key={index}>
            {person.name} : {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OutputBox;
