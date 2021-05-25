import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import {  useHistory  } from "react-router-dom";
import {Button, Row, Col, Modal, Select, Collapse, Avatar,Image,Tooltip} from 'antd';
import './Sjt.css';
// import json from './dataSource/-DummyData'
import SjtComponent from './components/Sjt';
import dummyData from './Preview/DummyData.json'
import Scene from './components/Scene'
import SjtPreview from './SjtPreview';

import axios from 'axios';

const { Option } = Select;
const { Panel } = Collapse;





function importAll(r) {
  // This function helps in importing all images in a certain folder
  return r.keys().map(r);
}

const images = importAll(require.context('../../assets/SjtCharacters/', false, /\.(png|jpe?g|svg)$/));
// This line imports all images in a certain folder

  function callback(key) {
    console.log("accordion:" ,key);
  }
  
  // const testObj = {
  //   url:"http://localhost:8080/testData/homeData.json",
  //   data:{

  //   },
  //   config:{

  //   }
  // }

  function SjtMap(props){


    if(!props.data.isJsonUpdated && localStorage.getItem('sjt-desiging-json') != null) {
      props.updateJson(JSON.parse(localStorage.getItem('sjt-desiging-json')))
    }
    
    useEffect(() => {
        
    },[props.bgImage]);
    


    useEffect(() => {
      // this part fetches json from api (api calling) 
      console.log("check ", props.data.json);

        if(props.data.json == undefined) {  
          const apiCallRequest = {
              url: 'http://localhost:8080/testData/DummyData.json',
              data: {
                  // data to be sent
                
              },
              config: {
                  
              }
            }
          
          axios.get(apiCallRequest.url)
          .then(res => {
            if(res.data != undefined)
              props.updateJson(res.data);
          })
        }

    },[])

    function refactor(json,id,elementId,replacemaneId) {
      // this function sets targets id for each block when any new block is added or a current block is deleted.
      json.data.forEach((element, index, sjtDataArray) => {
        if(element.interactivePanel.type != 'options') {
           element.id = 'Scene'+index; 
        }
       
      });
      
      // let elementId = json.data[id].interactivePanel.targetId,
      // addedElementId = json.data[id].id;

      console.log("checkckkk in refactor",elementId, replacemaneId);
      // Ask bhavesh bha what is this
      json.data.forEach( (element, index) => {
        if(index != id) {
        if(element.interactivePanel.type == 'options') {
          if(element.interactivePanel.options[0].targetId == elementId) element.interactivePanel.options[0].targetId = replacemaneId;
          if(element.interactivePanel.options[1].targetId == elementId) element.interactivePanel.options[1].targetId = replacemaneId;
          if(element.interactivePanel.options[2].targetId == elementId) element.interactivePanel.options[2].targetId = replacemaneId;
          if(element.interactivePanel.options[3].targetId == elementId) element.interactivePanel.options[3].targetId = replacemaneId;
        
        }
        else {
          if(element.interactivePanel.targetId == elementId) element.interactivePanel.targetId = replacemaneId;
         
        }
      }
      });  

      console.log("Json after add ", json);



      // let addedElement = json.data[id];
      
      // if (id != 0){
      //   let prevElement = json.data[id-1];
      //   prevElement.interactivePanel.targetId = addedElement.id;
      // }
      
      // addedElement.interactivePanel.targetId = json.data[id+1].id;
      

      return json;
    }

    

    function add(selected, id){
      // this functions adds a new scene or sjt.
      // An empty template is used to add a new scene or sjt
        const DjsonUpdated = props.data.json;
        
        let message = {
          "scene": {
            "id": "Scene" + id,
            "title": "",
            "timer": 30,
            "imageId": "",
            "imageIdHorizontal": "",
            "interactivePanel": {
              "imageId": "",
              "type": "message",
              "title": "",
              "text": "",
              "targetId": props.data.json.data[id].id
            }
          }
        }

        console.log("props.data.json.data[id].id", props.data.json.data[id].id);
        DjsonUpdated.data.splice(id, 0,message[selected]);
        // the above line adds the new block in the state using place temporarily 
        // setDjson(DjsonUpdated);

        let elementId = DjsonUpdated.data[id].interactivePanel.targetId,
        replacemaneId = DjsonUpdated.data[id].id;

        props.updateJson(refactor(DjsonUpdated,id,elementId,replacemaneId ));
        // the above line adds the new block in the state using place permanently
    }

    function del(id){
      let DjsonUpdated = props.data.json;
     
      let elementId =  DjsonUpdated.data[id].id,
      replacemaneId =  DjsonUpdated.data[id].interactivePanel.targetId;

      DjsonUpdated.data.splice(id,1)
      props.updateJson(refactor(DjsonUpdated,id,elementId,replacemaneId ) )
      console.log("after deletion", DjsonUpdated)
    }

    
    function update(values,id,componentType){
      // this function updates the empty block - of the scene or the sjt
      // and then replaces the empty block with the updated one.
      const DjsonUpdated = props.data.json;
      let updatedMessage;
      if (componentType == "Sjt") {
      
      const speakerName=values.speakerName;
      const dialogue = values.dialogue;
      const type= values.type;
      const mobileImage = values.mobileImage;
      const desktopImage = values.desktopImage;
      const speakerThumbnail = values.speakerImage
      let opOne = values.optionOne
      let opTwo = values.optionTwo
      let opThree = values.optionThree
      let opFour=values.optionFour


      
      console.log("current id", id);

      let updatedSjt =  {
        "id": type==undefined? props.data.json.data[id].id : values.type,
        "imageId": mobileImage == undefined ? props.data.json.data.imageId : mobileImage,
        "imageIdHorizontal": desktopImage == undefined ? props.data.json.data.imageIdHorizontal : desktopImage,
        "timer": 60,
        "nextButton": {
          "type": "text",
          "text": "11",
          "align": "center"
        },
        "thoughtBubble": {
          "imageId": speakerThumbnail == undefined ? props.data.json.data[id].thoughtBubble.imageId : speakerThumbnail,
          "speakerName": speakerName==undefined ? props.data.json.data[id].thoughtBubble.speakerName:speakerName,
          "text": dialogue==undefined? props.data.json.data[id].thoughtBubble.text : dialogue
        },
        "interactivePanel": {
          "type": "options",
          "options": [
            {
              "text": opOne==undefined? props.data.json.data[id].interactivePanel.options[0].text : opOne,
              "isCorrect": false,
              "score": 1,
              "targetId": props.data.json.data[id].interactivePanel.options[0].targetId
            },
            {
              "text": opTwo==undefined? props.data.json.data[id].interactivePanel.options[1].text : opTwo,
              "isCorrect": false,
              "score": 2,
              "targetId": props.data.json.data[id].interactivePanel.options[1].targetId
            },
            {
              "text": opThree==undefined? props.data.json.data[id].interactivePanel.options[2].text : opThree,
              "isCorrect": false,
              "score": 3,
              "targetId": props.data.json.data[id].interactivePanel.options[2].targetId
            },
            {
              "text": opFour==undefined? props.data.json.data[id].interactivePanel.options[3].text : opFour,
              "isCorrect": true,
              "score": 4,
              "targetId": props.data.json.data[id].interactivePanel.options[3].targetId
            }
          ]
        }
      }
      DjsonUpdated.data.splice(id,1,updatedSjt)
      props.updateJson(DjsonUpdated);
    }
    else {
      
     
      updatedMessage = {
        "id": values.type==undefined?props.data.json.data[id].id : values.type,
        "title": "",
        "timer": 30,
        "imageId": values.mobileImage == undefined ? props.data.json.data[id].imageId : values.mobileImage,
        "imageIdHorizontal": values.desktopImage == undefined ? props.data.json.data[id].imageIdHorizontal : values.desktopImage,
        "interactivePanel": {
          "imageId": values.speakerImage == undefined ? props.data.json.data[id].interactivePanel.imageId : values.speakerImage ,
          "type": "message",
          "title": values.speakerName == undefined ? props.data.json.data[id].interactivePanel.speakerName : values.speakerName,
          "text": values.dialogue == undefined ? props.data.json.data[id].interactivePanel.text : values.dialogue,
          "targetId": props.data.json.data[id+1].id
        }
      };
      DjsonUpdated.data.splice(id,1,updatedMessage)

      props.updateJson(DjsonUpdated);    
    }
    }


    function nextBtn(){

      let compId = localStorage.getItem("competencyId");

      axios
        .post("http://localhost:3000/competencies/postjson", {
          competencyId: compId,
          data: props.data.json,
        })
        .then((response) => {
          console.log(response);
          // window.open("http://127.0.0.1:8888/index.html?authId=fac7b390-8afe-11eb-89be-cd1c544262b8", blank)
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
       
    }
    

    function previewFunction(){
      let DummyData = props.data.dummyData;
      // console.log(DummyData.components[0])
      let updatedComponent =  {
        "id": props.data.config.sjtName,
        "componentId": props.data.config.sjtName,
        "nextComponentId": "-1",
        "type": "SJT",
        "title": props.data.config.title,
        "description": "SJT - Agility",
        "dataURL": "",
        "assetsURL": "./assets/images/campaign/sjts/"+ props.data.config.sjtName +"/",
        "timer": 90,
        "icon": null,
        "url": null,
        "startupData": null,  
        "state": "open",
        "active": true,
        "createdAt": "2019-11-07T21:15:14.060Z",
        "updatedAt": "2019-11-14T03:00:52.062Z",
        "score": 0,
        "status": 0,
        "strikeable": false
      };

      DummyData.components.splice(0,1,updatedComponent);
      console.log("dummydata check", DummyData)

    }

     function callPreview(){
      
      //Uncomment this part if you need the json to be downloaded on your personal right away.
      
      var atag = document.createElement("a");
      var file = new Blob([JSON.stringify(props.data.json)], { type: 'application/json' });
      atag.href = URL.createObjectURL(file);
      atag.download = dummyData.components[0].id;
      atag.click();

      let compId = localStorage.getItem("competencyId");

     axios.post("http://localhost:3000/competencies/postjson",  {
          competencyId: compId,
          data: props.data.json
        })
        .then((response) => {
          console.log(response);
          // window.open("http://127.0.0.1:8888/index.html?authId=fac7b390-8afe-11eb-89be-cd1c544262b8")
          return response;
        })
        .catch((error) => {
          console.log(error);
        });

      
      
      // Have to call SJT Preview Component here after doing the above steps.
    }

      const history = useHistory();   

      if (!localStorage.getItem('login')) history.push('/');
      // checks if user is logged in.



return (
    <div className="myContainer">

        <div className="headers">
            <Row>
                <Col span="24">
                    <span>Characters</span>
                    <div className="characters">
                        <Row>
                            <Col span={24}>

                              {
                                images.map((item, index) => (
                                item.includes("Ch")? 
                                <Avatar size={80} style={{marginLeft:10}} key={index} src={<Image src={item}/>} />
                               : <> </>
                              ))
                              }

                              

                            </Col>
                        </Row>
                    </div>
                    {/* <a href='www.google.com' style={{fontSize:13}}> Click to view all images</a> */}
                </Col>
                
            </Row>

            
        </div>

        <div className="accordionn">
        <Row>
            <Col span={24}>
         
            <Collapse accordion defaultActiveKey={['0']} onChange={callback} className="accordionRight">
                        {
                          (props.data.json != undefined) ?   
                            props.data.json.data.map((value, index) => (
                                    <Panel header={value.id} className="panelHeaders" key={index}>
                                    {
                                        value.interactivePanel.type == 'options' ?
                                        <SjtComponent
                                            images={props.data.json.images}
                                            data={props.data}
                                            index={index}
                                            val={value}
                                            add={add}
                                            setModal1Visible = {props.setModal1Visible}
                                            update={update}

                                        />
                                        :
                                        <Scene
                                        images={props.data.json.images}
                                            index={index}
                                            val={value}
                                            add={add}
                                            update={update}
                                            del={del}
                                        />
                                    }
                                   </Panel>
                            )
                            ):<></>
                          }
                </Collapse>
      
            </Col>
        </Row>
        </div>
        <div className="footerBtns">
        <Row>
            <Col span={24}>
        {/* <Button type="primary" htmlType="submit" id="myBtn" onClick={previewFunction}> */}
        {/* <Button type="primary" htmlType="submit" id="myBtn" onClick={()=>{props.setModal1Visible(true)}}>
          Preview
        </Button> */}

        <Button type="primary" htmlType="submit" id="myBtn" onClick={()=>{callPreview(SjtPreview)}}>
            Preview
        </Button>

        {/* <Modal
          style={{top:10}}
          title="Preview"
          visible={props.data.modal1Visible}
          onOk={() => props.setModal1Visible(false)}
          onCancel={() => props.setModal1Visible(false)}
        >
        <div><pre>{JSON.stringify(props.data.json, null, 2) }</pre></div>
          
        </Modal> */}

        <Button type="primary" htmlType="submit" id="nextSjtBtn" onClick={nextBtn}>
            Save as draft
        </Button>
            </Col>
        </Row>
        </div>

    </div>
    
);
}

export default SjtMap;