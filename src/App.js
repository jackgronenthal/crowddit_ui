import React from 'react';
import logo from './logo.svg';
import Login from './components/containers/login'
import NavigationBar from './components/containers/navbar'

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Login></Login>
    </div>
  );
}

export default App;
