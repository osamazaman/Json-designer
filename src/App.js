//   "UserLogin Api",		
//   "CreateCompanies",		
//   "RegisterUser",		
//   "AddClients",		
//   "CreateCampaigns",		
//   "AddCompetencies"

// adminLogin
// company
// user
// client
// campaign


import React from 'react';
import HeaderBlock from '../src/componenets/HeaderFooter/Header';
import FooterBlock from '../src/componenets/HeaderFooter/Footer';
import Headerrr from '../src/componenets/ui/UiElements';
import FormContainer from './containers/FormContainer';
import SjtContainer from './componenets/Sjt-creation/Container/SjtContainer'
// import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';


function App() {  
  return (
    <Layout>
      <HeaderBlock />
      {/* <Headerrr/> */}
      {/* <Layout> */}
        {/* <Sider>left sidebar</Sider> */}
        <FormContainer/>
        {/* <Sider>right sidebar</Sider> */}
      {/* </Layout> */}
      <FooterBlock/>
    </Layout>
  );
}

export default App;
