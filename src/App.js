import React from 'react';
import './App.css';
import './CSS/SignIn.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DashboardLayout from './Layouts/DashboardLayout';
import MainLayout from './Layouts/MainLayout';
import TestComponent from './Components/Test/TestComponent';
import TestComponent2 from './Components/Test/TestComponent2';
import MainViewComponent from './Components/Main & Login/MainViewComponent';
import LoginComponent from './Components/Main & Login/LoginComponent';
import LoginLayout from './Layouts/LoginLayout';

const AppRoute =  ({component:Component, layout:Layout, ...rest}) => (
  <Route {...rest} render = {props =>(
    <Layout><Component {...props}></Component></Layout>
  )}></Route>
)

function App() {
  return (
    <Router>
      <AppRoute path = "/" exact layout = {MainLayout} component = {MainViewComponent} />
      <AppRoute path = "/login" exact layout = {LoginLayout} component = {LoginComponent} />
      
      <AppRoute path = "/website" layout = {DashboardLayout} component = {TestComponent2} />
      <AppRoute path = "/dashboard" layout = {DashboardLayout} component = {TestComponent} />
    </Router>
  );
}

export default App;
