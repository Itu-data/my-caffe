import React, { useState, useEffect } from 'react';

function UserManagement() {
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <section>
      <h2 className='target'>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default UserManagement;
