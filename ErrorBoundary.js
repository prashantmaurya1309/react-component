import React, { Component } from 'react'
import Hero from './Hero'

class Error extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
    
    render() {
        if (this.state.hasError){
            return <h1>something went wrong</h1>
        }
        else{
            return(
                this.props.children
            )
        }
    }
}

export default Error
