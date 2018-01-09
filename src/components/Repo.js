import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Repo = ({ repo }) => {
  const { name, description } = repo

  return (
    <div className="Repo">
      <h3>
        <div>
          {name}
        </div>
      </h3>
      {description &&
        <p>{description}</p>
      }
      {!description &&
        <p>No description available.</p>
      }
    </div>
  )
}

Repo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired,
}

export default Repo
