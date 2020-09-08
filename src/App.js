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
import DashboardMain from './Components/Dashboard/1Main/DashboardMain';
import AllDrugsComponent from './Components/Dashboard/Pharmacy/AllDrugsComponent';
import ManageDrugComponent from './Components/Dashboard/Pharmacy/ManageDrugComponent';
import ViewDrugComponent from './Components/Dashboard/Pharmacy/ViewDrugComponent';
import ListUtilityComponent from './Components/Dashboard/Finance/ListUtilityComponent';
import AddUtilityComponent from './Components/Dashboard/Finance/AddUtilityComponent';
import UpdateUltilityComponent from './Components/Dashboard/Finance/UpdateUltilityComponent';
import UtilityBillComponent from './Components/Dashboard/Finance/UtilityBillComponent';

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
      <AppRoute path = "/dashboard" layout = {DashboardLayout} component = {DashboardMain} />

      <AppRoute path = "/pharmacy/all-drugs" layout = {DashboardLayout} component = {AllDrugsComponent} />
      <AppRoute path = "/pharmacy/manage-drug/:drugId" layout = {DashboardLayout} component = {ManageDrugComponent} />
      <AppRoute path = "/pharmacy/view-drug/:drugId" layout = {DashboardLayout} component = {ViewDrugComponent} />

      <AppRoute path = "/finance/all-utility" layout = {DashboardLayout} component = {ListUtilityComponent} />
      <AppRoute path = "/finance/add-utility" layout = {DashboardLayout} component = {AddUtilityComponent} />
      <AppRoute path = "/finance/update-utility/:id" layout = {DashboardLayout} component = {UpdateUltilityComponent} />
      <AppRoute path = "/finance/utility-bill" layout = {DashboardLayout} component = {UtilityBillComponent} />
      
    </Router>
  );
}

export default App;
