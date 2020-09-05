import React, { Component }  from 'react';
import '../App.css';
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
                                {this.props.children}
                        </div>
                    </div>
            </Router>
        </React.Fragment>
        );
    }
}

export default DashboardLayout;