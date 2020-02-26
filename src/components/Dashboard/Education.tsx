import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { createInputControlProps } from './utils';
import { useDispatch } from 'react-redux';
import { createEducation } from 'reducers/profile';


const Education = ({ history }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEducation(state, history));
  }
  const inputControlProps = createInputControlProps(state, setState);
  return (
    <>
      <h1 className="large text-primary">
        Add An Education
      </h1>
      <p className="lead">
        <i className="fas fa-graduation-cap"></i>
        Add any school, bootCamp, etc that you have attended.
    </p>
      <small>* = required fields</small>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="* School or Bootcamp" name="school" required {...inputControlProps('school')} />
        </div>


        <div className="form-group">
          <input type="text" placeholder="* Degree or Certificate" name="degree" required {...inputControlProps('degree')} />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Field Of Study" name="fieldofstudy" {...inputControlProps('fieldofstudy')} />
        </div>


        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" {...inputControlProps('from')} />
        </div>

        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" {...inputControlProps('to')} />
        </div>


        <div className="form-group">
          <p>
            <input type="checkbox" name="current" value="" {...inputControlProps('current')} /> Current School
          </p>
        </div>

        <div className="form-group">
          <textarea
            name="description"
            // cols="30" 
            // rows="5" 
            placeholder="Program Description"
            {...inputControlProps('description')}
          >
          </textarea>
        </div>

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn my-1" to="/dashboard">Go Back</Link>
      </form>
    </>
  )
}

export default withRouter(Education);
