import React from 'react';
import './App.css';
import './CSS/SignIn.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DashboardLayout from './Layouts/DashboardLayout';
import DashboardLayout2 from './Layouts/DashboardLayout2';
import TestComponent2 from './Components/Test/TestComponent2';
import MainViewComponent from './Components/Main & Login/MainViewComponent';
import LoginComponent from './Components/Main & Login/LoginComponent';
import OtherLayout from './Layouts/OtherLayout';
import DashboardMain from './Components/Dashboard/1Main/DashboardMain';
import AllDrugsComponent from './Components/Dashboard/Pharmacy/AllDrugsComponent';
import ManageDrugComponent from './Components/Dashboard/Pharmacy/ManageDrugComponent';
import ViewDrugComponent from './Components/Dashboard/Pharmacy/ViewDrugComponent';
import ListUtilityComponent from './Components/Dashboard/Finance/ListUtilityComponent';
import AddUtilityComponent from './Components/Dashboard/Finance/AddUtilityComponent';
import UpdateUltilityComponent from './Components/Dashboard/Finance/UpdateUltilityComponent';
import UtilityBillComponent from './Components/Dashboard/Finance/UtilityBillComponent';
import PrintDetailsComponent from './Components/Dashboard/OPD/PrintDetailsComponent';
import UpdateEquipmentComponent from './Components/Dashboard/OPD/UpdateEquipmentComponent';
import CreateEquipmentCompenent from './Components/Dashboard/OPD/CreateEquipmentCompenent';
import ListEquipmentComponent from './Components/Dashboard/OPD/ListEquipmentComponent';

const AppRoute =  ({component:Component, layout:Layout, ...rest}) => (
  <Route {...rest} render = {props =>(
    <Layout><Component {...props}></Component></Layout>
  )}></Route>
)

function App() {
  return (
    <Router>
      <AppRoute path = "/" exact layout = {OtherLayout} component = {MainViewComponent} />
      <AppRoute path = "/login" exact layout = {OtherLayout} component = {LoginComponent} />
      
      <AppRoute path = "/website" layout = {DashboardLayout} component = {TestComponent2} />
      <AppRoute path = "/dashboard" layout = {DashboardLayout} component = {DashboardMain} />

      <AppRoute path = "/pharmacy/all-drugs" layout = {DashboardLayout} component = {AllDrugsComponent} />
      <AppRoute path = "/pharmacy/manage-drug/:drugId" layout = {DashboardLayout} component = {ManageDrugComponent} />
      <AppRoute path = "/pharmacy/view-drug/:drugId" layout = {DashboardLayout} component = {ViewDrugComponent} />

      <AppRoute path = "/finance/all-utility" layout = {DashboardLayout} component = {ListUtilityComponent} />
      <AppRoute path = "/finance/add-utility" layout = {DashboardLayout} component = {AddUtilityComponent} />
      <AppRoute path = "/finance/update-utility/:id" layout = {DashboardLayout} component = {UpdateUltilityComponent} />
      <AppRoute path = "/finance/utility-bill" layout = {DashboardLayout} component = {UtilityBillComponent} />

      <AppRoute path = "/opd/equipment" layout = {DashboardLayout2} component = {ListEquipmentComponent} />
      <AppRoute path = "/opd/add-equipment" layout = {DashboardLayout2} component = {CreateEquipmentCompenent} />
      <AppRoute path = "/opd/update-equipment/:eqId" layout = {DashboardLayout2} component = {UpdateEquipmentComponent} />
      <AppRoute path = "/opd/print-details/:eqId" layout = {OtherLayout} component = {PrintDetailsComponent} />

      <AppRoute path = "/extuser/patients" layout = {DashboardLayout} component = {AllDrugsComponent} />
      <AppRoute path = "/extuser/add-patient" layout = {DashboardLayout} component = {ManageDrugComponent} />
      <AppRoute path = "/extuser/update-patient/:Id" layout = {DashboardLayout} component = {ViewDrugComponent} />
    </Router>
  );
}

export default App;
