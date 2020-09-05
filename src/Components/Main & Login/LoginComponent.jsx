import React, { Component } from 'react';

class LoginComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }

    }

    render() {
        return (
            <div className = "text-center">
                <div className = "login-top">
                </div>
                <br/><br/>
                <form class="form-signin">
                    <img src = {require('./Img/logoA.jpg')} width="72" height="72"/> <br/><br/>
                    <h2 class="h3 mb-3 font-weight-normal">Please sign in</h2> <br/>
                    <input type="email" id="inputUname" class="form-control" placeholder="User Name" required autofocus/>
                    <input type="password" id="inputPass" class="form-control" placeholder="Password" required/>
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <a class="btn-medical btn-lg btn-block" type="submit">Sign in</a>
                </form>
            </div>
        );
    }
}

export default LoginComponent;