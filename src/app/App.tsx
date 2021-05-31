import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <p>Home</p>
          </Route>
          <Route path="/about">
            <p>About</p>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
