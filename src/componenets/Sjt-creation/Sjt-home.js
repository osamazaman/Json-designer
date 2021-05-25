import React, { useCallback, useEffect } from "react";
import "antd/dist/antd.css";
import { Table,Badge, Button, Row, Col,Menu, Dropdown,Input, Space,Modal, Select} from 'antd';
import {DeleteOutlined,HistoryOutlined, EditOutlined,UploadOutlined,SearchOutlined,EyeOutlined,PieChartOutlined,DownOutlined} from '@ant-design/icons';
import {  useHistory  } from "react-router-dom";
import Highlighter from 'react-highlight-words';
import SjtMap from './Sjt-map';
import './Sjt.css';
import axios from "axios";


const { Option } = Select;
function SjtHome(props){  


  const menu =(val)=> (
    <Menu>

    <Menu.Item>
      <div onClick={
          console.log(val)
        }>
        <a>
          <EyeOutlined />
          <span> View</span>
        </a>
      </div>
    </Menu.Item>
      
      <Menu.Item>
            <>
                <a>
                    <EditOutlined/>
                    <span> Edit</span>
                </a>
            </>
      </Menu.Item>
      <Menu.Item>
            <>
                <a>
                    <UploadOutlined/>
                    <span> Publish</span>
                </a>
            </>
      </Menu.Item>
      
      <Menu.Item>
            <>
                <a>
                    <PieChartOutlined/>
                    <span> Analytics</span>
                </a>
            </>
      </Menu.Item>
      <Menu.Item>
            <>
                <a href="/sjt-history">
                    <HistoryOutlined />
                    <span> History</span>
                </a>
            </>
      </Menu.Item>

      <Menu.Item>
        <>
          <span>Approve</span>
        </>
      </Menu.Item>

      <Menu.Item>
            <>
                <a>
                    <DeleteOutlined/>
                    <span> Delete</span>
                </a>
            </>
      </Menu.Item>
    </Menu>
  );

  const onExpand=  (expanded, record)=>{
    console.log("onExpand", expanded, record);
  }

   useEffect(() => {
      // this part fetches json from api (api calling) 
      console.log("here ", props.data.json);

        // if(props.data.json == undefined) {  
          const apiCallRequest = {
              url: 'http://localhost:8080/testData/homeData.json',
              data: {
                  // data to be sent
                
              },
              config: {
                  
              }
            }
          
          axios.get(apiCallRequest.url)
          .then(res => {
            console.log("where",res)
            if(res.data != undefined)
              props.updateHomepage(res.data);
          })
        // }

    },[])



  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  

    const expandedRowRender = (sjtList) => {

      console.log("sjt list", sjtList);

      
      const columns = [
        { 
          title: "Language",
          dataIndex: "lang",
          key: "lang"
        },
        { title: "Date",
          dataIndex: "date",
          key: "date"
        },
        { 
          title: "Campaign",
          dataIndex: "campaign", 
          key: "campaign" 
        },
        { 
          title: "Type", 
          dataIndex: "type", 
          key: "type" 
        },
        { title: "Approved by",
          dataIndex:"approvedBy",  
          key:"Approved By"
        },
        { 
          title: "Approved on", 
          dataIndex:"approvedOn",  
          key:"Approved On"
        },
        { 
          title: "Status", 
          dataIndex:"status",  
          key:"Status"
        },
        {
          title: "Action",
          dataIndex: "operation",
          key: "operation",
          render: () => (
            <span className="table-operation">
              <Dropdown click overlay={menu}>
                <a click>
                  More <DownOutlined />
                </a>
              </Dropdown>
            </span>
          )
        }
      ];

      //  console.log("sjtList check", sjtList)
        return <Table columns={columns} dataSource={sjtList.config} pagination={false} />;
    };
    
      const columns = [
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Version", dataIndex: "version", key: "version"},
      ];




      return (
        <div style={{marginLeft:80}}>

                 <div id="myHeader">
                     <Row>
                         <Col span={20}>
                             <span className="myTitle">SJT Designer</span>
                         </Col>
                     </Row>
                 </div>
                
                 <div className="myAddBtn">
                     <Row>
                         <Col push={22}>
                             <Button type="primary" href="/sjt-config">Add</Button>
                         </Col>
                     </Row>
                 </div>

                  {/* <div className="advancedSearch">
                    <Row>
                      <Col span={2} push={21}>
                        <Button type="primary" style={{backgroundColor:"#1890ff"}} onClick={() => props.setHpModalVisible(true)}> Advanced search</Button>
                      </Col>
                    </Row>
                  <Modal
                    width={800}
                    title="Advanced search"
                    centered
                    visible={props.data.homepageModal}
                    onCancel={() => props.setHpModalVisible(false)}
                    onOk={() => props.setHpModalVisible(false)}
                  >
                    <div>
                      <Row>
                        <Col span={24}>
                        <span style={{paddingRight:10}}>Company</span> 
                        <Select
                          showSearch
                          style={{ width: 200 }}
                          placeholder="Search to Select"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                          filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                          }
                        >
                          <Option value="1">Not Identified</Option>
                          <Option value="2">Closed</Option>
                          <Option value="3">Communicated</Option>
                          <Option value="4">Identified</Option>
                          <Option value="5">Resolved</Option>
                          <Option value="6">Cancelled</Option>
                        </Select>
                       
                       
                        <span style={{paddingLeft:10,paddingRight:10}}>Campaign</span> 
                        <Select
                          showSearch
                          style={{ width: 200 }}
                          placeholder="Search to Select"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                          filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                          }
                        >
                          <Option value="1">Not Identified</Option>
                          <Option value="2">Closed</Option>
                          <Option value="3">Communicated</Option>
                          <Option value="4">Identified</Option>
                          <Option value="5">Resolved</Option>
                          <Option value="6">Cancelled</Option>
                        </Select>
                        </Col>
                      </Row>
                      
                    </div>
                  </Modal>
                  </div>
         */}
        <Table
          scroll={{ x: 10 }}
          className="components-table-demo-nested"
          columns={columns}
          expandable={ { expandedRowRender , onExpand} }
          dataSource={props.data.homepageData.data}
        />



        </div>

      );
}

export default SjtHome;