import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homescreen from './pages/Homescreen/Homescreen';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Profile from './pages/Profile/Profile';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homescreen />
        </Route>
        <Route exact path="/about/:name">
          <MovieDetails />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
