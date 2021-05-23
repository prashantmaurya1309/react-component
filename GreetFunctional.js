import React from 'react';

// function written bellow is not written in ES6

// function Greet(){
//     return (<h1>Hello Prashant</h1>);
// };

// ES6 syntax for same function=>
export const Greet=(props)=> {
console.log(props);
return(
<div>
    <h1>Hello {props.name} {props.lName}</h1>
    {props.children} 
</div>)

};
//export default Greet;