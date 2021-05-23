import React, { Component } from 'react'
import UpdateComponent from './withCounter'

class Hovwer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    incrementCount=()=>{
        this.setState((prevState)=>{
            return{count:prevState.count+1}
        })
    }
    
    render() {
        const {count} = this.state
        return (
            <div>
                <h1 onMouseOver={this.incrementCount}>{this.props.name} Hovwerd {count}</h1>
            </div>
        )
    }
}

export default UpdateComponent(Hovwer)
