import React,{useState} from 'react';

const SearchFilter = ({persons,setFilteredPersons}) => {
    //uplifting filteredpersons to parent
    const [search, setSearch] = useState("");
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }
    const handleSearch = (e) => {
        const filteredPersons = persons.filter(person => person.number === search)
        setFilteredPersons(filteredPersons);
    }
    return (
        <div>
            <input type="text"
             onChange={handleSearchChange}
             value={search}
             placeholder="Search Number"/>
            <button type="submit" onClick={(e) => handleSearch(e,persons)}> Search </button>
            <br/><br/>
        </div>
    );
}

export default SearchFilter;
