import React, {Component} from 'react'

export default class Intro extends Component{
  constructor(props){
    super(props)
    this.state = {
      intro: {
        headline: "Surfing San Diego, Yo!",
        statement: "See you in the water!"
    }
  }
}

  render(){
    return(
      <div>
        <h3>{this.state.intro.headline}</h3>
        <h4>{this.state.intro.statement}</h4>

      </div>
    )
 }
}
