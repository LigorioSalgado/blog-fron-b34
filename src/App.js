import React from 'react';
import Navbar from './common/Navbar';
import Head from './common/Head';

function App() {
  return (
    <>{ /* Fragments */}
      <Navbar title="Blog GraphQL"/>
      <Head title="Bienvenido a mi Blog" subhead="Posts de tecnologia y más"/>

    </> 
  );
}

export default App;
