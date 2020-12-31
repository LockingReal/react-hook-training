import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/home/home';
let backUrl = "/home";

class AuthRoute extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        // this.props.refreshRoute(props);
    }
    render(){
        let props = this.props;
        let token = "111";
        return(
            token?<Route {...props}></Route>:<Route exact to={backUrl} component={Home}></Route>
        )
    }
}

export default AuthRoute;