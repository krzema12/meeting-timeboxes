import React, { Component } from 'react';
import './EditableAgenda.css';

class EditableAgenda extends Component {
  render() {
    return (
      <div className="EditableAgenda">
        <h2>Agenda</h2>
        <form>
          {this.props.meetingParts.map(meetingPart =>
            <li>
              <input type="text" value={meetingPart.name} />
              <input type="number" value={meetingPart.durationInMinutes} />
            </li>
          )}
        </form>
      </div>
    );
  }
}

export default EditableAgenda;
