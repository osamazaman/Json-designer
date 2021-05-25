import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form,Dropdown,Menu, Button, Row, Col, Input, Select, Collapse,message} from 'antd';
import {PlusOutlined} from '@ant-design/icons'

import '.././Sjt.css';

const { Option } = Select;  
const { Panel } = Collapse;
const { TextArea } = Input;

const validateMessages = {
    required: 'Please input your ${name}!',
    types: {
      email: '${name} is not validate email!',
      number: '${name} is not a validate number!', 
      website: '${name} is not a valid website!'
    }
  };



function Scene(props) {

    const menuOne = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="scene">
                Scene
            </Menu.Item>
            <Menu.Item key="naration">
                Naration
            </Menu.Item>
            <Menu.Item key="empty">
                Empty
            </Menu.Item>
        </Menu>
      );
    
      function handleSave(values,selected){
        props.update(values,props.index,"Scene")
        message.success("Saved.")
        
    }

      const onFinish = (values) => {
        console.log(values);
        handleSave(values);
      }

      function handleMenuClick(selected){
        props.add(selected.key, props.index)
        message.success("Scene created.")
    }

      function handleDel(){
          props.del(props.index)
          message.success("Deleted successfully")
      }


    return (
      <div className="Scenes">
        <Dropdown.Button
          overlay={menuOne}
          style={{ float: "right" }}
          icon={<PlusOutlined />}
        ></Dropdown.Button>

        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          {/* <Form.Item
                                name="type"
                                >
                                <Row>
                                    <div className="myLabel"><span style={{width:120}}>Type</span></div>
                                    <Select
                                        defaultValue={props.val.id}
                                        style={{width:180}}
                                        placeholder="Scene type"
                                        allowClear
                                    >
                                        <Option value={props.val.id}>{props.val.id}</Option>
                                    </Select>

                                </Row>
                                </Form.Item> */}

          <Form.Item name="speakerName" label="Speaker name" colon={false}>
            <Input
              placeholder="Speaker Name"
              style={{ width: 180 }}
              defaultValue={props.val.interactivePanel.title}
            />
          </Form.Item>

          <Form.Item name="speakerImage" label="Speaker Image" colon={false}>
            <Select
              showSearch
              filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
              defaultValue={props.val.interactivePanel.imageId}
              style={{ width: 180 }}
              placeholder="Speaker thumbnail"
              allowClear
            >
              {props.images.map((item, index) =>
                item.url.includes(".png") ? (
                  <Option key={`${index}`} value={item.url}>
                    {item.url}
                  </Option>
                ) : (
                  <> </>
                )
              )}

              {/* <Option value={props.val.thoughtBubble.imageId}>{props.val.thoughtBubble.imageId}</Option> */}
            </Select>
          </Form.Item>

          <Form.Item name="dialogue" value={props.val.interactivePanel.text}>
            <div style={{ display: "inline" }}>
              <Row>
                <div className="myLabel" style={{ width: 102 }}>
                  <span>Dialogue</span>
                </div>
                {/* <Input className="InputDialogue"
                                        defaultValue={props.val.interactivePanel.text}
                                        placeholder="asd"
                                        style={{width:650}}
                                     /> */}
                <TextArea
                  style={{ width: 700, height: 3 }}
                  rows={1}
                  id="dialogue"
                  defaultValue={props.val.interactivePanel.text}
                  placeholder="Write dialogue here"
                  className="InputDialogue"
                  showCount
                  maxLength={180}
                />
              </Row>
            </div>
          </Form.Item>

          <Form.Item name="desktopImage" label="Desktop Image" colon={false}>
            <Select
            showSearch
              filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
              style={{ width: 180 }}
              placeholder="Desktop image"
              defaultValue={props.val.imageIdHorizontal}
              allowClear
            >
              {props.images.map((item, index) =>
                item.url.includes("png") ? (
                  <Option key={`${index}`} value={item.url}>
                    {item.url}
                  </Option>
                ) : (
                  <> </>
                )
              )}

              {/* <Option value={props.val.thoughtBubble.imageId}>{props.val.thoughtBubble.imageId}</Option> */}
            </Select>
          </Form.Item>

          <Form.Item name="mobileImage" label="Mobile Image" colon={false}>
            <Select
              showSearch
              filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
              style={{ width: 180 }}
              placeholder="mobile image"
              allowClear
              defaultValue={props.val.imageId}
            >
              {props.images.map((item, index) =>
                item.url.includes("png") ? (
                  <Option key={`${index}`} value={item.url}>
                    {item.url}
                  </Option>
                ) : (
                  <> </>
                )
              )}

              {/* <Option value={props.val.thoughtBubble.imageId}>{props.val.thoughtBubble.imageId}</Option> */}
            </Select>
          </Form.Item>

          <div>
            <Form.Item>
              <Row>
                <Col offset={22}>
                  <Button
                    htmlType="submit"
                    style={{ backgroundColor: "green" }}
                    type="primary"
                  >
                    Save
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </div>

          <div>
            <Form.Item>
              <Row>
                <Col offset={22}>
                  <Button
                    onClick={handleDel}
                    style={{ backgroundColor: "red" }}
                    type="primary"
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </div>
        </Form>
      </div>
    );
}

export default Scene;