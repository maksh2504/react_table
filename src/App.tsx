import React from 'react';
import RoutesMain from "./routes/RoutesMain";
import {Layout} from "antd";
import {Content, Footer} from "antd/es/layout/layout";
import Header from "./components/Header/Header";
import './App.css'

function App() {
  return (
      <Layout>
          <Header/>
          <Content>
              <RoutesMain/>
          </Content>
          <Footer style={{textAlign: 'center'}}>
              © 2022 Foundevs Study
          </Footer>
      </Layout>
  );
}

export default App;
