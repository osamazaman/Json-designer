
export default {
    flag:1,
    registrationCheckBox: false,
    bgImage:'transparent',
    userName: '',
    tower:[],
    login: false,
    currentStep : 'adminLogin',
    adminLogin: {
        email: '',
        password: '',
        authToken: ''
    },
    company: {
        name: '',
        website: '',
        industryType: '',
        bio: ''
    },
    user: {
        email: '',
        password: '',
        name: '',
        firstname: '',
        lastname: '',
        country: '',
        address: '',
        phone: '',
        dob: '',
        type: ''
    },
    client: {
        name: '',
        email: '',
        phone: '',
        bio: ''
    },
    campaign: {
        name: '',
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        status: '',
        clientId: ''
    },
    campaignConfig: {
        language: 'configLanguage'
    },
    registrationFields: {
        checkedList: ['First, Last Name','Email address','University'], 
        indeterminate: false,
        checkAll: true,
    },
    checkedList: ['First, Last Name','Email address','University'],
    indeterminate: false,
    checkAll: true,
    plainOptions : ['First, Last Name','Email address','University','First, Last Name','Email address','University', 'First, Last Name','Email address','University']

}