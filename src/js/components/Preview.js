import React from 'react'

export default class Preview extends React.Component {
  render() {
    return (
      <span dangerouslySetInnerHTML={this.props.markdown}></span>
    );
  }
}