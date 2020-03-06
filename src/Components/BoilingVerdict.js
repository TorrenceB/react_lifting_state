import React, { Component } from 'react';

const BoilingVerdict = (props) => {
    if(props.celcius >= 100) {
        return <p>The Water would boil!</p>
    } else {
        return <p>The water won't boil!</p>
    }
}

export default BoilingVerdict