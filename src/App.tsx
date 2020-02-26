import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Landing, Alert } from 'components/Layout';
import { Show as Login } from 'components/Login';
// import Missing from 'components/Missing';
import { Show as Register } from 'components/Register';
import { Show as Dashboard, Edit as EditProfile, EditExperience, EditEducation, List as Profiles, Profile} from 'components/Dashboard';
import { authUser } from 'reducers';
import Desk from 'components/Prototypes/Desk';
import PrivateRoute from 'routes/PrivateRoute';
import {List as Posts, Post} from 'components/Posts';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authUser());
  }, [dispatch])

  return (
    <Suspense fallback={''}>
      <Router>
        <Navbar />
        <Route path='/' exact component={Landing} />  {/* index page */}
        <section className="container">   {/* container parts */}
          <Alert />
          <Switch>
            <PrivateRoute path='/post' component={Post}/>
            <PrivateRoute path='/posts' component={Posts}/>
            <Route path='/profiles' component={Profiles}/>
            <PrivateRoute path='/education/edit' component={EditEducation}/>
            <PrivateRoute path='/experience/edit' component={EditExperience}/>
            <PrivateRoute path='/profile/edit' component={EditProfile}/>
            <Route path='/profile/:id' component={Profile}/>
            <PrivateRoute path='/dashboard' exact component={Dashboard} />
            <Route path='/register' exact component={Register} />
            <Route path='/login' exact component={Login} />
            <Route path='/reselect' exact component={Desk} />
            {/* <Route component={Missing} /> */}
          </Switch>
        </section>
      </Router>
    </Suspense>

  )
}

export default App;
