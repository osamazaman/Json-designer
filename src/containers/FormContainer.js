import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



//Components
import UserLogin from '../componenets/dashboard/UserLogin';
import PasswordReset from '../componenets/dashboard/PasswordReset';
import CompaniesList from '../componenets/dashboard/Dashboard';
import CreateCompanies from '../componenets/createCampaign/CreateCompanies';
import RegisterUser from '../componenets/createCampaign/RegisterUser';
import AddClients from '../componenets/createCampaign/AddClients';
import CreateCampaigns from '../componenets/createCampaign/CreateCampaigns';
import AddCompetencies from '../componenets/createCampaign/AddCompetencies';
import CampaignConfig from '../componenets/createCampaign/CampaignConfig';
import RegistrationFields from '../componenets/createCampaign/RegistrationFields';
import Invite from '../componenets/candidates/Invite';
import SjtContainer from '../componenets/Sjt-creation/Container/SjtContainer';
import ClientDashboard from '../componenets/dashboard/clientDashboard';



import HeaderBlock from '../../src/componenets/HeaderFooter/Header';
import userLogin from '../assets/backgroundImages/background.jpg';

import UiElements  from '../componenets/ui/UiElements';


import filedsInfo from '../services/filedsInfos';

import '../Form.css';
import 'antd/dist/antd.css';
// import logo from "../assets/TTG.png";   


import arrayMove from 'array-move';



import passwordReset from '../assets/backgroundImages/background.jpg'
import dashboard from '../assets/backgroundImages/background.jpg'
import company from '../assets/backgroundImages/background.jpg'
import user from '../assets/backgroundImages/background.jpg'
import client from '../assets/backgroundImages/background.jpg'
import campaign from '../assets/backgroundImages/background.jpg'
import campaignConfig from '../assets/backgroundImages/background.jpg'
import registrationFields from '../assets/backgroundImages/background.jpg'
import competencies from '../assets/backgroundImages/background.jpg'
import uiElements from '../assets/backgroundImages/background.jpg'








class FormContainer extends Component {
    /** @param {Record<string, any>} props */
    constructor(props) {
        super(props);
        this.state = filedsInfo;
        this.updateInfo = this.updateInfo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.onClickCompetenciesItem = this.onClickCompetenciesItem.bind(this);
        this.onClickClear = this.onClickClear.bind(this);
        this.onClickClose = this.onClickClose.bind(this);
        this.onSortEnd = this.onSortEnd.bind(this);
        this.onChangeRegistrationFields = this.onChangeRegistrationFields.bind(this);
        this.onCheckAllChangeRegistrationFields = this.onCheckAllChangeRegistrationFields.bind(this);
        this.changeBgImage = this.changeBgImage.bind(this);
    }

    

    changeBgImage(value) {
        console.log("s-",value);
        this.setState({
            bgImage: value,
            flag:true
        });
        console.log("Updated",this.state.bgImage);
    }

    onChangeRegistrationFields(checkedList) {
        const plainOptions = this.state.plainOptions;
        this.setState({
          checkedList,
          indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
          checkAll: checkedList.length === plainOptions.length,
        });
      };

      onCheckAllChangeRegistrationFields(e) {
        const plainOptions = this.state.plainOptions;
        this.setState({
          checkedList: e.target.checked ? plainOptions : [],
          indeterminate: false,
          checkAll: e.target.checked,
        }); 
    }


    onSortEnd({oldIndex, newIndex}) {
        this.setState(({tower}) => ({
            tower: arrayMove(tower, oldIndex, newIndex),
        }));
    }

    onClickClear(){
        const tower = this.state.tower;
        console.log(tower);
        tower.forEach((item)=>{
            document.getElementById("competencies").querySelector("span[value='"+item.name+"']").classList.remove('selectedItem');
        })
        this.setState({
            tower: []
        })
    }

    onClickClose(event) {
        const deleteValue = event.target.parentNode.parentNode.getAttribute('value');
        document.getElementById("competencies").querySelector("span[value='"+deleteValue+"']").classList.remove('selectedItem');
        const tower = this.state.tower.filter(item => item.name !== deleteValue );
        this.setState({
            tower: tower
        })
    }


    onClickCompetenciesItem(event) {
        event.target.classList.add('selectedItem');
        // event.target.querySelector('span').add('displayBlock');
        const tower = this.state.tower;
        const competency = event.target.getAttribute('value');
        let notExiste = true;
        tower.forEach((item)=>{
            if(item.name === competency){
                notExiste = false;
            }
        })
        console.log(event.target.getAttribute('value'));
       
        // event.target.setAttribute('hidden',true);
        if(notExiste) {
            console.log(event.target.getAttribute('imgUrl'));
            tower.push({'name':event.target.getAttribute('value'), 'competencyName':event.target.getAttribute('index'),'imgUrl':event.target.getAttribute('imgUrl')});
            console.log(tower);
            this.setState({
            tower: tower
        })
        }
        else{
            console.log("already Exist");
        }
        
    }

    handleChange(event) {
        // console.log(event.target.type)
        // console.log(event.target);
        const {name, value, type, checked} = event.target
        // console.log(name, value, type, checked);
        
        if(type === "switch") {
            this.setState({
                [name]: value
            })
        }
        else {
            type === "checkbox" ? 
                this.setState({
                    [name]: checked
                })
            :
            this.setState({
                [name]: value
            })
        }
        
        // console.log(this.state);
    }

    handleSubmit() {
        const { step } = this.state;
        this.setState({
            step: step+1
        })
        console.log(this.state);
    }
    prevStep() {
        console.log("Back");
        const { step } = this.state;
        this.setState({
            step: step-1
        })
    }
    updateInfo(data) {
        const login = data.login
        this.setState({
            data
            
        })
        const { step } = this.state;
        this.setState({
            step: step+1
        })
        this.setState({
            login: login
        })
        console.log(this.state);
        
    }



    
    render() {
        console.log("bgImage");
        return (
            <div id="formContainer" style={{backgroundImage: `url(${this.state.bgImage})`}}>
            
            <SjtContainer/>
            {/* <div> */}
            <Router>
                <Switch>
                    <Route path="/" exact >
                            <UserLogin 
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                updateInfo={this.updateInfo}
                                data={this.state.adminLogin}
                                changeBgImage={this.changeBgImage}
                                bgImage={this.state.bgImage}
                            />
                    </Route>
                    <Route path="/passwordReset">
                        <div className="formWrap">
                        <PasswordReset />
                        </div>
                    </Route>
                    <Route path="/dashboard" exact>
                        {/* <div className="formWrap"> */}
                            <CompaniesList
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                data={this.state}
                                changeBgImage={this.changeBgImage}
                                bgImage={this.state.bgImage}
                            />
                        {/* </div> */}
                    </Route>
                    {/* Signup mockup */}
                    <Route path="/company">
                            {/* <button onClick={this.prevStep}>Back</button> */}
                            <CreateCompanies
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                data={this.state}
                                changeBgImage={this.changeBgImage}
                                bgImage={this.state.bgImage}
                            />
                    </Route>
                    {/* Signup mock */}
                    <Route path="/user">

                        <div className="formWrap">
                            <h1>Register User</h1>
                            {/* <button onClick={this.prevStep}>Back</button> */}
                            <RegisterUser
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                data={this.state}
                            />
                        </div>
                    </Route>
                    <Route path="/client">
                            {/* <button onClick={this.prevStep}>Back</button> */}
                            <AddClients
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                data={this.state}
                                changeBgImage={this.changeBgImage}
                                bgImage={this.state.bgImage}
                            />
                    </Route>
                    <Route path="/campaign">
                            {/* <button onClick={this.prevStep}>Back</button> */}
                            <CreateCampaigns
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                data={this.state}
                                changeBgImage={this.changeBgImage}
                                bgImage={this.state.bgImage}
                            />
                    </Route>
                    {/* Choose game category & context  */}
                    <Route path="/campaignConfig">
                        <div>
                            {/* <button onClick={this.prevStep}>Back</button> */}
                            <CampaignConfig
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                data={this.state}
                                changeBgImage={this.changeBgImage}
                                bgImage={this.state.bgImage}
                            />
                        </div>
                    </Route>
                    {/* Mockup available for this*/}
                    <Route path="/registrationFields">
                            <RegistrationFields
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                onChangeRegistrationFields= {this.onChangeRegistrationFields}
                                onCheckAllChangeRegistrationFields = {this.onCheckAllChangeRegistrationFields}
                                data={this.state}
                                changeBgImage={this.changeBgImage}
                                bgImage={this.state.bgImage}
                            />
                    </Route>
                    
                    <Route path="/competencies">
                            <AddCompetencies
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                onClickCompetenciesItem={this.onClickCompetenciesItem}
                                onClickClear={this.onClickClear}
                                onClickClose = {this.onClickClose}
                                onSortEnd = {this.onSortEnd}
                                data={this.state}
                                changeBgImage={this.changeBgImage}
                                bgImage={this.state.bgImage}
                            />
                    </Route>

                    <Route path="/clientDashboard">
                            <ClientDashboard
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                data={this.state}
                                changeBgImage={this.changeBgImage}
                                bgImage={this.state.bgImage}
                            />
                    </Route>

                  

                    <Route path="/invite">
                        <Invite 
                            data={this.state}
                        />
                    </Route>

                    <Route path="/uiElements">
                            <UiElements
                               handleChange={this.handleChange}
                               handleSubmit={this.handleSubmit}
                               updateInfo={this.updateInfo}
                               data={this.state.adminLogin}
                            />
                    </Route>

                </Switch>
            </Router>
            </div>
        );
    }
}


export default FormContainer;