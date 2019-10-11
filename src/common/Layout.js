import React from 'react';
import Navbar from './Navbar';
import Head from './Head';


function Layout({head,subhead,cover,children}){

    return(
        <>
            <Navbar title="GraphQL Blog" />
            <Head title={head} subhead={subhead} cover={cover}/>
            {children}
        </>
    )

}

export default Layout;
