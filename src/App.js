import React from 'react'; 
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './store/reducers';
import AppNavigator from './Navigation/AppNavigator';

// Wrapping o App com o Store do redux
// Não esquecer de colocar redux-thunk depois para async actions
const store = createStore(reducers);
const App = () => { 
  return ( 
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;

