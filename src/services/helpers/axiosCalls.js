// import axios from 'axios';
// import {Alert} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// import {apiConfig} from '../config/config';


// function axiosCalls(props) {
    
//     function getApi(event) {
//         const callRequest = this.props.src;
//         fetch(config.apiBaseUrl+callRequest)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             this.setState({ data })
//         });
//     }

//     function postApi(event) {
//         const callRequest = this.props.src;
//         const requestOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ title: 'React POST Request Example' })
//         };
//         fetch(config.apiBaseUrl+callRequest, requestOptions)
//             .then(response => response.json())
//             .then(data => this.setState({ postId: data.id }));

//     }
// }


// export default axiosCalls;