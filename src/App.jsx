import React,{useState} from 'react';

const App = () => {
  const [persons,setPersons] = useState([])
  const [newName,setNewName] = useState("");
  const [newNumber,setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  //Change Block:
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  //Check Block:
  const nameCheck = (newName) => {
    for(let i=0; i<persons.length; i++){
      if(newName.trim() === persons[i].name){
        return false;
      }
    }
    return true;
  };
  const numberCheck = (newNumber) => {
    for(let i=0; i<persons.length; i++){
      if(newNumber.trim() === persons[i].number){
        return false;
      }
    }
    return true;
  };

  //Submission Block:
  const handleSubmit = (e) => {
    if(newName.trim() === "" || newNumber.trim() === ""){
      e.preventDefault();
      alert("Please Enter a Name and Number");
      return false;
    }

    //Check Call:
    if (nameCheck(newName,e)==false){
      e.preventDefault();
      alert(`${newName.trim()} has already been entered!`);
      return false;
    }
    if (numberCheck(newNumber,e)==false){
      e.preventDefault();
      alert(`${newNumber.trim()} has already been entered!`);
      return false;
    }
    e.preventDefault();

    //Update and Display Block
    const newPerson = {
      name: newName.trim(),
      number: newNumber.trim()
    };
    const updatedPersons = [...persons, newPerson];
    setPersons(updatedPersons);
    setNewName("");
    setNewNumber("");
    console.log(updatedPersons)
  }
  const handleSearch = (e) => {
    const filteredPersons = persons.filter(person => person.number === search)
    console.log(filteredPersons);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <input type="text"
             onChange={handleSearchChange} // (?)
             value={search}
             placeholder="Search Number"/>
      <button type="submit" onClick={(e) => handleSearch(e,persons)}> Search </button>
      <br/><br/>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" 
                value={newName} 
                onChange={handleNameChange}/>
        </label>
        <br/>
        <label>
          Number:
          <input type="text"
                 value={newNumber}
                 onChange={handleNumberChange}/>
        </label>
        <br/>
        <button type="submit">
          Add
        </button>
      </form>
      <hr></hr>
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

export default App;
