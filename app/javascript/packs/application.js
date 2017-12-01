/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Joke from 'components/Joke'
import Intro from 'components/intro'
import WebpackerReact from 'webpacker-react'
import {
  Pageheader,
  Table

} from 'react-bootstrap'

WebpackerReact.setup({Joke})
WebpackerReact.setup({Intro})

import React, { Component } from 'react';
import Header from './Header'


// copy/pasted this for future use cuz we think its important?
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
      </div>
    );
  }
}

export default App
