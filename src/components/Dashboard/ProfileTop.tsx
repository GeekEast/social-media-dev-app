import React from 'react'
import _ from 'lodash';

const ProfileTop = ({profile}) => {
  const { user_id, status, bio, company, location, website, facebook, twitter, linkedin, instagram, skills } = profile;

  return (
    <React.Fragment>
              <div className="profile-top bg-primary p-2">
          <img
            src={`https:${_.get(user_id, 'avatar')}`}
            alt="gravatar"
            className="round-img my-1"
          />
          <h1 className="large">{_.get(user_id, 'name')}</h1>
          <p className="lead">{status} at {company}</p>
          <p>{location}</p>
          <div className="icons my-1">
            {!!website && (
              <a href={`https://${website}`}>
                <i className="fas fa-globe fa-2x"></i>
              </a>
            )}
            {!!twitter && (<a href={`${twitter}`}>
              <i className="fab fa-twitter fa-2x"></i>
            </a>)
            }
            {
              !!facebook && (<a href={`${facebook}`}>
                <i className="fab fa-facebook fa-2x"></i>
              </a>)
            }
            {
              !!linkedin && (<a href={`${linkedin}`}>
                <i className="fab fa-linkedin fa-2x"></i>
              </a>)
            }
            {
              !!instagram && (<a href={`${instagram}`}>
                <i className="fab fa-instagram fa-2x"></i>
              </a>)
            }
          </div>
        </div>

        <div className="profile-about bg-light p-2">
          <h2 className="text-primary">{_.get(user_id, 'name')}'s Bio</h2>
          <p>
            {bio}
          </p>
          <div className="line"></div>
          <h2 className="text-primary">Skill Set</h2>
          <div className="skills">
            {_.map(skills, skill => (
              <div className="p-1" key={skill}>
                <i className="fas fa-check"></i> {skill}
              </div>
            ))}
          </div>
        </div>
      
    </React.Fragment>
  )
}

export default ProfileTop
