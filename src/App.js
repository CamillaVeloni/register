import React from 'react'; 
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import AppNavigator from './Navigation/AppNavigator';
import { BASE_URL } from './config';

const client = new ApolloClient({ 
  uri: BASE_URL,
  cache: new InMemoryCache()
});

const App = () => { 
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
};

export default App;

