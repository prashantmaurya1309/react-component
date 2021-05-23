import React, { Component } from 'react'

class FetchData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            arr:[],
            isLoaded:false
        }
    }

    // componentDidMount(){
    //     fetch('http://localhost:8080/1828259/call?')
    //         .then(res => res.json())
    //         .then(json=>{
    //             this.setstate({
    //                 data:json,
    //                 isLoaded:true
    //         })
    //     })
    // }


    async componentDidMount(){
        const url="http://localhost:8080/1828259/call?";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState(
            {
                arr:data,
                isLoaded:true
            }
        )
    }
    
    render() {

        const { isLoaded,arr } = this.state

        if(!isLoaded){
            return <div>Loading...</div>
        }

        else{
            return (
                <div>
                    data loaded{arr}
                </div>
            )
        }

       
    }
}

export default FetchData
