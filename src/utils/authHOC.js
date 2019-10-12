import React from 'react';
import { Redirect } from 'react-router-dom';
import authenticate from './authenticate';

export default function(WrappedComponent){
    const { isAuthenticated } = authenticate();
    return function(props){
        return isAuthenticated ? <WrappedComponent {...props}/> 
        : <Redirect to="/login" />   
    }

}

