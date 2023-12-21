// pages/LoginPage.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8080/authenticate', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });
  //     const data = await response.text();
  //     if (response.ok) {
  //       // Login successful
  //       setError('');
  //       console.log('Login successful', data);
  //       // Redirect or perform other actions
  //       router.push('/home'); // Substitua '/dashboard' pela rota desejada
  //     } else {
  //       // Login failed
  //       setError(data.message || 'Invalid username or password');
  //       console.log('Login failed', data);
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //     setError('An error occurred during login');
  //   }
  // };

  return (
    <div>
      <h1>Register Page</h1>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <button>Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;