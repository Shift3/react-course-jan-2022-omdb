import styled from "styled-components";

const SearchBar = (props) => {
  const searchTypes = ["movie", "series", "episodes"];
  
  return (
    
      <form onSubmit={(e) => props.onSubmit(e)}>
        <Row>
        <label htmlFor="searchInput">Search Term:
          <input id="searchInput" 
              placeholder="Enter movie, series, or episode name..."
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