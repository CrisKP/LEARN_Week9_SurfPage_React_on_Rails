import React, {Component} from 'react'
import Intro from 'components/Intro'

export default class SurfPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
        levels: [
          {
            level: "beginner",
            title: "Welcome Beginners!",
            image: "http://realsurftrips.com/wp-content/uploads/2015/01/beginner1.jpg",
            summary: "Welcome to surfing. Even though you're beginners, you can still feel the magic. On this page, you'll find all the resources you'll need to start out surfing. Surfs up, Newbs! hang loose and you won't be a noob for long.",
            spot1: "Tourmaline or 'Old Mans'",
            spot2: "La Jolla Shores",
            spot3: "Mission Beach"
          },
          {
            level: "intermediate",
            title: "Getting the hang of it, eh?",
            image: "https://www.surfschool.com/wp-content/uploads/2015/07/pro_surf_school_bali-image.jpg",
            summary: "This is a bit more advanced then the beginner surfer. When you can navigate the surf and position yourself for some solid turns, here are some great spots to check out.",
            spot1: "Scripps Pier",
            spot2: "Ocean Beach",
            spot3: "Torrey Pines"
          },
          {
            level: "advanced",
            title: "Advanced",
            image: "http://www.orangesmile.com/extreme/img/main/oahu-beaches_1.jpg",
            summary: "So you know what you're doing. Let's head over to some spots that match your skill. Surfs up!",
            spot1: "Blacks",
            spot2: "Windansea",
            spot3: "Sunset Cliffs"
          },
          {
            level: "Random",
            title: "Random Stuff!",
            image: "https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547",
            summary: "We told you it was random.",
            spot1: "The sand",
            spot2: "the parking lot",
            spot3: "home"
          }
        ]
    }
  }

  render() {
    var level = this.props.level
    return (
      <div>
        <Intro surfIntro={this.state.levels[level]} />

      </div>
    )
  }
}
