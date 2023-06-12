import React from 'react';
import './Audiences.scss';
import { UserList } from '../components/UserList';
import { UserEntity, generateSampleData } from '../models/UsersEntity';
import { UserDetails } from '../components/UserDetails';

export const Audiences = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);

  const users = generateSampleData();

  const selectUser = (user: UserEntity) => {
    setSelectedUser(user);
  };

  return (
    <div id="audience-container">
      <UserList users={users} selectUser={selectUser} />
      <UserDetails user={selectedUser} />
    </div>
  );
};
