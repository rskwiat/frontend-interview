import * as React from "react";
import styled from 'styled-components';
import RepositorySearchResults from './RepositorySearchResults';



/**
 * Once given an input, fetch the repositories we searched
 * via:
 *
 * https://api.github.com/search/repositories?q={}
 *
 * This should not kickoff a fetch for every keystroke, but rather when
 * typing stops.
 *
 * Documentation for the search api is here:
 * https://developer.github.com/v3/search/#search-repositories
 */

 const Container = styled.div`
  margin: 4rem auto;
  max-width: 600px;
  padding: 0 2rem;

  input {
    width: 100%;
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
  }
 `;

const Info = styled.div`
  color: #0c5460;
  background-color: #d1ecf1;
  margin: 4rem 0;
  padding: 1.25rem 1.75rem;
  border: 1px solid #bee5eb;
  border-radius: .25rem;
  font-size: 1.5rem;
  font-family: sans-serif;
`;

const Repositories = () => {

  const [search, setSearch] = React.useState({
    searchTerm: ''
  });

  const { searchTerm } = search;
  let searchResults = searchTerm;

  return (
    <Container>
      <input 
        name="search-terms" 
        value={search.searchTerm}
        onChange={(e) => setSearch({ searchTerm: e.target.value })}
      />
      {searchResults ? (
        <RepositorySearchResults searchResults={searchResults} />
      ) : (
        <Info>Enter some test to search github repositories</Info>
      )}
    </Container>
  );
};

export default Repositories;
