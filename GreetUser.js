import React, { Component } from 'react'

class GreetUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:true
        }
    }

    changeShow(){
        this.setState((prevState)=>({
            show:prevState.show?false:true
        }))
    }

    changeMsg(){
        let msg
        this.state.show?
        msg="Hello Prashant":
        msg="heloo user"
        return(msg)
    }
    
    render() {
        //
        // 3rd approch to conditional greeting
        // ternary operator method(BEST APPROCH)
        // this.state.show?
        //         <div>hello Prashant</div>:
        //         <div>Heloo User</div>

        return(
            
            <div>
                <h1>{this.changeMsg()}</h1>
                <button onClick={()=>this.changeShow()}>Change</button>
            </div>
        )

        //==============================================================

        // 2nd approch to conditional greeting
        // let msg

        // if (this.state.show){
        //     msg = <div>Hello Prashant</div>
        // }
        // else{
        //     msg = <div>hello user</div>
        // }
        // return(
        //     <div>{msg}</div>
        // )
            // =======================================================
        // 1st approch to conditional greeting
        // if(this.state.show){
        //     return (
        //         <div>
        //             <h1>Hello Prashant</h1>
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div>
        //             <h1>Hello user</h1>
        //         </div>
        //     )
        // }
        
    }
}

export default GreetUser
