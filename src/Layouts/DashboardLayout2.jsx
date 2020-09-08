import React, { Component }  from 'react';
import '../App.css';
//import '../Components/Dashboard/OPD/Chamathka.css';
import {BrowserRouter as Router} from 'react-router-dom';

import HeaderComponent from '../Components/Dashboard/1Main/HeaderComponent';
import SideBarComponent from '../Components/Dashboard/1Main/SideBarComponent';

class DashboardLayout extends Component {
    constructor(props){
        super(props)

        this.state = {

        }

    }

    render() {
        return (
        <React.Fragment>
            <Router>
                <HeaderComponent />
                    <div className = "container-fluid">
                        <div className = "row">
                            <SideBarComponent/>
                            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                                {this.props.children}
                            </main>
                        </div>
                    </div>
            </Router>
        </React.Fragment>
        );
    }
}

export default DashboardLayout;