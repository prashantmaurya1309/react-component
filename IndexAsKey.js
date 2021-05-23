import React from 'react'

export default function IndexAsKey() {
    const names=['Bruce','clark','Diana']
    const nameList = names.map((name,index)=><h2 key={index}>{index}). {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}
