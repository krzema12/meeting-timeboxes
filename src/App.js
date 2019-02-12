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
      elapsedTimeInMinutes: 20,
    };
  }

  render() {
    return (
      <div className="App">
        <MeetingProgressBar
            meetingParts={this.state.meetingParts}
            elapsedTimeInMinutes={this.state.elapsedTimeInMinutes} />
        <EditableAgenda
            meetingParts={this.state.meetingParts}
            onChange={this._meetingPartChanged.bind(this)} />
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
}

export default App;
