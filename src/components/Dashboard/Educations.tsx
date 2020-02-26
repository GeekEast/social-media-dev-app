import React from 'react'
import _ from 'lodash'
import moment from 'moment'

const Educations = ({ educations }) => {
  return (
    <div className="profile-edu bg-white p-2">
      <h2 className="text-primary">Education</h2>
      {_.map(educations, edu => (
        <div key={edu._id}>
          <h3>{_.get(edu, 'school')}</h3>
          <p><strong>Degree:</strong> {_.get(edu, 'degree')} of {_.get(edu, 'fieldofstudy')} </p>
          <p>{moment(edu.from).format('MMM YYYY')} - {moment(edu.to).format('MMM YYYY')}</p>
          <p><strong>Description:</strong>{_.get(edu, 'description')}</p>
        </div>
      ))
      }
    </div>
  )
}

export default Educations
