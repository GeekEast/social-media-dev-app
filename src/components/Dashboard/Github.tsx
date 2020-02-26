import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getGithubRepo } from 'reducers/profile';
import { reposSelector } from 'selectors';
import _ from 'lodash';

const Github = ({ user }) => {
  const dispatch = useDispatch();
  const repos = useSelector(reposSelector) as [];
  useEffect(() => {
    dispatch(getGithubRepo(user))
  }, [dispatch, user])

  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">
        <i className="fab fa-github"></i> Github Repos
      </h2>

      {_.map(repos, repo => {
        const url = _.get(repo, 'html_url');
        const name = _.get(repo, 'name');
        const description = _.get(repo, 'description');
        const forks = _.get(repo, 'forks_count');
        const watchers = _.get(repo, 'watchers_count');
        const stars = _.get(repo, 'stargazers_count')

        return (
          <div className="repo bg-white my-1 p-1" key={_.get(repo,'id')}>
            <div>
              <h4><a href={url}>{name}</a></h4>
              <p>{description}</p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">Stars: {stars}</li>
                <li className="badge badge-dark">Watchers: {watchers}</li>
                <li className="badge badge-light">Forks: {forks}</li>
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Github
