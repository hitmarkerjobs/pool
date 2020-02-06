import React from 'react';
import uuid from 'uuid/v4';

export default class idControl extends React.Component {
  getInitialState() { return {}; }

  componentDidMount() {
    if (!this.props.value) {
      this.props.onChange(uuid());
    }
  }

  handleChange() {
    this.props.onChange(uuid());
  }

  render() {
    return window.h('p', null, `${this.props.value}`);
  }
}

