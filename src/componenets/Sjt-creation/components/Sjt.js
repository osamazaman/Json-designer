import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {PlusOutlined} from '@ant-design/icons'
import { Form,Dropdown,Menu, Button, Row, Col, Input, Select, Collapse,Modal, Avatar, Image, message} from 'antd';
import '.././Sjt.css';

const { Option } = Select;  
const { Panel } = Collapse;
const { TextArea } = Input;

  function callback(key) {
    console.log(key);
  }

  function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../../../assets/SjtCharacters/', false, /\.(png|jpe?g|svg)$/));
  

const validateMessages = {
    required: 'Please input your ${name}!',
    types: {
      email: '${name} is not validate email!',
      number: '${name} is not a validate number!', 
      website: '${name} is not a valid website!'
    }
  };
  
  function SjtComponent(props) {
      
    const menuOne = (
        // This part is for adding new scene.
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="scene">
                Scene
            </Menu.Item>
        </Menu>
      );

      function handleMenuClick(selected){
       // This part is for adding new scene.
        props.add(selected.key, props.index)
        message.success("Scene created.")
      }

      function handleSave(values,selected){
        // This part updates the sjt json in the state when save button is pressed. 
        // close accordion or display modal that says saved.
        props.update(values,props.index,"Sjt")
      }

      const onFinish = (values) => {
          // This is middleware for when the form is filled.
        console.log(values);
        handleSave(values);
      };

      
      return (
        // This is basically the front end part / UI part of the code.

        <div className="accordionn">
          <Row>
            <Col span={24}>
              <Dropdown.Button
                overlay={menuOne}
                style={{ float: "right" }}
                icon={<PlusOutlined />}
              ></Dropdown.Button>

              <div className="Scenes">
                <Form
                  name="basic"
                  rules={{ remember: true }}
                  validateMessages={validateMessages}
                  onFinish={onFinish}
                >
                  <Form.Item name="type">
                    <Row>
                      <div className="myLabel" style={{ width: 100 }}>
                        <span>Type</span>
                      </div>
                      <Select
                        defaultValue={props.val.id}
                        style={{ width: 180 }}
                        onChange={props.changeAccordionType}
                        placeholder="Scene type"
                        allowClear
                      >
                        <Option value={props.val.id}>{props.val.id}</Option>
                      </Select>
                    </Row>
                  </Form.Item>

                  <Form.Item
                    name="speakerName"
                    label="Speaker name"
                    colon={false}
                  >
                    <Input
                      placeholder="Speaker Name"
                      style={{ width: 180 }}
                      defaultValue={props.val.speakerName}
                    />
                  </Form.Item>

                  <Form.Item
                    name="speakerImage"
                    label="Speaker Image"
                    colon={false}
                  >
                    <Select
                      showSearch
                      placeholder="Speaker thumbnail"
                      style={{ width: 180 }}
                      allowClear
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
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
                    {/* <Avatar size={80}  src={<Image src={imageSelected} />} /> */}
                  </Form.Item>

                  <Form.Item name="dialogue" value={props.val.dialogue}>
                    <Row>
                      <div className="myLabel">
                        <span style={{ width: 180 }}>Dialogue</span>
                      </div>

                      <TextArea
                        defaultValue={props.val.thoughtBubble.text}
                        style={{
                          width: 928,
                          height: 3,
                          paddingLeft: 28,
                          paddingTop: 5,
                        }}
                        rows={1}
                        id="dialogue"
                        placeholder="Write dialogue here"
                        className="sjtOptions"
                        showCount
                        maxLength={180}
                      />
                    </Row>
                  </Form.Item>

                  <div className="options-section" style={{ marginTop: 40 }}>
                    <span id="optionsText"> Options </span>
                    <div id="optionss">
                      <div style={{ paddingBottom: 10 }}>
                        <Form.Item name="optionOne" value={props.val.optionOne}>
                          <Row>
                            <div className="optionNumbers">
                              <span>i</span>
                            </div>
                            <Input
                              className="sjtOptions"
                              placeholder="option i"
                              style={{ width: 900 }}
                              defaultValue={
                                props.val.interactivePanel.options["0"].text
                              }
                            />
                          </Row>
                        </Form.Item>
                      </div>

                      <div style={{ paddingBottom: 10 }}>
                        <Form.Item name="optionTwo" value={props.val.optionTwo}>
                          <Row>
                            <div className="optionNumbers">
                              <span>ii</span>
                            </div>
                            <Input
                              className="sjtOptions"
                              placeholder="option ii"
                              style={{ width: 900 }}
                              defaultValue={
                                props.val.interactivePanel.options["1"].text
                              }
                            />
                          </Row>
                        </Form.Item>
                      </div>

                      <div style={{ paddingBottom: 10 }}>
                        <Form.Item
                          name="optionThree"
                          value={props.val.optionThree}
                        >
                          <Row>
                            <div className="optionNumbers">
                              <span>iii</span>
                            </div>
                            <Input
                              className="sjtOptions"
                              placeholder="option iii"
                              style={{ width: 900 }}
                              defaultValue={
                                props.val.interactivePanel.options["2"].text
                              }
                            />
                          </Row>
                        </Form.Item>
                      </div>

                      <div style={{ paddingBottom: 10 }}>
                        <Form.Item
                          name="optionFour"
                          value={props.val.optionFour}
                        >
                          <Row>
                            <div className="optionNumbers">
                              <span>iv</span>
                            </div>
                            <Input
                              className="sjtOptions"
                              placeholder="option iv"
                              style={{ width: 900 }}
                              defaultValue={
                                props.val.interactivePanel.options["3"].text
                              }
                            />
                          </Row>
                        </Form.Item>
                      </div>
                    </div>
                  </div>

                  <Form.Item
                    name="desktopImage"
                    label="Desktop Image"
                    colon={false}
                  >
                    <Select
                      showSearch
                      style={{ width: 180 }}
                      placeholder="Desktop image"
                      allowClear
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
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

                  <Form.Item
                    name="mobileImage"
                    label="Mobile Image"
                    colon={false}
                  >
                    <Select
                      showSearch
                      style={{ width: 180 }}
                      placeholder="mobile image"
                      allowClear
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
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
                        <Col offset={21}>
                          <Button
                            htmlType="submit"
                            style={{ backgroundColor: "green" }}
                            type="primary"
                          >
                            Save
                          </Button>
                          {/* onClick={props.setModal1Visible} 
                                                        <Modal
                                                        style={{top:10}}
                                                        title="Preview"
                                                        visible={props.data.modal1Visible}
                                                        onOk={() => props.setModal1Visible(false)}
                                                        onCancel={() => props.setModal1Visible(false)}
                                                        >
                                                        <div><p>Saved</p></div>
                                                        
                                                    </Modal> */}
                        </Col>
                      </Row>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      );
}

export default SjtComponent;