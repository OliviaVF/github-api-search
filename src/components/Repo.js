import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Repo = ({ repo }) => {
    const { name, description, language, updatedAt, stargazersCount, forksCount } = repo;

    return (
        <div className="Repo">
            <h3>
                <div>
                    {name}
                </div>
            </h3>
            {description &&
              <p>Description: {description}</p>
            }
            {language &&
              <p className="inline">Language: {language}</p>
            }
            <p className="inline padding-sm-left">Forks: {forksCount}</p>
            <p className="inline padding-sm-left">Stars: {stargazersCount}</p>
            {updatedAt &&
              <p>Updated at: {moment(updatedAt).format('LL')}</p>
            }
        </div>
    );
};

Repo.propTypes = {
    repo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        language: PropTypes.string,
        updatedAt: PropTypes.string,
    }).isRequired,
};

export default Repo;
