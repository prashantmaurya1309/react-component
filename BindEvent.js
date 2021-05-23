import React, { Component } from 'react'

class BindEvent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:'Hello'
        }

        // this.readMsg=this.readMsg.bind(this)

    }
    // readMsg(){
    //     this.setState({
    //         msg:'GoodBye!!'
    //     })
    // }

    readMsg=()=>{
        this.setState({
            msg: 'GoodBye!! :{'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.msg}</div>
                {/* 1st approch is to use bind function (binding in render) */}
                {/* <button onClick={this.readMsg.bind(this)}>Bindevent Button</button> */}
                {/* 2nd approch (arrow function in render)*/}
                {/* <button onClick={()=>this.readMsg()}>Bindevent Button</button> */}
                {/* 3rd approch is bind the handler in constructor once better appproch then first two(binding in constructor) */}
                {/* button onClick={this.readMsg}>Bindevent Button</button> */}
                {/* 4th method binding as class property */}
                <button onClick={this.readMsg}>Bindevent Button</button>
            </div>
        )
    }
}

export default BindEvent
