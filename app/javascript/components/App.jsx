import React from 'react';
import Options from './Options.jsx'
import Profile from './Profile.jsx'
import Reminders from './Reminders.jsx'
import Schedule from './Schedule.jsx'

require ('./stylesheets/app.scss');

export default class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Options/>
        <Profile/>
        <Schedule />
        <Reminders/>
      </div>
    );
  }
}
