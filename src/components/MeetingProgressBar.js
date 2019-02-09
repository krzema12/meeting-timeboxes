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
      </div>
    );
  }
}

export default MeetingProgressBar;
