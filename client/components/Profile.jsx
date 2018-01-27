import React from 'react';
require ('./stylesheets/profile.scss');

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <img className="profilePic" src="http://assets.nydailynews.com/polopoly_fs/1.968084.1319855101!/img/httpImage/image.jpg_gen/derivatives/article_750/alg-puss-boots-jpg.jpg"/>
      </div>
    );
  }
}
