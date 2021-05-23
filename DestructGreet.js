import React from 'react';


export const GreetDestruct=(props)=> {
    const {name,lName} = props
    console.log(props);
    return(
    <div>
        <h1>Hello {props.name} {props.lName}</h1>
        {props.children} 
    </div>)
    
    };