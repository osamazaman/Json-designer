import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {  useHistory  } from "react-router-dom";
import { Form, Button, Row, Col, Input, Select, Upload, message, Collapse, Avatar} from 'antd';
import {EditOutlined,LoadingOutlined, PlusCircleOutlined,PlusOutlined, UserOutlined} from '@ant-design/icons';
import './Sjt.css';
import AptitudeComponent from './components/AptitudeComponent';

const { Option } = Select;
const { Panel } = Collapse;

const layout = {
    wrapperCol: { span: 5 },    
};

const tailLayout = {
    wrapperCol: { offset: 0, span: 0 },
};

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }


  function callback(key) {
    console.log(key);
  }


const validateMessages = {
    required: 'Please input your ${name}!',
    types: {
      email: '${name} is not validate email!',
      number: '${name} is not a validate number!', 
      website: '${name} is not a valid website!'
    }
  };


function ApptitudeMap(props){
      const {imageUrl,loading} = useState('');

      const history = useHistory();

      if (!localStorage.getItem('login')) history.push('/');

return (
    <div className="myContainer">

        <div className="accordionn">
        <Row>
            <Col span={24}>
                <Collapse defaultActiveKey={['0']} onChange={callback} className="accordionRight">
                    <Panel header="Question:01" className="panelHeaders" key="1">
                        <AptitudeComponent/>
                    </Panel>

                    <Panel header="Question:02" className="panelHeaders" key="2">
                     <AptitudeComponent/>
                    </Panel>
                    <Panel header="Question:03" className="panelHeaders" key="3">
                     <AptitudeComponent/>
                    </Panel>

                    <Panel header="Question:04" className="panelHeaders" key="4">
                     <AptitudeComponent/>
                    </Panel>

                    <Panel header="Question:05" className="panelHeaders" key="5">
                     <AptitudeComponent/>
                    </Panel>

                    <Panel header="Question:06" className="panelHeaders" key="6">
                     <AptitudeComponent/>
                    </Panel>

                    <Panel header="Question:07" className="panelHeaders" key="7">
                     <AptitudeComponent/>
                    </Panel>

                    <Panel header="Question:08" className="panelHeaders" key="8">
                     <AptitudeComponent/>
                    </Panel>

                </Collapse>
            </Col>
        </Row>
        </div>
        <div className="footerBtns">
        <Row>
            <Col span={24}>
        <Button type="primary" htmlType="submit" id="myBtn">
            Preview
        </Button>

        <Button type="primary" htmlType="submit" id="nextSjtBtn" href="/sjt-home">
            Next
        </Button>
            </Col>
        </Row>
        </div>

    </div>

     
);
}

export default ApptitudeMap;