import json from '../dataSource/-DummyData';
import homepageData from '../dataSource/homeData';
import dummyDataJson from '../dataSource/sjtDummy';

export default {
    containerType: 1,
    
    flag: 1,
    home: [],
    date:"",
    config:  {},
    Aptitudetitle: '',
    Qnumbers: '',
    score: '',
    bucketType: '',
    correctAnswers: '',
    timer: '',
    aptitudeType: '',
    searchText: '',
    searchedColumn: '',
    json:json,
    homepageData:homepageData,
    dummyData:dummyDataJson,
    isJsonUpdated:false,
    speakerName:'',
    dialogue:'',
    optionOne:'',
    optionTwo:'',
    optionThree:'',
    optionFour:'',
    active:'0',
    modal1Visible: false,
    homepageModal:false
}