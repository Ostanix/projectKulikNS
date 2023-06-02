import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/ui/bars/navBar';
import PhotosPage from './components/page/photosPage';
import MainPage from './components/page/mainPage';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        {' '}
        <Route path='/user/:userId?' component={PhotosPage} />
        <Route path='/' exact component={MainPage} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
