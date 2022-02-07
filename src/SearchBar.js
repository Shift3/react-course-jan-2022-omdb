import { useState} from "react";
import styled from "styled-components";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchTypes = ["movie", "series", "episodes"];
  const search = () => {

  }

  return (
    
      <form onSubmit={e => {
        e.preventDefault();
        search();
      }}>
        <Row>
        <label htmlFor="searchInput">Search Term:
          <input id="searchInput" 
              placeholder="Enter movie, series, or episode name..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{width: '80%'}}/>
        </label>
        
        <label htmlFor="searchType">Type:
          <select id="searchType">
              {
                searchTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))
              }
          </select>
        </label>

        <button>Search</button>
        </Row>
      </form>
    
  )
}

const Row =styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export default SearchBar;