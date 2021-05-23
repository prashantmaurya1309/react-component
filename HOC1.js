import React, { Component } from 'react'
import UpdateComponent from './withCounter'

export class HOC1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             click:0
        }
    }
    incrementClick=()=>{
        this.setState((prevState)=>{
            return {click: prevState.click+1}
        })
    }
    
    render() {
        const {click} = this.state
        return (
            <div>
                <button onClick={this.incrementClick}>{this.props.name}Click {click} times</button>
            </div>
        )
    }
}

export default UpdateComponent(HOC1) 
