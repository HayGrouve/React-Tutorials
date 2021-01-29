import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])
  const updateUsers = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setUsers(data)
  }
  useEffect(() => {
    updateUsers()
  }, [])

  return (<>
    <h1>Users</h1>
    <ul className='users'>
      {users.map(user => {
        return (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <h4>{user.login}</h4>
              <a href={user.html_url} target='_blanck'>profile</a>
            </div>
          </li>
        )
      })}
    </ul>
  </>)
};

export default UseEffectFetchData;
