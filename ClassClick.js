import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('class click handled')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click class</button>
            </div>
        )
    }
}

export default ClassClick;
