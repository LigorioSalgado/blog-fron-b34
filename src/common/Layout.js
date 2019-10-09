import React from 'react';
import Navbar from './Navbar';
import Head from './Head';


function Layout({head,subhead,children}){

    return(
        <>
            <Navbar title="GraphQL Blog" />
            <Head title={head} subhead={subhead} />
            {children}
        </>
    )

}

export default Layout;
