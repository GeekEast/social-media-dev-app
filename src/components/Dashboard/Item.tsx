import React from 'react'
import _ from 'lodash';
import { Link } from 'react-router-dom';


const Item = ({ profile }) => {
  return (
    <div className="profile bg-light">
      <img src={`https:${_.get(profile, ['user_id', 'avatar'])}`} alt="gravatar"
        className="round-img" />
      <div>
        <h2>{_.get(profile, ['user_id', 'name'], '')}</h2>
        <p>{_.get(profile, ['status'], '')} at {_.get(profile, ['company'], '')}</p>
        <p>{_.get(profile, ['location'], '')}</p>
        <Link to={`/profile/${_.get(profile, ['user_id', '_id'])}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>

      <ul>
        <li className="text-primary">
          {_.map(_.get(profile, 'skills'), skill => (
            <React.Fragment key={skill}>
              <i className="fas fa-check"> {skill}</i>
            </React.Fragment>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default Item
