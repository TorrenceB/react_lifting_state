import React, { Component } from 'react';

import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from '../Components/TemperatureInput';

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.handleCelciusChange = this.handleCelciusChange.bind(this);
        this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
        this.state = {
            temperature: '',
            scale: 'c',
        }
    }

    handleCelciusChange = (temperature) => {
        this.setState({scale: 'c', temperature})
    }

    handleFarenheitChange = (temperature) => {
        this.setState({scale: 'f', temperature})
    }

    toCelcius = (farenheit) => {
        return (farenheit -32) * 5 / 9;        
    }

    toFarenheit = (celcius) => {
        return (celcius * 9 / 5) + 32;
    }

    tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature);
        if(Number.isNaN(input)) {
            return '';
        } 
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celcius = scale === 'f' ? this.tryConvert(temperature, this.toCelcius) : temperature;
        const farenheit = scale === 'c' ? this.tryConvert(temperature, this.toFarenheit) : temperature;
        return ( 
            <div>
                <TemperatureInput scale='c'
                                  temperature={celcius}
                                  onTemperatureChange={this.handleCelciusChange} 
                />
                <TemperatureInput scale='f'
                                  temperature={farenheit}
                                  onTemperatureChange={this.handleFarenheitChange}  
                 />
                 <BoilingVerdict 
                 celcius={parseFloat(celcius)}
                 />
            </div>
       )
    }
}