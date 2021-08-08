// npm modules
import { useState, useEffect } from 'react';
// project modules
import './App.css';
import { getUsers } from './utils/getUsers';
import List from './components/List/List';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  function removeUser(id) {
    const removedTargetUser = users.filter((user) => user.id !== id);
    setUsers(removedTargetUser);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Power users
        </p>
        <List users={users} removeUser={removeUser}/>
      </header>
    </div>
  );
}

export default App;
