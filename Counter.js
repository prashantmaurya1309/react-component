import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    IncreseCount(){
        this.setState({
            count:this.state.count +1
        },()=>{
            console.log('call back value',this.state.count);
        })
    }

    IncreseCountFive(){
        this.setState((prevState,props)=>({
            count:prevState.count + props.addValue
        }))
    }


    render() {
        return (
            <div>
                <h3>count={this.state.count}</h3>
                <button onClick={()=>this.IncreseCountFive()}>Increment count</button>
            </div>
        )
    }
}

export default Counter;
