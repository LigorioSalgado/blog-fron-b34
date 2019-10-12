import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import Post from './views/Post';
import Create from './views/Create';

function Logout () {
	localStorage.removeItem('blogToken');
	return <Redirect to="/login" />
}

function Routes() {

    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
			<Route exact path="/logout" component={Logout} />
			<Route exact path="/post/:id" component={Post} />
            <Route exact path="/new" component={Create} />

        </>
    );
}

export default Routes;
