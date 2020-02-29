import * as React from "react";
import styled from 'styled-components';


const Loading = styled.div`
  font-size: 2rem;
  margin: 2rem 0;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  margin: 2rem 0;
  padding: 1rem 1.8rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin: 0 0 2rem;
`;


const useFetch = (url) => {
  const [data, setData] = React.useState(null);
  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }

  React.useEffect(() => {
    fetchData()}, 
    [url]
  );
  return data;
}

const RepositorySearchResults = ({ searchResults }) => {
  const data = useFetch(`https://api.github.com/search/repositories?q=${searchResults}`);

  if (!data) {
    return <Loading>Loading Search Results</Loading>
  } else {
    return data.items.map((item) => {
      return (
        <Card key={item.full_name}>
          <Title>{item.full_name}</Title>
          <p>{item.description}</p>
          <hr />
          <p>Stargazers: {item.stargazers_count} | Open Issues: {item.open_issues_count} | Score: {item.score}</p>
        </Card>
      );
    });
  }
}

export default RepositorySearchResults;