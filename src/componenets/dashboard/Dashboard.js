import React,{useEffect} from 'react';
import 'antd/dist/antd.css';
import { List, Avatar, Button, Input, Card } from 'antd';
import { useHistory } from "react-router-dom";
import './companies.css';
import listCompanies from '../../services/listCompanies'
import { Row, Col } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import dashboardBg from '../../assets/backgroundImages/dashboardBg.png';
import Search from 'antd/lib/transfer/search';
import mySearch from '../../componenets/createCampaign/Search';




function CompaniesList(props) {
  
  const { Meta } = Card;

  useEffect(() => {
    // Update the document title using the browser API
    props.changeBgImage(dashboardBg);
  },[props.bgImage]);
  
  const history = useHistory();
  const onFinish = (values) => {
    // console.log('Success:', values);
    // props.updateInfo({name:'adminLogin',values:values});
    history.push('/company');
  };

  const addCampaign = (values) => {

    history.push('/campaign');
  }

  if (!localStorage.getItem('login')) history.push('/');
  
  return (


    <div className="myContainer">
      

        <div className="myTitle inline-row"><span> The Talent Games </span></div>

      {/* <div style={{ width: 570, backgroundColor: "red" }} className="inline-row headerSpacing"> */}
        <div className="inline-row" style={{ width: 240 }}>
          <span className="numberss"> 7 </span> 
          <span className="headers"> Campaigns </span>
        </div>
        
        <div className="inline-row" style={{ width: 130 }}>
          <span className="numberss"> 2 </span>
          <span className="headers"> Live </span>
        </div>
        
        <div className="inline-row" style={{ width: 240 }}>
          <span className="numberss"> 125,342 </span>
          <span className="headers"> Candidates </span>
        </div>
      {/* </div> */}

       

      {/* companyItem Start*/}
      <div id="company-container">

      <mySearch/>
      <div className="searchBar">
          {/* <Input style={{width:200}}placeholder="Search Campaign Name" prefix={<SearchOutlined className="site-form-item-icon" />} /> */}
          <Button type="primary" href="/company" style={{borderRadius: 5, float:"right", display:"block"}}> Add new Company</Button>
      </div> 

        {
          listCompanies.map((company, companyIndex) => (
              <div className="items">
              <div id="company-heading" className="inline-row subHeading" style={{ marginTop: 30, marginLeft:20, width:650}}>
                {/* Company name and avatar start */}
                <div className="inline-row" style={{width:210}}>
                <span>
                  <Avatar src={company.src}  height="30"/>
                  <span className="subHeading"></span> {company.title} </span>
                </div>
                {/* Company name and avatar end */}
                <div id="company-details">
                  <div className="inline-row company-det"><span className="subRow">{company.campaign} Campaign </span></div>
                  <div className="inline-row company-det"><span className="subRow ">{company.liveCampaign} Live </span></div>
                  <div className="inline-row company-det"><span className="subRow ">{company.candidates} Candidates </span></div>
                </div>
              </div>

              <div id="campaign-container" className="site-card-wrapper">

                <Row id="company-items">

                  {/* CampaignItem Start*/}

                  {company.campaigns.map((campaign, campaignIndex) => (


                    <div className="campaign-item">
                    <Col style={{margin:20}} xs={8} xl={28}>

                      <Card
                        style={{width: 200}}
                        cover={
                          <img
                            className="cardImage"
                            alt="example"
                            src="..\..\assets\Game Creation Portal Exports\thumbnail.png"
                          />
                        }
                      >

                        <Meta
                          title={campaign.name}
                          description={campaign.description}
                        />

                        <Row gutter={20}>
                          <Col className="Col-icon">
                            <img
                              src="..\..\assets\Game Creation Portal Exports\Asset 16.png"
                              height="30"
                              className="cardIcons"
                            />
                            <span style={{fontSize:9}}> Behaviour</span>
                          </Col>

                          <Col className="Col-icon">
                            <img
                              src="..\..\assets\Game Creation Portal Exports\Asset 17.png"
                              height="30"
                              className="cardIcons"
                            />
                            <span style={{fontSize:9}}> Cognitive Abilities</span>
                          </Col>

                          <Col className="Col-icon" >
                            <img
                              src="..\..\assets\Game Creation Portal Exports\Asset 18.png"
                              height="30"
                              className="cardIcons"
                            />
                            <span style={{fontSize:9}}> Apptitude</span>
                          </Col>

                        </Row>
                        
                        <Row gutter={10} className="fiveIcons">
                          <Col className="Col-icon">
                            <img
                              src="..\..\assets\Game Creation Portal Exports\Asset 19.png"
                              height="15"
                              className="cardIcons"
                            />
                          </Col>

                          <Col className="Col-icon">
                            <img
                              src="..\..\assets\Game Creation Portal Exports\Asset 20.png"
                              height="15"
                              className="cardIcons"
                            />
                          </Col>

                          <Col className="Col-icon">
                            <img
                              src="..\..\assets\Game Creation Portal Exports\Asset 21.png"
                              height="15"
                              className="cardIcons"
                            />
                          </Col>

                          <Col className="Col-icon">
                            <img
                              src="..\..\assets\Game Creation Portal Exports\Asset 22.png"
                              height="15"
                              className="cardIcons"
                            />
                          </Col>

                          <Col className="Col-icon">
                            <img
                              src="..\..\assets\Game Creation Portal Exports\Asset 23.png"
                              height="15"
                              className="cardIcons"
                            />
                          </Col>
                        </Row>
                      </Card>

                    </Col>
                    </div>
                  ))
                  }
                  {/* CampaignItem End */}

                </Row>

              </div>
            </div>

          ))
        }

        {/* companyItem End*/}
      </div>



    </div>






















  
  );
}

export default CompaniesList;