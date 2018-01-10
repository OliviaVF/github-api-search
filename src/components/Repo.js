import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Repo = ({ repo }) => {
  const { name, description, language, updatedAt } = repo

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
      {language &&
        <p className="inline">Language: {language}</p>
      }
      {updatedAt &&
        <p className="inline padding-sm-left">Updated at: {moment(updatedAt).format('LL')}</p>
      }
      {!description &&
        <p>No description available.</p>
      }
      {!language &&
        <p>No language available.</p>
      }
    </div>
  )
}

Repo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    language: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
}

export default Repo
