import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Tooltip,Button } from 'antd';
import {DeleteOutlined, EditOutlined,UploadOutlined,EyeOutlined,PieChartOutlined,DownOutlined,SettingOutlined} from '@ant-design/icons';
import {  useHistory  } from "react-router-dom";
import './Sjt.css';

function SjtHistory() {

    const history = useHistory();


      if (!localStorage.getItem('login')) history.push('/');

return (
    <div className="myContainer">

        <div className="sjt-list">
            <Row>
                <Col span={24}>
                    <Card title="Osama Z" bordered={false} className="historyCard">
                        <p> Changes made by the author are being shown here</p>
                        <p className="historyTimer">04:20 am, 31/12/20</p>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Card title="Danish" bordered={false} className="historyCard">
                        <p> Changes made by the author are being shown here</p>
                        <p className="historyTimer">09:40 pm, 22/12/20</p>
                    </Card>
                </Col>
            </Row>

        </div>

        <div className="footerBtns">
            <Row>
                <Col span={10} push={19}>
                    <Button type="primary" htmlType="submit" id="myBtn" href="/Sjt-home">
                        Okay
                     </Button>
                </Col>
            </Row>
        </div>

    </div>
);
}

export default SjtHistory;