import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux'

function User() {

  const user = useSelector(state => state.session)
  const { userId }  = useParams();
  const history = useHistory()
  useEffect(() => {
    if (user) {
      history.push('/')
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      // setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
    </ul>
  );
}
export default User;
