import React,{Component} from 'react'
class CC extends React.Component{
    //to create a state, we need a constructor
    constructor(){
        super();//we need this but not sure why
        this.state={
            player: 'Ronaldo',
            country: 'Japan',
            language: 'Japanese'
        }

    }

    changeCountry=()=>{
        this.setState({country: 'Taiwan'})
        this.setState({language: 'Traditional Chinese'})
    }
    
    render(){
        return <div>
            <h1>This is class component</h1>
            <h1>The player's name is {this.state.player}</h1>
            <h1>The country name is {this.state.country}</h1>
            <h1>The language is {this.state.language}</h1>
            <button onClick={this.changeCountry}>Change country</button>
        </div>
    }
}
export default CC