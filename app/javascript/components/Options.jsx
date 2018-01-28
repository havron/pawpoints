import React from 'react';
import FaCog from 'react-icons/lib/fa/cog';
import FaQuestionCircle from 'react-icons/lib/fa/question-circle'
import FaFilm from 'react-icons/lib/fa/film'
import FaCamera from 'react-icons/lib/fa/camera'
require ('./stylesheets/options.scss')

export default class Options extends React.Component {
  render() {
    return (
      <div id="Options">
        <FaCog className="option" />
        <FaQuestionCircle className="option" />
        <FaFilm className="option" />
        <FaCamera className="option" />
      </div>
    );
  }
}
