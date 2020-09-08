import React, { Component } from 'react';

class DashboardMain extends Component {
    constructor(props){
        super(props)

        this.state = {

        }

    }

    render() {
        return (
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 class="h2">Dashboard</h1>
                </div>

                <div className = "text-center">
                    <br/><br/><br/><br/>
                    <h1>Welcome to the Dashboard!!<br/>St. Anne's Medical Center</h1>
                </div>
            </main>
        );
    }
}

export default DashboardMain;