import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }

    }

    render() {
        return (
        <nav style = {{backgroundColor: "#1cbe7b"}} className = "navbar navbar-dark sticky-top flex-md-nowrap p-0">
            <a style = {{fontSize: "16px", backgroundColor: "#1cbe7b"}} className = "navbar-brand col-sm-3 col-md-2 mr-0" href="#">St. Anne's Medical Centre</a> 
            <ul className ="navbar-nav px-3" style = {{backgroundColor: "#1cbe7b"}}>
              <li className = "nav-item text-nowrap">
                <a className = "nav-link" href="/login">Sign out</a>
              </li>
            </ul>
        </nav>
        );
    }
}

export default HeaderComponent;