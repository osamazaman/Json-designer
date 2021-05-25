import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import axios from 'axios';


import SjtConfig from '../Sjt-config';
import Sjtupload from '../Sjt-upload';
import SjtAssets from '../Sjt-assetsList';
import SjtMap from '../Sjt-map';
import SjtHistory from '../Sjt-history';
import SjtHome from '../Sjt-home';
import ApptitudeMap from '../Apptitude-map';
import SjtPreview from '../SjtPreview';


import StateMg from '../StateMgmt/StateMg';

class SjtContainer extends Component {

    constructor(){
        super();
        this.state = StateMg;
        this.handleChange = this.handleChange.bind(this);
        this.changeFlag = this.changeFlag.bind(this);
        this.updateJson = this.updateJson.bind(this);
        this.updateConfig = this.updateConfig.bind(this);
        this.setModal1Visible = this.setModal1Visible.bind(this);
        this.setHpModalVisible = this.setHpModalVisible.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.updateHomepage = this.updateHomepage.bind(this);
    }



    updateJson(json){
        this.setState({
            json:json,
            isJsonUpdated: true
        })
        console.log("updateJson", json);
        localStorage.setItem('sjt-desiging-json',JSON.stringify(json));
        
    }

    fetchData(result){
        this.setState({
            homepageData:result
          })
    }

    updateHomepage(json){

        console.log("updateJson", json);
       
       this.setState({
        homepageData:json,
       })       
   }

    updateConfig(value) {
        this.setState({
            "config":value
        })
    }
    
    handleChange(event){
        // console.log("handleChange Event",event);
        const {name,value} = event.target;
        console.log("name", name, "value", value)
        this.setState({
            [name]:value
        })

    }

    changeFlag(event){      
        console.log("flag value",event);
        this.setState({
            flag:event
        })
    }

    changeAccordionType(value){      
        console.log("Accordion type value",value);
        this.setState({
            containerType:value
        })
    }
    

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }

    setHpModalVisible(homepageModal) {
        this.setState({ homepageModal });
      }


    render(){
    return (
        <div id="sjtcontainer">

            {/* <div> */}
            <Router>
                <Switch>
                    <Route path="/sjt-config" exact >
                        <SjtConfig
                            handleChange={this.handleChange}
                            data={this.state}
                            changeFlag={this.changeFlag}
                            updateConfig = {this.updateConfig}
                        />
                    </Route>
                    <Route path="/sjt-upload">
                            <Sjtupload
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                updateJson={this.updateJson}
                                data={this.state}
                            />
                    </Route>

                    <Route path="/sjt-assetList">
                            <SjtAssets
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                data={this.state}
                            />
                    </Route>

                    <Route path="/sjt-mapped">
                            <SjtMap
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                updateJson={this.updateJson}
                                accActive={this.accActive}
                                data={this.state}
                                updateHomepage = {this.updateHomepage}
                                setModal1Visible = {this.setModal1Visible}
                            />
                    </Route>

                    <Route path="/apptitude-mapped">
                            <ApptitudeMap
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                data={this.state}
                            />
                    </Route>

                    <Route path="/sjt-history">
                            <SjtHistory
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                data={this.state}
                            />
                    </Route>

                    <Route path="/sjt-home">
                            <SjtHome
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                data={this.state}
                                fetchData={this.fetchData}
                                updateJson={this.updateJson}
                                updateHomepage = {this.updateHomepage}
                                setHpModalVisible={this.setHpModalVisible}
                            />
                    </Route>

                </Switch>

                
            </Router>

            
        </div>
    )
}
}

export default SjtContainer;