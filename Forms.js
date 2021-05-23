import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'react'
        }
    }
    
    handleUserNameChange=(event)=>{
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange=event=>{
        this.setState({
            comments:event.target.value
        })
    }

    topicChange=event=>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit=event=>{
        alert(`${this.state.username} ${this.state.comments}${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                    type="text" 
                    value={this.username}
                    onChange={this.handleUserNameChange}>

                    </input>
                </div>
                <div>
                    <label>Comments</label>
                    <input type="text" value={this.comments} onChange={this.handleCommentChange}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.value} onChange={this.topicChange}>
                        <option value="react">React</option>
                        <option value="angular">angular</option>
                        <option value="vue">vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Forms;
