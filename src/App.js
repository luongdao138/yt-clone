import React from 'react';
import GlobalStyle from './GlobalStyle';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './pages/Layout';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Layout>
            <HomePage />
          </Layout>
        </Route>
      </Switch>
      <GlobalStyle />
    </Router>
  );
};

export default App;
