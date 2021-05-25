// campaignName
// campaignTitle
// campaignDescription
// campaignStartDate
// campaignEndDate
// campaignActive
// campaignclientId

import React, {useEffect} from 'react';
import 'antd/dist/antd.css';
import {  DatePicker,Form, Input, Button, Select } from 'antd';
import { useHistory  } from "react-router-dom";
import signupBG from '../../assets/backgroundImages/signupBg.png';


const { Option } = Select;

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 5 },    
};
const tailLayout = {
    wrapperCol: { offset: 0, span: 5 },
};

const validateMessages = {
    required: 'Please input your ${name}!',
    types: {
      email: '${name} is not validate email!',
      number: '${name} is not a validate number!', 
    }
  };



function CreateCampaigns(props) {

    useEffect(() => {
        // Update the document title using the browser API

    
        props.changeBgImage(signupBG);
    },[props.bgImage]);

    const history = useHistory();
    const onFinish = (values) => {
        console.log('Success:', values);
        // props.updateInfo({name:'adminLogin',values:values});
        history.push('/campaignConfig');
      };
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

    if(!localStorage.getItem('login'))history.push('/');
    
    return (
        <div className="myContainer">
            <div>
                <span className="myTitle">Create new campaign</span>
            </div>
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            validateMessages={validateMessages}
        >  
            <span className="spanStyling"> Campaign Name </span>
            <Form.Item
                rules={[{ required: true }]}
                name="campaignName"
                value={props.data.campaignName}
                onChange={props.handleChange}
                placeholder="Name"
            >
                <Input placeholder="Name" className="input-style"/>
            </Form.Item>

            <span className="spanStyling"> Campaign title</span>
            <Form.Item
                rules={[{ required: true }]}
                name="campaignTitle"
                value={props.data.campaignTitle}
                onChange={props.handleChange}
                placeholder="Title"

            >
                <Input placeholder="Title" className="input-style"/>
            </Form.Item>
            <span className="spanStyling">Description</span>
            <Form.Item
                rules={[{ required: true }]}
                name="campaignDescription"
                value={props.data.campaignDescription}
                onChange={props.handleChange}
                placeholder="Description"

            >
                <Input placeholder="Description" className="input-style"/>
            </Form.Item>
            <span className="spanStyling"> Campaign Start Date</span>
            <Form.Item
                className="Dpicker"
                rules={[{ required: true }]}
                name="campaignStartDate"
                value={props.data.campaignStartDate}
                onChange={props.handleChange}
                placeholder="Start-Date"

            >
                <DatePicker className="Dpicker" />
            </Form.Item>
            <span className="spanStyling">Campaign End Date</span>
            <Form.Item
                rules={[{ required: true }]}
                name="campaignEndDate"
                value={props.data.campaignEndDate}
                onChange={props.handleChange}
                placeholder="End Date"

            >
                <DatePicker className="Dpicker" />
            </Form.Item>
            <span className="spanStyling">Status</span>
            <Form.Item
                rules={[{ required: true }]}
                name="campaignStatus" //DropDown or Radio Button 
                value={props.data.campaignStatus} //DropDown or Radio Button 
                onChange={props.handleChange}
                placeholder="Active/Deactive"

            >
                 <Select
                    placeholder="Active Status"
                    // onChange={this.in}
                    allowClear
                >
                    <Option value="Active">Active</Option>
                    <Option value="Deactive">Deavtive</Option>
                </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button id="nextBtn" type="primary" htmlType="submit">
                    Create Campaign
        </Button>
            </Form.Item>
        </Form>
        </div>
        
    );
}


export default CreateCampaigns;