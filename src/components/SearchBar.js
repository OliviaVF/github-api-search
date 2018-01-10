import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  static propTypes = {
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
          this.setInputValue(nextProps.value);
      }
  }

  getInputValue = () => {
      return this.input.value;
  }

  setInputValue = (val) => {
      this.input.value = val;
  }

  handleKeyUp = (e) => {
      if (e.keyCode === 13) {
          this.handleSubmit();
      }
  }

  handleSubmit = () => {
      this.props.onChange(this.getInputValue());
  }

  render() {
      return (
          <div>
              <input
                  ref={(input) => this.input = input}
                  defaultValue={this.props.value}
                  onKeyUp={this.handleKeyUp}
                  placeholder="Search a Github user or organisation"
              />
              <button
                  className="button"
                  onClick={this.handleSubmit}
              >
          Search
              </button>
          </div>
      );
  }
}
