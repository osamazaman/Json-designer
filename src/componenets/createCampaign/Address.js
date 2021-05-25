import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;



class Address extends Component {

    constructor() {
        super();
        this.state = {
            selectedCountry :'',
            selectedState : '',
            countries :[],
            states : [],
            cities : []
        };

        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.fetchStates = this.fetchStates.bind(this);
        this.fetchCities = this.fetchCities.bind(this);
    }


    onChangeCountry(country) {
        this.setState({
            selectedCountry: country
        })
        
    }

    onChangeState(state) {
        this.setState({
            selectedState: state
        })
        
    }



    fetchStates(values) {
        const country = this.state.selectedCountry;
        axios.get('http://localhost:3000/states/'+country, { })
        .then(response => {
            this.setState({
                states: response.data
            })           
        }).catch(error => {
            console.log(error)
        });
    }

    fetchCities(values) {
        const country = this.state.selectedCountry;
        const state = this.state.selectedState;
        axios.get('http://localhost:3000/cities/'+country+'/'+state, { })
        .then(response => {
            this.setState({
                cities: response.data
            })           
        }).catch(error => {
            console.log(error)
        });
    }
     

    componentDidMount() {
        axios.get('http://localhost:3000/countries', { })
        .then(response => {
            this.setState({
                countries: response.data
            })           
        }).catch(error => {
            console.log(error)
        });
    };

    


render()
    { 
        return (
            <div>
            <Form.Item>
                <Input.Group compact>
                    <Form.Item
                        name={['address', 'country']}
                        // noStyle
                        rules={[{ required: true, message: 'country is required' }]}
                    >
                        <Select
                            className="address"
                            placeholder="List of all countries"
                            onChange={this.onChangeCountry}
                        >
                            {this.state.countries.map((item, index) => (
                                <Option key={`country-option-${index}`} value={item}>{item}</Option>
                            ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={['address', 'state']}
                        // noStyle
                        rules={[{ required: true, message: 'State is required' }]}
                    >
                        <Select className="address" placeholder="Select State" onChange={this.onChangeState} onClick={this.fetchStates}>
                            {this.state.states.map((item, index) => (
                                <Option key={`state-option-${index}`} value={item}>{item}</Option>
                            ))
                            }
                        </Select>

                    </Form.Item>
                    <Form.Item
                        name={['address', 'city']}
                        // noStyle
                        rules={[{ required: true, message: 'City is required' }]}
                    >
                        <Select className="address" placeholder="Select city" onClick={this.fetchCities}>
                            {  this.state.cities.map((item, index) => (
                                <Option key={`city-option-${index}`} value={item}>{item}</Option>
                            ))
                            } 
                        </Select>

                    </Form.Item>
                </Input.Group>
            </Form.Item>
            </div>
        )
    }

}

export default Address;