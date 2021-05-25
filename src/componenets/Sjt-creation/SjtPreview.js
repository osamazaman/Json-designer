import React from 'react';
import 'antd/dist/antd.css';
import './Sjt.css';
import './previewStyling.css';
import dummyData from './Preview/DummyData.json'
import StateMg from '../Sjt-creation/StateMgmt/StateMg';


function SjtPreview(){
    
    console.log("previeww",StateMg.json)
    var atag = document.createElement("a");
    var file = new Blob([JSON.stringify(StateMg.json)], { type: 'text/json' });
    atag.href = URL.createObjectURL(file);
    atag.download = dummyData.components[0].id;
    // atag.click(); 
    
    return(
        <div>
            <p></p>
        </div>
    );
}

export default SjtPreview;