import React from 'react';
import {HashRouter, Switch} from 'react-router-dom';
import publicRoutes from '../router/routerConfig';
import AuthRouter from '../router/authRouter';
const BasicRoute = () => (
    <HashRouter>
        <Switch>
            {publicRoutes.map(
                ({path, component, ...routes}) => 
                <AuthRouter key={path} path={path} component={component} {...routes}/>
            )}
        </Switch>
    </HashRouter>
);

export default BasicRoute;