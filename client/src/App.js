import React, { Component } from 'react';
import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
require('dotenv').config()

class App extends Component {
  state = {
    userLoggedIn: false
  }
  
  handleGoogleAuthReponse = res => {
    console.log('google res: ', res)
    this.setState({
      userLoggedIn: true
    })
  }
  handleGoogleLogoutSuccess = res => {
    console.log('google logout res: ', res)
    this.setState({
      userLoggedIn: false
    })
  }
  render() {
    console.log('state: ', this.state)
    console.log('GOOGLE_CLIENTID: ', process.env.GOOGLE_CLIENTID)
    return (
      <div className="App">
        {this.state.userLoggedIn === true 
          ? <GoogleLogout
              buttonText="Logout"
              onLogoutSuccess={this.handleGoogleLogoutSuccess}
            />
          : <GoogleLogin 
              clientId={process.env.GOOGLE_CLIENTID}
              buttonText="Login"
              onSuccess={this.handleGoogleAuthReponse}
              onFailure={this.handleGoogleAuthReponse}
            />
        }
      </div>
    );
  }
}

export default App;
