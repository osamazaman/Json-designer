import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {  useHistory  } from "react-router-dom";
import { Form, Button, Row, Col, Input, Select, Upload, message, Collapse, Avatar} from 'antd';
import {EditOutlined,LoadingOutlined, PlusCircleOutlined, PlusOutlined, UserOutlined} from '@ant-design/icons';
import '.././Sjt.css';

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

  function AptitudeComponent(){
      return(
  <div className="Scenes">
  <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
  >

          <div id="optionss">
              <div>
                  <Row>
                      <Col span={24}>
                      <div className="aptitudeLabel"><span>Question</span></div>
                      <Input className="sjtOptions" placeholder="Question 01" style={{ width: 1000, marginTop:3 }} />
                      </Col>
                  </Row>
              </div>
          </div>

          <div className="options-section">
              <span id="optionsText"> Options </span>
              <div id="optionss">
                  <div>
                      <Row>
                          <div className="optionNumbers"><span>i</span></div>
                          <Input className="sjtOptions" placeholder="option i" style={{ width: 400 }} />
                      </Row>
                  </div>

                  <div>
                      <Row>
                          <div className="optionNumbers"><span>ii</span></div>
                          <Input className="sjtOptions" placeholder="option ii" style={{ width: 400 }} />
                      </Row>
                  </div>

                  <div>
                      <Row>
                          <div className="optionNumbers"><span>iii</span></div>
                          <Input className="sjtOptions" placeholder="option" style={{ width: 400 }} />
                      </Row>
                  </div>

                  <div>
                      <Row>
                          <div className="optionNumbers"><span>iv</span></div>
                          <Input className="sjtOptions" placeholder="option" style={{ width: 400 }} />
                      </Row>
                  </div>
              </div>
          </div>


      <div>
          <Row>
              <Col span="12">
                  <span>Background Image</span>

                  <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      // showUploadList={false}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  >
                      <PlusOutlined />                                                </Upload>

              </Col>
          </Row>
      </div>
  </Form>

  <div>
      <Row>
          <Col offset={20}>
              <Button type="primary" href="/">Add</Button>
              <Button style={{ backgroundColor: "red" }} type="primary" href="/">Delete</Button>
          </Col>
      </Row>
  </div>
</div>
      )}

  export default AptitudeComponent;