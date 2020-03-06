import React, { Component } from 'react';

import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from '../Components/TemperatureInput';

export default class Calculator extends Component {
    toCelcius = (farenheit) => {
        return (farenheit -32) * 5 / 9;        
    }

    toFarenheit = (celcius) => {
        return (celcius * 9 / 5) + 32;
    }

    tryConvert = (temperature, convert) => {

    }ß

    render() {
        return ( 
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
       )
    }
}