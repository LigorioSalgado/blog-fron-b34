import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import Post from './views/Post';
import Create from './views/Create';
import Me from './views/Me';
import Update from './views/Update';
import authHOC from './utils/authHOC';


function Logout () {
    localStorage.removeItem('blogToken');
    console.log("Entre a logout")
	return <Redirect to="/login" />
}

function Routes() {

    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
			<Route exact path="/logout" component={authHOC(Logout)} />
			<Route exact path="/post/:id" component={Post} />
            <Route exact path="/new" component={Create} />
            <Route exact path="/me" component={Me} />
            <Route exact path="/update/:id" component={Update} />

        </>
    );
}

export default Routes;
