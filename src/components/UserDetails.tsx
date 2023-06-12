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
          <div id="user-list-title">No User Selected</div>
        </div>
      </div>
    );
  }

  return (
    <div id="user-details">
      <div id="user-details-header">
        <div id="user-list-title">{user.id}</div>
        <div id="user-list-subtitle">{`${dateFormat(user.created)} - ${user.location}`}</div>
      </div>
      <div id="user-details-data">
        <div className="user-details-tile">
          <div className="user-details-tile-title">Devices</div>
          <div className="user-details-tile-data">{user.devices}</div>
        </div>
        <div className="user-details-tile">
          <div className="user-details-tile-title">Sessions</div>
          <div className="user-details-tile-data">{user.sessions.length}</div>
        </div>
        <div className="user-details-tile">
          <div className="user-details-tile-title">Events</div>
          <div className="user-details-tile-data">{user.events}</div>
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
