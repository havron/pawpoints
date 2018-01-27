import React from 'react';
import FaPlusSquareO from 'react-icons/lib/fa/plus-square-o';
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left'
import FaArrowCircleOLeft from 'react-icons/lib/fa/arrow-circle-o-left'
import FaArrowCircleUp from 'react-icons/lib/fa/arrow-circle-up'
import FaArrowCircleOUp from 'react-icons/lib/fa/arrow-circle-o-up'

import classNames from 'classnames'

require ('./stylesheets/reminders.scss')

export default class Reminders extends React.Component {
  render() {
    return (
      <div id="Reminders">
        <div id="PawLeft">
          <FaArrowCircleLeft className={ classNames("ToeLeft", "Toe") }/>
          <FaArrowCircleOLeft className={ classNames("ToeLeft", "Toe") }/>
        </div>
        <FaPlusSquareO id="Plus" />
        <div id="PawRight">
          <div className="ToesUp">
            <FaArrowCircleUp className={ classNames("Toe") }/>
            <FaArrowCircleOUp className={ classNames("Toe") }/>
          </div>
        </div>
      </div>
    );
  }
}
