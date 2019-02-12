import React, { Component } from 'react';
import MeetingProgressBar from './components/MeetingProgressBar';
import EditableAgenda from './components/EditableAgenda';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO temporarily hardcoded
      meetingParts: [
        {
          id: 0,
          name: "Some part",
          durationInMinutes: 30,
        },
        {
          id: 1,
          name: "Very long part name and short duration",
          durationInMinutes: 5,
        },
        {
          id: 2,
          name: "Some other part",
          durationInMinutes: 15,
        },
        {
          id: 3,
          name: "Foobar",
          durationInMinutes: 10,
        }
      ],
      // TODO temporarily hardcoded - will change as the time flows
      elapsedTimeInSeconds: 0,
      timeCountingEnabled: false,
    };
  }

  render() {
    return (
      <div className="App">
        <MeetingProgressBar
            meetingParts={this.state.meetingParts}
            elapsedTimeInMinutes={this.state.elapsedTimeInSeconds/60} />
        <EditableAgenda
            meetingParts={this.state.meetingParts}
            onChange={this._meetingPartChanged.bind(this)} />
            <input type="button" value="Start meeting" onClick={this._startMeeting.bind(this)} />
      </div>
    );
  }

  _meetingPartChanged(meetingPartId, propertyName, newValue) {
    const indexOfMeetingPartToChange =
      this.state.meetingParts.findIndex(meetingPart => {
        return meetingPart.id === meetingPartId;
      });
    this.state.meetingParts[indexOfMeetingPartToChange][propertyName] = newValue;
    // TODO do not mutate state directly. I'll probably use Redux.
    this.setState(this.state);
  }

  _startMeeting() {
    if (this.state.timeCountingEnabled === false) {
      this._schedulePeriodicCurrentTimeMarkerUpdate();
    }
    this.setState({ timeCountingEnabled: true });
  }

  _schedulePeriodicCurrentTimeMarkerUpdate() {
    setInterval(this._updateMarker.bind(this), 1000);
  }

  _updateMarker() {
    this.setState({ elapsedTimeInSeconds: this.state.elapsedTimeInSeconds + 1 });
  }
}

export default App;
