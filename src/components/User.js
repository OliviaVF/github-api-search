import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => {
  const { login, avatarUrl, name } = user

  return (
    <div>
      <div className="profile_image__circle">
        <img src={avatarUrl} alt={login} />
      </div>
      <h3 className="center">
        {login} {name && <span>({name})</span>}
      </h3>
    </div>
  )
}

User.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string
  }).isRequired
}

export default User
