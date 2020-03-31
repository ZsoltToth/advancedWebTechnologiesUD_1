import React from 'react'

function Greetings(props){
    return (
        <span>Hello&nbsp;
            {props.name != null &&
            props.name !== undefined ?
                props.name :
                "World"
            }!</span>);
}

export default Greetings
