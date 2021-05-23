import React,{ Component } from 'react';

class Message extends Component{

    constructor(){
        super()
        this.state={
            msg: 'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            msg: 'Thank U for Subscribing :)'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message;