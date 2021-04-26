import React from 'react'; 
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, concat } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigator from './Navigation/AppNavigator';
import { BASE_URL } from './config';

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({ 
  uri: BASE_URL,
  credentials: 'include',
});

const cache = new InMemoryCache();

const authMiddleware = setContext(async (_, { headers }) => {
  // Pegando jwt do async storage se existir dentro
  const accessToken = await AsyncStorage.getItem('@accessToken');
  //console.log('Auth Token injetado: ', accessToken);
  // Retornar headers para httpLink ter acesso
  // Só tem o token de authorization
  return {
      headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
  };
});

const client = new ApolloClient({ 
  cache,
  link: concat(authMiddleware, httpLink, errorLink),
});

const App = () => { 
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
};

export default App;

