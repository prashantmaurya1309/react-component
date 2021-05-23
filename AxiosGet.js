import axios from 'axios'
import React, { Component } from 'react'

class AxiosGet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/1828259/call?")
        .then(response=>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    render() {

        const { posts }= this.state

        return (
            <div>
                <h3>List of Posts--</h3>
                {
                    posts.length ?
                    posts.map(post=> <div key={post.id}>{post.First_Name}_{post.Last_Name}</div>):
                    null
                }
                
            </div>
        )
    }
}

export default AxiosGet
