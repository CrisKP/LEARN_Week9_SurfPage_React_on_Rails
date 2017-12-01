import React, {Component} from 'react'

export default class Joke extends Component{
  constructor(props){
    super(props)
    this.state = {
      joke: {
        text: "Have you heard about the latest pirate movie?",
        punchline: "Yea, it's rated Rrrrrrr!",
    },
    reveal: false
  }
}

  render(){
    return(
      <div>
        <h1>Joke of the day!</h1>
        <h3>{this.state.joke.text}</h3>
        {this.state.reveal &&
        <h4>{this.state.joke.punchline}</h4>
        }

        {!this.state.reveal &&
          <button onClick={() => this.setState({reveal: true})}>
            Answer
          </button>
        }
      </div>
    )
 }
}
