import React, { useState, useEffect } from 'react';
import SearchFilter from './SearchFilter';
import InputBox from './InputBox';
import OutputBox from './OutputBox';
import services from './services';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilterText] = useState("");
  const [errMessage, setErrMessage] = useState(null);

  // Fetch initial data from backend
  useEffect(() => {
    services
      .getAll()
      .then((data) => setPersons(data))
      .catch((error) => {
        setErrMessage("Cannot get data");
        setTimeout(() => {
          setErrMessage(null);
        }, 3000);
      });
  }, []);

  // Change handlers
  const handleNameChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);

  // Validation checks
  const nameCheck = (newName) => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName.trim()) {
        alert("Same Name!");
        return false;
      }
    }
    return true;
  };

  const numberCheck = (newNumber) => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].number === newNumber.trim()) {
        alert("Same Number!");
        return false;
      }
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim() === "" || newNumber.trim() === "") {
      alert("Please Enter a Name and Number");
      return;
    }
    if (!nameCheck(newName) || !numberCheck(newNumber)) {
      return;
    }

    const newPerson = {
      name: newName.trim(),
      number: newNumber.trim(),
    };

    // Sending data to server
    services
      .create(newPerson)
      .then((response) => {
        setPersons(persons.concat(response));
      })
      .catch((err) => {
        setErrMessage("Person not logged.");
        setTimeout(() => {
          setErrMessage(null);
        }, 3000);
      });

    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {errMessage && <div style={{ color: 'red' }}>{errMessage}</div>}
      <SearchFilter
        persons={persons}
        setFilterText={setFilterText}
      />
      <InputBox
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <hr />
      <OutputBox persons={persons}
                 filterText={filterText} />
    </div>
  );
};

export default App;
