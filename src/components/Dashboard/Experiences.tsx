import React from 'react'
import _ from 'lodash'
import moment from 'moment';

const Experiences = ({ experiences }) => {
  return (
    <div className="profile-exp bg-white p-2">
      <h2 className="text-primary">Experiences</h2>
      {_.map(experiences, exp => (
        <div key={exp._id}>
          <h3>{exp.company}</h3>
          <p>{moment(exp.from).format('MMM YYYY')} - {moment(exp.to).format('MMM YYYY')}</p>
          <p><strong>Position:</strong> {exp.title} </p>
          <p><strong>Description:</strong>
            {_.get(exp, 'description', '')}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Experiences
