import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import SearchBar from 'components/SearchBar'

import 'styles/main.scss';

class App extends Component {
  static propTypes = {
    // Injected by React Redux
    inputValue: PropTypes.string.isRequired,
    // Injected by React Router
    children: PropTypes.node
  }

  handleChange = nextValue => {
    this.props.history.push(`/${nextValue}`)
  }

  render() {
    const { children, inputValue } = this.props
    return (
      <div className="container-fluid">
        <div className="row padding-sm">
          <div className="col-lg-12">
            <SearchBar value={inputValue}
             onChange={this.handleChange} />
            {children}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  inputValue: ownProps.location.pathname.substring(1)
})

export default withRouter(connect(mapStateToProps, {
})(App))
