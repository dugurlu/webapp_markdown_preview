import React from 'react'

import Bootstrap from '../css/bootstrap.css'
import CSS from '../css/style.scss'

import Input from './components/Input'

export default class Layout extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="jumbotron text-center">
          <h1>GHF Markdown Preview</h1>
        </div>
        <Input />
      </div>
    );
  }
}