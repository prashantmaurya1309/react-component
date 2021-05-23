import React from 'react'

function FunctionalClick() {
    function clickIt(){
        console.log('Button is clicked');
    }
    return (
        <div>
            <button onClick={clickIt}>Click</button>
        </div>
    )
}

export default FunctionalClick
