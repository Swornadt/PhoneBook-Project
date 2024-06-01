import React,{useState} from 'react';
import SearchFilter from './SearchFilter';
import InputBox from './InputBox';
import OutputBox from './OutputBox';

const App = () => {
  const [persons,setPersons] = useState([])
  const [newName,setNewName] = useState("");
  const [newNumber,setNewNumber] = useState("");
  const [filteredPersons, setFilteredPersons]= useState([]);

  //Change Block:
  const handleNameChange = (e) => {
    setNewName(e.target.value);
}
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
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

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter persons={persons} //uplifting filteredpersons to send to outputbox
                    setFilteredPersons={setFilteredPersons}/>
      <InputBox newName={newName}
                newNumber={newNumber}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                handleSubmit={handleSubmit}/>
      <hr></hr>
      <OutputBox persons={persons}
                 filteredPersons={filteredPersons}/>
    </div>
  );
}

export default App;
