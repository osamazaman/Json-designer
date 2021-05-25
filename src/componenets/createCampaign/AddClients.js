// companyId
// userId
// clientName
// clientEmail
// clientPhone
// clientBio

import React, {useEffect} from 'react';
import 'antd/dist/antd.css';
import {  Form, Input, Button, Select } from 'antd';
import {  useHistory } from "react-router-dom";
import addClientBG from '../../assets/backgroundImages/signupBg.png';

const { Option } = Select;

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select placeholder="+1" style={{ width: 70 }}>
            <Option value="92">+92</Option>
            <Option value="87">+87</Option>
        </Select>
    </Form.Item>
);

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 5 },
};
const tailLayout = {
    wrapperCol: { offset: 0, span: 4 },
};

const validateMessages = {
    required: 'Please input your ${name}!',
    types: {
        email: '${name} is not validate email!',
        number: '${name} is not a validate number!',
    }
};

function AddClients(props) {

    useEffect(() => {
        props.changeBgImage(addClientBG);
    },[props.bgImage]);

    const history = useHistory();
    const onFinish = (values) => {
        console.log('Success:', values);
        // props.updateInfo({name:'adminLogin',values:values});
        history.push('/campaign');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if(!localStorage.getItem('login'))history.push('/');
    
    return (
        <div className="myContainer">
            <div style={{marginBottom:25}}>
            <span style={{fontWeight:620, fontSize:18}}> Add Client</span>
            </div>
            <div>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    validateMessages={validateMessages}
                >
                    <span className="spanStyling">Name</span>
                    <Form.Item
                        rules={[{ required: true }]}
                        name="name"
                        value={props.data.name}
                        onChange={props.handleChange}

                    >
                        <Input className="input-style" placeholder="Name" />
                    </Form.Item>

                    <span className="spanStyling">Email</span>
                    <Form.Item
                        rules={[{ required: true, type: "email" }]}
                        name="email"
                        value={props.data.email}
                        onChange={props.handleChange}
                        placeholder="Email"
                    >
                        <Input className="input-style" placeholder="someone@thetalentgames.com" />
                    </Form.Item>

                    <span className="spanStyling">Phone no:</span>
                    <Form.Item
                        rules={[{ required: true }]}
                        name="phone"
                        value={props.data.phone}
                        onChange={props.handleChange}
                        placeholder="Phone No:"
                    >
                        <Input className="input-style" addonBefore={prefixSelector} placeholder="1234567" />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                    <Button id="nextBtn" htmlType="submit" className="login-form-button">
                                Next
                            </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}


export default AddClients;