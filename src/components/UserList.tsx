import './UserList.scss';
import React from 'react';
import { UserEntity } from '../models/UsersEntity';

interface UserListProps {
  users: Array<UserEntity>;
  selectUser: (user: UserEntity) => void;
}

export const UserList = ({ users, selectUser }: UserListProps) => {
  return (
    <div id="user-list">
      <div id="user-list-header">
        <div id="user-list-title">Users in Audience</div>
        <div id="user-list-subtitle">Total Users - Showing 100 matching users</div>
      </div>
      <div id="user-list-divider"></div>
      <div id="user-list-data">
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className="user-list-item"
              onClick={() => {
                selectUser(user);
              }}
            >
              <div className="user-list-item-name">{user.id}</div>
              <div className="user-list-item-info">{`${user.devices} Devices - ${user.sessions.length} Sessions - ${user.location}`}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
