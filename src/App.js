import React from 'react';
import PremiumPage from './components/PremiumPage';
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () =>{
 
  return (
      <div>
        <Provider store={store}>
          <PremiumPage/>
        </Provider>
      </div>
  );
}

export default App;
