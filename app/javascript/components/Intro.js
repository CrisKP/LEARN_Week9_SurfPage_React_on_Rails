import React, {Component} from 'react'
import intermediateImage from 'images/intermediate_surf.jpg'

export default class Intro extends Component {
  render(){
    console.log(this.props.surfIntro)
    return(
      <div>
        <h3>{this.props.surfIntro.title}</h3>
        <img src={this.props.surfIntro.image} />
        <div>{this.props.surfIntro.summary}</div>
        <h3>A few great surf spots for your level:</h3>
        <ul>
        <li>{this.props.surfIntro.spot1}</li>
        <li>{this.props.surfIntro.spot2}</li>
        <li>{this.props.surfIntro.spot3}</li>
        </ul>
      </div>
    )
  }
}
