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
          name: "Some part",
          durationInMinutes: 30,
        },
        {
          name: "Very long part name and short duration",
          durationInMinutes: 5,
        },
        {
          name: "Some other part",
          durationInMinutes: 15,
        },
        {
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
        <EditableAgenda meetingParts={this.state.meetingParts} />
      </div>
    );
  }
}

export default App;
