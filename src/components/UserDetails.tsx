import './UserDetails.scss';
import React from 'react';
import { UserEntity } from '../models/UsersEntity';
import { dateFormat } from '../utils/dateFormat';

interface UserDetailsProps {
  user: UserEntity;
}

export const UserDetails = ({ user }: UserDetailsProps) => {
  if (!user) {
    return (
      <div id="user-details">
        <div id="user-details-header">
          <div id="user-details-title">No User Selected</div>
        </div>
      </div>
    );
  }

  return (
    <div id="user-details">
      <div id="user-details-header">
        <div id="user-details-title">{user.id}</div>
        <div id="user-details-subtitle">{`${dateFormat(user.created)} - ${user.location}`}</div>
      </div>
      <div id="user-details-data">
        <div id="user-details-devices">
          <p>Devices</p>
          <p>{user.devices}</p>
        </div>
        <div id="user-details-sessions">
          <p>Sessions</p>
          <p>{user.sessions.length}</p>
        </div>
        <div id="user-details-events">
          <p>Events</p>
          <p>{user.events}</p>
        </div>
      </div>
      <div id="user-details-attributes">
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(user.attributes).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{user.attributes[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
