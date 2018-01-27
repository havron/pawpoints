import React from 'react';
import Profile from './Profile.jsx'
import Options from './Options.jsx'

require ('./stylesheets/app.scss');

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Options/>
        <Profile/>
      </div>
    );
  }
}
