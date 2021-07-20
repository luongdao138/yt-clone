import React from 'react';
import GlobalStyle from './GlobalStyle';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import VideoDetail from './pages/VideoDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Layout>
            <HomePage />
          </Layout>
        </Route>
        <Route path='/watch' exact>
          <Layout disappearSidebar disappearSmallScreenNav disappearNavbar>
            <VideoDetail />
          </Layout>
        </Route>
      </Switch>
      <GlobalStyle />
    </Router>
  );
};

export default App;
