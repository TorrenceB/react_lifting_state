import React, { Component } from 'react';

const scaleNames = {
    c: 'Celcius',
    f: 'Farenheit',
}

export default class TemperatureInput extends Component {    

    state = {
        temperature: '',
    }

    handleChange = (e) => {
        this.setState({
            temperature: e.target.value,
        })
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input 
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        )
    }
}
