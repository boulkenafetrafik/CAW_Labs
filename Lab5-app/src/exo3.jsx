import { useState } from 'react';
import './style/exo3.css'

function AuthForm() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { username, password }]);
    setUsername('');
    setPassword('');
  };

  const removeUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="auth-form-container">
      <h3>Exercise 3 - Authentication Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} ({user.password})
            <button
              className="delete"
              onClick={() => removeUser(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthForm;
