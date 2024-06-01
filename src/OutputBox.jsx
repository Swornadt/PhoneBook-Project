import React from 'react';

const OutputBox = ({persons,filteredPersons}) => {
    /*importing filteredpersons into child outputbox to map out 
    a ul
    */
   
    /*problem: filteredPersons renders everytime there is a NameChange
    or NumberChange, printing [] [] on console.
    */
    console.log(filteredPersons)
    return (
        <div>
            <h2>Numbers</h2>
            
            <ul>
                {
                persons.map((person,index) => (
                    <li key={index}>
                    {person.name} : {person.number}
                    </li>
                ))
                }
            </ul>
        </div>
    );
}

export default OutputBox;
