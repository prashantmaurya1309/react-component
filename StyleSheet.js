import React from 'react'
import './myStyle.css';

export default function StyleSheet(props) {
    let className=props.style?'primary':''
    return (
        <div>
            <h2 className={`${className} font`}> Hello Prashant</h2>
        </div>
    )
}
