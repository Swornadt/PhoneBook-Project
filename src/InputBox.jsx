import React from 'react';

const InputBox = ({handleNameChange,handleNumberChange,
                   handleSubmit,newName,newNumber}) => {


    return (
        <div>
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
        </div>
    );
}

export default InputBox;
