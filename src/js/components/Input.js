// TODO move this into layout
import React from 'react'
import ReactDOM from 'react-dom'

import Preview from './Preview'

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }
  componentDidMount() {
    this.refs.markdownInput.focus();
  }
  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }
  render() {
    return (
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-4">
          <textarea
            rows="10"
            ref="markdownInput"
            autofocus value={this.state.markdown}
            onChange={this.handleChange.bind(this)} />
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5"><Preview markdown={this.state.markdown} /></div>
        <div class="col-md-1"></div>
      </div>
    );
  }
}