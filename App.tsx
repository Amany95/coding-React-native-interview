import React from 'react';
4;
import {Provider} from 'react-redux';

import {StackNavigator} from './src/navigators/StackNavigator';
import store from './src/stores/Store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}

export default App;
