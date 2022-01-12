import React, {useState} from 'react';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import Flag from './flag';

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

// write a GraphQL query that asks for names and codes for all countries


// create a component that renders a select input for coutries
export default function CountrySelect(props) {

    

  const [country, setCountry] = useState(props.code);
  const ID = country
  const LIST_COUNTRIES = gql`
    {
        
        
            country(code: ${JSON.stringify(ID)}) {
                name
                native
                capital
                emoji
                currency
                languages {
                  code
                  name
                }
              }
          
      }
    `;
  const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

 console.log("graphql", data)

  return (
 
    <div id="details">
      <Flag code={ID}/>
   Your Server is in {props.city}, {data.country.name}. the capital of {data.country.name} is {data.country.capital}. You pay with {data.country.currency}.
        
    </div>
   
   
  );
}

