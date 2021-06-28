import React from 'react'

class Timer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){
        //Where the clock is ticking
        setInterval(
            ()=> this.clock(),
            1000
        )


    }


    clock = () =>{
        this.setState({
            date: new Date()
        })
    }

    render(){

     return(
            <>
                {this.state.date.toLocaleTimeString()}
            </>
        )
    }
}

export default Timer;