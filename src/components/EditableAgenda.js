import React from 'react';
import './EditableAgenda.css';

const EditableAgenda = ({meetingParts, onChange}) => (
  <div className="EditableAgenda">
    <h2>Agenda</h2>
    <form>
      {meetingParts.map(meetingPart =>
        <li key={meetingPart.id}>
          <input
              type="text"
              value={meetingPart.name}
              onChange={e => onChange(meetingPart.id, 'name', e.target.value)} />
          <input
              type="number"
              value={meetingPart.durationInMinutes}
              onChange={e => onChange(meetingPart.id, 'durationInMinutes', parseInt(e.target.value))} />
        </li>
      )}
    </form>
  </div>
);

export default EditableAgenda;
