import React, { Component } from 'react';
import './MeetingProgressBar.css';

class MeetingProgressBar extends Component {
  render() {
    return (
      <div className="MeetingProgressBar">
        <ol>
          {this.props.meetingParts.map(meetingPart =>
            <li style={{flexGrow: meetingPart.durationInMinutes}}></li>
          )}
        </ol>
        <div className="currentTimeIndicator"
            style={{left: this._calculateElapsedTimePercentage(
              this.props.meetingParts, this.props.elapsedTimeInMinutes) + '%'}}>
              now
        </div>
      </div>
    );
  }

  _calculateElapsedTimePercentage(meetingParts, elapsedTimeInMinutes) {
    const sumOfDurationsOfAllMeetingParts = meetingParts
        .map(meetingPart => meetingPart.durationInMinutes)
        .reduce((a, b) => a + b, 0);
    return elapsedTimeInMinutes*100/sumOfDurationsOfAllMeetingParts;
  }
}

export default MeetingProgressBar;
