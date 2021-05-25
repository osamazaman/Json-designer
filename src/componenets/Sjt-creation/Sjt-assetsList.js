import React from 'react';
import 'antd/dist/antd.css';
import { Tooltip,Table, Button, Row, Col, Upload, message } from 'antd';
import {DeleteOutlined, EditOutlined,UploadOutlined,EyeOutlined,PieChartOutlined} from '@ant-design/icons';
import {  useHistory  } from "react-router-dom";
import './Sjt.css';

function SjtAssets(props){
    console.log("check config assets page", props.data)
    const history = useHistory();

      history.push('/sjt-mapped');

    const propss = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
    const data = [
        {
            key: '1',
            sr: '1',
            name: 'sjt-a-d temp',
            title: 'sjt-a-d temp',
            ext:'png',
            action: <>
                <Tooltip title="Delete"><a><DeleteOutlined /> </a> </Tooltip>
                <Tooltip title="Edit"><a><EditOutlined /> </a> </Tooltip>
                <Tooltip title="Publish"><a> <UploadOutlined /> </a></Tooltip>
                <Tooltip title="View"><a><EyeOutlined /></a> </Tooltip>
             </> 
        },
        {
            key: '2',
            sr: '2',
            name: 'sjt-a-d temp',
            title: 'sjt-a-d temp',
            ext:'png',
            action: <>
            <Tooltip title="Delete"><a><DeleteOutlined /> </a> </Tooltip>
            <Tooltip title="Edit"><a><EditOutlined /> </a> </Tooltip>
            <Tooltip title="Publish"><a> <UploadOutlined /> </a></Tooltip>
            <Tooltip title="View"><a><EyeOutlined /></a> </Tooltip>
         </> 
        },
        {
            key: '3',
            sr: '3',
            name: 'sjt-a-d temp',
            title: 'sjt-a-d temp',
            ext:'png',
            action: <>
                <Tooltip title="Delete"><a><DeleteOutlined /> </a> </Tooltip>
                <Tooltip title="Edit"><a><EditOutlined /> </a> </Tooltip>
                <Tooltip title="Publish"><a> <UploadOutlined /> </a></Tooltip>
                <Tooltip title="View"><a><EyeOutlined /></a> </Tooltip>
             </> 
        },
        {
            key: '3',
            ext:'',
            name: <> <Upload {...propss}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                     </Upload>
                     </> 
        },
    ];

    const columns = [
        {
            title: 'Sr',
            dataIndex: 'sr',
        },
        {
            title: 'File name',
            dataIndex: 'name',
        },
        {
            title: 'File title',
            dataIndex: 'title',
        },
        {
            title: 'Extension',
            dataIndex: 'ext',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
      ];


     
return (
    <div className="myContainer">

        {/* SET GRID */}

        <div className="myAddBtn">
            <Row>
                <Col offset={21}>
                    <Button type="primary">Continue</Button>
                </Col>
            </Row>
        </div>

        <div className="sjt-list">
            <Row>
                <Col span={24}>
                    <Table columns={columns} dataSource={data} size="middle" />
                </Col>
            </Row>
        </div>

    </div>
);
}

export default SjtAssets;