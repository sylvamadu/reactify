
import './App.css';
import React from 'react'
import RegisterPage from './Components/RegisterPage';
import { Route, Switch } from 'react-router';
import LoginPage from './Components/LoginPage';
import Page from './Components/Page';
import WelcomePage from './Components/WelcomePage';




function App(){
  
  return(
    <Switch>
      <Route
        path="/login" exact
        render={(props) => (
          <Page title="Login-Bulk SMS Application For Marketing">
            <LoginPage />
          </Page>)}
      />
      <Route
        path="/register" exact
        render={(props) => (
          <Page title="Register-Bulk SMS Application For Marketing">
            <RegisterPage />
          </Page>)}
    />
    <Route
        path="/" exact
        render={(props) => (
          <Page title="Skezzoling-home">
            <WelcomePage />
          </Page>)}
    />

    
    </Switch>
  )
}

export default App;
