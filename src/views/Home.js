import React from "react";
import Layout from '../common/Layout';
import Feed from "../components/Feed";

function Home() {
  return (
    <Layout head="Todos los Post" subhead="Ve todos los post abajo" >
        <Feed/>
    </Layout>
  );
}


export default Home;