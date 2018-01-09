import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadUser, loadRepos } from '../actions'
import User from 'components/User'
import Repo from 'components/Repo'
import SearchRepoBar from 'components/SearchRepoBar'
import RepoList from 'components/RepoList'
import zip from 'lodash/zip'

const loadData = ({ login, loadUser, loadRepos }) => {
  loadUser(login, [ 'name' ])
  loadRepos(login)
}

class Results extends Component {
  static propTypes = {
    login: PropTypes.string.isRequired,
    user: PropTypes.object,
    repoPagination: PropTypes.object,
    userRepos: PropTypes.array.isRequired,
    loadUser: PropTypes.func.isRequired,
    loadRepos: PropTypes.func.isRequired
  }

  componentWillMount() {
    loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login !== this.props.login) {
      loadData(nextProps)
    }
  }

  handleLoadMoreClick = () => {
    this.props.loadRepos(this.props.login, true)
  }

  renderRepo([ repo, owner ]) {
    return (
      <Repo
        repo={repo}
        key={repo.fullName} />
    )
  }

  render() {
    const { user, login } = this.props
    if (!user) {
      return <h1 className="center">Loading {login}{"'s profile..."}</h1>
    }

    const { userRepos, repoPagination } = this.props
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <User user={user} />
          </div>
          <div className="col-lg-8 col-lg-offset-1">
            <SearchRepoBar />
            <RepoList
              renderItem={this.renderRepo}
              items={zip(userRepos)}
              onLoadMoreClick={this.handleLoadMoreClick}
              loadingLabel={`Loading ${login}'s repos...`}
              {...repoPagination}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // We need to lower case the login due to the way GitHub's API behaves.
  // Have a look at ../middleware/api.js for more details.
  const login = ownProps.match.params.login.toLowerCase()

  const {
    pagination: { ownedByUser },
    entities: { users, repos }
  } = state

  const repoPagination = ownedByUser[login] || { ids: [] }
  const userRepos = repoPagination.ids.map(id => repos[id])

  return {
    login,
    userRepos,
    repoPagination,
    user: users[login]
  }
}

export default withRouter(connect(mapStateToProps, {
  loadUser,
  loadRepos
})(Results))
