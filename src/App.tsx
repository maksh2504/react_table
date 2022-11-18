import React from 'react';
// import Header from './components/Header/Header';
import RoutesMain from "./routes/RoutesMain";
import {Layout} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import MyHeader from "./components/Header/MyHeader";

function App() {
  return (
      <Layout>
          <MyHeader/>
          <Content>
              <RoutesMain/>
          </Content>
      </Layout>

      // <div>
      //
      //
      //     {/*<Header/>*/}
      //     {/*<RoutesMain/>*/}
      // </div>
  );
}

export default App;
