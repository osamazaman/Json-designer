import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker, Form, Input, Button, Select } from 'antd';
// import { FormInstance } from 'antd/lib/form';
import { useHistory } from "react-router-dom";
import Address from "./Address"

const { Option } = Select;

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
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
    wrapperCol: { offset: 5, span: 5 },
};

const validateMessages = {
    required: 'Please input your ${name}!',
    types: {
        email: '${name} is not validate email!',
        number: '${name} is not a validate number!',
    }
};

function RegisterUser(props) {
    const history = useHistory();
    const onFinish = (values) => {
        console.log('Success:', values);
        // props.updateInfo({name:'adminLogin',values:values});
        history.push('/client');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if(!localStorage.getItem('login'))history.push('/');

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            validateMessages={validateMessages}
        >

            <Form.Item
                label="Email"
                rules={[{ required: true, type: 'email' }]}
                name="userEmail"
                value={props.data.userEmail}
                onChange={props.handleChange}
                placeholder="Email"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                rules={[{ required: true }]}
                name="userPassword"
                value={props.data.userPassword}
                onChange={props.handleChange}
                placeholder="Password"

            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="Name"
                rules={[{ required: true }]}
                name="userName"
                value={props.data.userName}
                onChange={props.handleChange}
                placeholder="Name"

            >
                <Input />
            </Form.Item>
            <Form.Item
                label="First Name"
                rules={[{ required: true }]}
                name="userFirstname"
                value={props.data.userFirstname}
                onChange={props.handleChange}
                placeholder="FirstName"

            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Last Name"
                rules={[{ required: true }]}
                name="userLastname"
                value={props.data.userLastname}
                onChange={props.handleChange}
                placeholder="LastName"

            >
                <Input />
            </Form.Item>
            {/* <Form.Item
                label="Country"
                rules={[{ required: true }]}
                name="userCountry"
                value={props.data.userCountry}
                onChange={props.handleChange}
                placeholder="Country"

            >
                <Input />
            </Form.Item> */}

            <Address/>

{/* 
            <Form.Item
                label="Address"
                rules={[{ required: true }]}
                name="userAddress"
                value={props.data.userAddress}
                onChange={props.handleChange}
                placeholder="Address"

            >
                <Input />
            </Form.Item> */}
            <Form.Item
                label="Phone No:"
                rules={[{ required: true }]}
                name="userPhone"
                value={props.data.userPhone}
                onChange={props.handleChange}
                placeholder="Phone No:"

            >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                label="Date of Birth"
                rules={[{ required: true }]}
                name="userDob"
                value={props.data.userDob}
                onChange={props.handleChange}
                placeholder="Date of Birth"

            >
                <DatePicker />
            </Form.Item>
            <Form.Item
                label="Type"
                rules={[{ required: true }]}
                name="userType"
                value={props.data.userType}
                onChange={props.handleChange}
                placeholder="User Type"

            >
                <Select
                    // onChange={this.in}
                    allowClear
                >
                    <Option value="Admin">Admin</Option>
                    <Option value="Customer">Customer</Option>
                    <Option value="Applicant">Applicant</Option>
                </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Register User
        </Button>
            </Form.Item>
        </Form>


    );
}


export default RegisterUser;