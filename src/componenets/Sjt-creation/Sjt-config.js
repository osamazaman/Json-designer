import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Form,Tag, Button, Row, Col, Tooltip, Input, Select,DatePicker } from 'antd';
import {PlusOutlined,DeleteOutlined, EditOutlined,UploadOutlined,EyeOutlined,PieChartOutlined} from '@ant-design/icons';
import {  useHistory  } from "react-router-dom";
import './Sjt.css';
import axios from 'axios';
import Sjtinfo from './Sjt-info';
import TextArea from 'antd/lib/input/TextArea';


const { Option } = Select;

const { CheckableTag } = Tag;

const tagsData = ['Competency', 'Quantitative', 'Tag1', 'Tag2'];

function SjtConfig(props) {

    

    const [selectedTags,setselectedTags] = useState('Competency')
    const history = useHistory();
    
    const onFinish = (values) => {
        console.log("data mf", values);
        
        let compId = localStorage.getItem('competencyId');

        axios.post('http://localhost:3000/competencies/create', {
        // data to be sent
        sjtTitle: values.Sjt_title,
        sjtName: values.Sjt_title,
        language:values.Language,
        description: values.Description,
        type : values.Type,
        category: values.Category,
        competencyId: compId
        })
        .then(response => {
            console.log(response);
            return response;
        }).catch(error => {
            console.log(error)
        });
          
          
          props.updateConfig(values);
          history.push('/sjt-upload');
        // props.handleChange(values);
    };



      console.log("here")


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleChangeSjt=(tag, checked)=> {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
      };

      if (!localStorage.getItem('login')) history.push('/');

      const validateMessages = {
        required: 'Please input your ${name}!',
        types: {
            title: '${name} is not validate title!',
            number: '${name} is not a validate number!',
        }
    };

    
    const sjtContainer = (
      <div className="config-container">
        <Row>
          <Col span={21}>

            <Row>
              <div className="config-labels">
                <span> Company name</span>
                <Form.Item
                  rules={[{ required: true }]}
                  name="Company_name"
                  value={props.data.companyName}
                  onChange={props.handleChange}
                >
                  <Select
                    className="configDropdown"
                    placeholder="Company name"
                    allowClear
                  >
                    <Option value="Company1">KElectric</Option>
                    <Option value="Company2">EBM</Option>
                    <Option value="Company3">Foodpanda</Option>
                  </Select>
                </Form.Item>
              </div>
            </Row>

            <Row>
              <div className="config-labels">
                <span> Country</span>
                <Form.Item
                  rules={[{ required: true }]}
                  name="Country_name"
                  value={props.data.countryName}
                  onChange={props.handleChange}
                >
                  <Select
                    className="configDropdown"
                    placeholder="Country name"
                    allowClear
                  >
                    <Option value="Country1">Pakistan</Option>
                    <Option value="Country2">Turkey</Option>
                    <Option value="Country3">Bangladesh</Option>
                  </Select>
                </Form.Item>
              </div>
            </Row>

            <Row>
              <div className="config-labels">
                <span> Author name</span>
                <Form.Item
                  rules={[{ required: true }]}
                  name="name"
                  value={props.data.name}
                  onChange={props.handleChange}
                >
                  <Input placeholder="Eg: Oz" />
                </Form.Item>
              </div>
            </Row>

            <Row>
              <div className="config-labels">
                <span> SJT - Tower name</span>
                <Form.Item
                  rules={[{ required: true }]}
                  name="Sjt_title"
                  type="title"
                  value={props.data.name}
                  onChange={props.handleChange}
                >
                  <Input placeholder="Eg: New Horizon" />
                </Form.Item>
              </div>
            </Row>

            <Row>
              <div className="config-labels">
                <span>Date</span>
                <Form.Item
                  rules={[{ required: true }]}
                  name="Date"
                  value={props.data.date}
                  // defaultValue={moment()}
                  onChange={props.handleChange}
                >
                  <DatePicker />
                </Form.Item>
              </div>
            </Row>

            <Row>
              <div className="config-labels">
                <span> SJT - Name</span>
                <Form.Item
                  rules={[{ required: true }]}
                  name="Sjt_name"
                  value={props.data.sjtName}
                  onChange={props.handleChange}
                >
                  <Input placeholder="Eg: Innovation" />
                </Form.Item>
              </div>
            </Row>

            <Row>
              <div className="description-label">
                <span> Description </span>
                <Form.Item
                  rules={[{ required: true }]}
                  name="Description"
                  value={props.data.desc}
                  onChange={props.handleChange}
                >
                  <TextArea placeholder="Description" />
                </Form.Item>
              </div>
            </Row>

            <Row>
              <div className="config-labels">
                <span>Language</span>
                <Form.Item
                  rules={[{ required: true }]}
                  name="Language"
                  onChange={props.handleChange}
                >
                  <Select
                    className="configDropdown"
                    placeholder="Select"
                    allowClear
                  >
                    <Option value="English">English</Option>
                    <Option value="Urdu">اردو</Option>
                    <Option value="Turkish">Türk</Option>
                  </Select>
                </Form.Item>
              </div>
            </Row>

            <Row>
              <div className="config-labels">
                <span>Category</span>
                <Form.Item
                  rules={[{ required: true }]}
                  name="Category"
                  onChange={props.handleChange}
                >
                  <Select
                    className="configDropdown"
                    placeholder="Select"
                    allowClear
                  >
                    <Option value="Custom">Custom</Option>
                    <Option value="Standard">Standard</Option>
                  </Select>
                </Form.Item>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );


    const aptitudeContainer = (
            <div className="config-container">
                <Row>
                    <Col span={21}>

                        <Row>
                            <div className="config-labels">
                                <span> Author name</span>
                                <Form.Item
                                    rules={[{ required: true }]}
                                    name="Author_name"
                                    value={props.data.name}
                                >
                                    <Input placeholder="Eg: Oz" />
                                </Form.Item>
                            </div>

                            
                        </Row>

                        <Row>
                            <div className="config-labels">
                                <span> Aptitude - Title</span>
                                <Form.Item
                                    rules={[{ required: true }]}
                                    name="Aptitudetitle"
                                    value={props.data.title}
                                >
                                    <Input placeholder="Eg: New Horizon" />
                                </Form.Item>
                            </div>
                        </Row>

                        <Row>
                            <div className="config-labels">
                                <span> Number of questions</span>
                                <Form.Item
                                    rules={[{ required: true }]}
                                    name="Qnumbers"
                                    value={props.data.qNumbers}
                                >
                                    <Input placeholder="Eg: 10" />
                                </Form.Item>
                            </div>
                        </Row>


                        <Row>
                            <div className="config-labels">
                                <span>Score for each question</span>
                                <Form.Item
                                    rules={[{ required: true }]}
                                    name="score"
                                    value={props.data.score}
                                >
                                    <Input placeholder="Eg: 10" />
                                </Form.Item>
                            </div>
                        </Row>

                        <Row>
                            <div className="config-labels">
                                <span>Bucket type</span>
                                <Form.Item
                                    rules={[{ required: true }]}
                                    name="bucketType"

                                >
                                    <Select
                                        className="configDropdown"
                                        placeholder="Select"
                                        allowClear
                                    >
                                        <Option value="Easy">Easy</Option>
                                        <Option value="Medium">Medium</Option>
                                        <Option value="Hard">Hard</Option>
                                    </Select>
                                </Form.Item>
                            </div>

                            
                        </Row>

                        <Row>
                            <div className="config-labels">
                                <span>No: of correct answers to proceed</span>
                                <Form.Item
                                    rules={[{ required: true }]}
                                    name="correctAnswers"
                                >
                                    <Select
                                        className="configDropdown"
                                        placeholder="Select"
                                        allowClear
                                    >
                                        <Option value="3">3</Option>
                                        <Option value="4">4</Option>
                                        <Option value="5">5</Option>
                                    </Select>
                                </Form.Item>
                            </div>

                            
                        </Row>


                        <Row>
                            <div className="config-labels">
                                <span>Timer</span>
                                <Form.Item
                                    rules={[{ required: true }]}
                                    name="timer"
                                    value={props.data.timer}
                                >
                                    <Select
                                        className="configDropdown"
                                        placeholder="Select"
                                        allowClear
                                    >
                                        <Option value="30">30 seconds</Option>
                                        <Option value="60">60 seconds</Option>
                                        <Option value="90">90 seconds</Option>
                                    </Select>
                                </Form.Item>
                            </div>


                        </Row>

                        
                        <Row>
                            <div className="config-labels">
                                <span>Type</span>
                                <Form.Item
                                    rules={[{ required: true }]}
                                    name="aptitudeType"
                                    value={props.data.aptitudeType}
                                    onChange={props.handleChange}

                                >
                                    <Select
                                        className="configDropdown"
                                        placeholder="Select"
                                        allowClear
                                    >
                                        <Option value="Qualitative">Qualitative</Option>
                                        <Option value="op2">op2</Option>
                                        <Option value="op3">op3</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </Row>

                        
                    </Col>
                </Row>
            </div>
    );
    
    const sceneContainer = (
        <div className="config-container">
            <Row style={{marginTop:40, paddingLeft:1}}>
                            <div className="config-labels">
                                <span>Timer</span>
                                <Form.Item
                                    rules={[{ required: true }]}
                                    name="timer"
                                    value={props.data.timer}
                                >
                                    <Select
                                        className="configDropdown"
                                        placeholder="Select"
                                        allowClear
                                    >
                                        <Option value="30">30 seconds</Option>
                                        <Option value="60">60 seconds</Option>
                                        <Option value="90">90 seconds</Option>
                                    </Select>
                                </Form.Item>
                            </div>


                        </Row>
        </div>
    );

    var flag;

return (
    <div className="myContainer">

        <div className="Page-Header">   
            <Row>
                <Col span={5}><span className="myTitle h1">Configuration</span></Col>
            </Row>
        </div>

        <Row>
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            validateMessages={validateMessages}
        >  
            <div className="config-labels" style={{marginLeft:20}}>

                <span style={{marginLeft:10}}>Type</span>
            
                <Form.Item
                    rules={[{ required: true }]}
                    name="Type"
                    onChange={props.handleChange}
                    defaultValue={1}

                >
                    <Select
                        className="configDropdown"
                        style={{ marginLeft: 10 }}
                        placeholder="Select"
                        defaultActiveFirstOption
                        defaultOpen
                        // defaultValue="Sjt"
                        onChange={props.changeFlag}
                        allowClear
                        >
                            <Option value="1">Sjt</Option>
                            <Option value="2">Apptitude </Option>
                            <Option value="3">Scene </Option>
                        </Select>
                    </Form.Item>

                    <>
                        {props.data.flag == 1 ? sjtContainer : props.data.flag == 2 ? aptitudeContainer : sceneContainer}

                      {/* {{ if(props.data.flag == 1){
                            sjtContainer
                        } else if(props.data.flag == 2){
                            aptitudeContainer
                        } else {
                            sceneContainer
                        }}} */}

                    </>
                </div>

                <div style={{width:1040}}>
                <Row>
                    <Col span={24}>
                        <Form.Item>

                            <Button style={{float:'right'}} type="primary" htmlType="submit" id="myBtn">
                                Next
                     </Button>

                        </Form.Item>
                    </Col>
                </Row> 
                </div>
                    
            </Form>


        </Row>
        
    </div>
);
}

export default SjtConfig;