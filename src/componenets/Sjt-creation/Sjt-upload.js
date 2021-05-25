import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Table,Button, Row, Col, Card, Upload, message} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import './Sjt.css';
import {  useHistory  } from "react-router-dom";
import SjtAssets from './Sjt-assetsList';
import axiosCalls from '../../services/helpers/axiosCalls';
// import MyDropzone from './components/MyDropzone';



function Sjtupload(props){
    
    console.log("upload page - config data", props.data.config);

    const history = useHistory();
    
    const nextPage = () =>{
      history.push('/sjt-assetList');
    }

    // const handleFileUpload_ = (e: Object, value: RegistrationField) => {
    
    //     let target = e.target;
    //     let extension = "." + target.files[0].name.split(".").pop();
    //     let accept = value.accept ? value.accept.split(",") : [];
        
    //     if(accept.length > 0 && !accept.includes(extension)){
    //       setFileUploadResult('Only ' + value.accept + " extensions are allowed.");
    //     }else{
    //       setDisable(true);
    //       CFactorServices.Instance.uploadFile(e.target.files[0])
    //         .then((res: AxiosResponse<any>) => {
    //           if (res.status != 200) {
    //             throw 'Failed';
    //           }
    //           return res.data;
    //         })
    //         .then(() => {
    //           setFileUploadResult(value.name + ' uploaded successfully.');
    //         })
    //         .catch(() => {
    //           target.value = null;
    //           setFileUploadResult('Unable to upload ' + value.name);
    //         }).finally(() => {
    //           setDisable(false);
    //         });
    //     }
    //   }
    
    // const uploadFile = function(info) {
    //     var formData = new FormData();
    //     formData.append('file', info);

    //     return this.api.post(`${App.baseUrl}/users/image/${this.campaignId}/${this.userData.id}`, formData, {
    //         headers: {
    //             'Authorization': 'Bearer ' + this.userData.token,
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     }).then(res => {
    //         StaticStorage.userPhoto = res.data.path;
    //         return res;
    //     });
    // }


    const handleFileUpload_ = function (file, value) {
        var target = file.target;
        console.log("sjt name",props.data.dummyData.components[0].id,"File name",)
        var extension = "." + file.file.name.split(".").pop();
        console.log("image extensions",extension)
        // var accept = value.accept ? value.accept.split(",") : [];

        const  headers=  {
                'Authorization': 'Bearer ',
                'Content-Type': 'application/x-www-form-urlencoded'
            };

        axios.post("http://localhost:3000/competencies/upload",  {
          SjtName: props.data.dummyData.components[0].id,
          data:file.file.name
        }, {headers})
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((error) => {
          console.log(error);
        });

        // if (accept.length > 0 && !accept.includes(extension)) {
        //     setFileUploadResult('Only ' + value.accept + " extensions are allowed.");
        // }
        // else {
        //     // setDisable(true);
        //     // CFactorServices.Instance.uploadFile(e.target.files[0])
        //     //     .then(function (res) {
        //     //     if (res.status != 200) {
        //     //         throw 'Failed';
        //     //     }
        //     //     return res.data;
        //     // })
        //     //     .then(function () {
        //     //     setFileUploadResult(value.name + ' uploaded successfully.');
        //     // })
        //     //     .catch(function () {
        //     //     target.value = null;
        //     //     setFileUploadResult('Unable to upload ' + value.name);
        //     // }).finally(function () {
        //     //     setDisable(false);
        //     // });
        //     console.log("socho")
        // }
    };
    

    const { Dragger } = Upload;



    const propss = {
        name: 'file',
        multiple: true,
        // API end point
        // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        action: 'http://localhost:3000/competencies/upload',
        onChange(info) {

            handleFileUpload_(info)
            const { status } = info.file;

            if (status !== 'uploading') {
              console.log(info.file, info.fileList);
                console.log(info.file.name)
               const tempJson = props.data.json;
               
                tempJson.images.push({"id":info.file.name,"url":info.file.name})
                
                props.updateJson(tempJson);
                console.log("json updated")
                // localStorage.setItem('images', JSON.stringify(props.data.json));
            }
            if (status === 'done') {
              message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
            //   do noth
            }
          },
        };
 
    return(
    <div className="myContainer">
        
        <div className="continueBtn">
            <Row>
                <Col offset={20}>
                    <Button type="primary" onClick={nextPage}>  Continue</Button>
                </Col>
            </Row>
        </div>

        <div className="uploadContainer">
            <Row>
            <Col span={5}><span className="myTitle h1">Upload Assets</span></Col>
            </Row>

            <Row>
                <Col span={20}>
             <Card title="Instructions" bordered={false} className="instructionsBox">
                 <ul>
                 <li><p>Instructions go here</p>
                 </li>
                 <li>
                 <b>The names of character images should be ending with "Ch". Example : "Khanjee_Ch"</b>
                 </li>
                 <li>
                 <b>Similarly the name of background images should contain "Bg". Example :" Bg_1.png"</b>
                 </li>
                 <li>
                 <p>Images with png extensions only.</p>
                 </li>
                 </ul>
             </Card>
             </Col>
             </Row>
        </div>

            <div className="myDropZone">
                <Row>
                    <Col span={18} offset={1}>
                        <span>Upload files here</span>
                <Dragger {...propss}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </Dragger>

                {/* <MyDropzone/> */}
                
                       

                </Col>
                </Row>
        </div>


    </div>
 );
}

export default Sjtupload;