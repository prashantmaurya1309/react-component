
import axios from 'axios'
import React, { Component } from 'react'

export class FetchInvoice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/1828259/finalCall?")
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
                    posts.map(post=> <div key={post.id}>{post.name_customer}_{post.due_in_date}</div>):
                    null
                }
                
            </div>
        )
    }
}

export default FetchInvoice;
