import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchRepoBar extends Component {

  render() {
    return (
      <div>
        <input
          className="input-small"
          ref={(input) => this.input = input}
          defaultValue={this.props.value}
          onKeyUp={this.handleKeyUp}
          placeholder="Search repositories"
        />
        <button
        className="button"
        onClick={this.handleSubmit}
        >
          Search
        </button>
      </div>
    )
  }
}
