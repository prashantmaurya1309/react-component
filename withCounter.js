// higher ordered component 


import React from 'react';

const UpdateComponent = (OriginalComponent)=>{
    class NewComponent extends React.Component{
        render(){
            return <OriginalComponent name='Prashant'/>
        }
    }
    return NewComponent
}
export default UpdateComponent