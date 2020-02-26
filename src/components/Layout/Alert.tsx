import React from 'react'
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect'
import classNames from 'classnames';

const selectAlerts = state => state.alerts;

// memorized mapReducer
const reselectAlerts = createSelector(
  [selectAlerts],
  (alerts) => alerts
)

export const Alert = () => {
  const alerts = useSelector(reselectAlerts);

  return !!alerts && !!alerts.length ? (
    alerts.map(alert => (
      <div key={alert.id} className={classNames(['alert', `alert-${alert.alertType}`])}>
        {alert.msg}
      </div>
    ))
  ) : null
}
