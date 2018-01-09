import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchRepoBar extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setRepoInputValue(nextProps.value)
    }
  }

  getRepoInputValue = () => {
    return this.input.value
  }

  setRepoInputValue = (val) => {
    this.input.value = val
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleSubmit()
    }
  }

  handleSubmit = () => {
    this.props.onChange(this.getRepoInputValue())
  }

  render() {
    return (
      <div>
        <input
          ref={(input) => this.input = input}
          defaultValue={this.props.value}
          onKeyUp={this.handleKeyUp}
        />
        <button onClick={this.handleSubmit}>
          Search
        </button>
      </div>
    )
  }
}
