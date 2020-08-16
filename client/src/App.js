import React, { Component } from 'react';
import Navbar from './components/Navbar';
//Redux 
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());
  }

  render(){
    return (
      <>
      <Provider store={store}>
      <Navbar />
      </Provider>
      </>
      
    );
  }
  
}


export default App;
