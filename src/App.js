import React, { Component } from 'react';
import './App.css';
import ApplicationViews from './components/ApplicationViews'
import { Redirect} from 'react-router-dom'
import Login from './components/login/Login'



export default class App extends Component {

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null

  render() {
    return (

      <React.Fragment>
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <NavBarForm/> */}
        {this.props.isAuthenticated() &&
        <ApplicationViews />
        }
        {
          !this.props.isAuthenticated() &&
          <Redirect to="/"/>
        }
      </React.Fragment>
    );
  }
}

// export default App;


