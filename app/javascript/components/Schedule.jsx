import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline'
import classNames from 'classnames'

require ('./stylesheets/schedule.scss')

const VALUES = [ 8, 14 ];

class HourBin extends React.Component {
  onHourClick(i) {
    return (e) => { console.log(i); };
  }
  render() {
    return (
      <td className={ classNames({"hourBin": true, "enabled": this.props.enabled}) } onClick={ this.props.enabled ? this.onHourClick(this.props.label) : undefined }>
      </td>
    );
  }
}

class HourLabel extends React.Component {
  render() {
    let label = "";
    if (this.props.enabled) {
      label = this.props.label + ":00";
    }
    return (
      <td className={ classNames({"hourLabel": true, "enabled": this.props.enabled}) }>
        { label }
      </td>
    );
  }
}

export default class Schedule extends React.Component {
  state = { value: 0, previous: 0 };
  createBins() {
    var bins = [];
    for (var i=0; i < 24; i++) {
      var enabled = VALUES.indexOf(i) !== -1;
      bins.push(<HourBin key={ i } enabled={ enabled } label={ i }/>);
    }

    return bins;
  }
  createLabels() {
    var labels = [];
    for (var i=0; i < 24; i++) {
      var enabled = VALUES.indexOf(i) !== -1;
      labels.push(<HourLabel key={ i } enabled={ enabled } label={ i }/>);
    }
    return labels; 
  }
  render() {
    return (
      <div id="Schedule">
        <div className="line"></div>
        <table>
          <tbody>
            <tr>
              { this.createBins() }
            </tr>
            <tr>
              { this.createLabels() }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
