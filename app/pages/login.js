// pages/LoginPage.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Input,
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Input, Ripple });

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const redirectRegister = async () => {
    try {
      router.push('/register'); // Substitua '/dashboard' pela rota desejada
    } catch (error) {
      console.error('Error during redirect:', error);
      setError('An error occurred during redirect');
    }
  }

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.text();
      if (response.ok) {
        // Login successful
        setError('');
        console.log('Login successful', data);
        // Redirect or perform other actions
        router.push('/home'); // Substitua '/dashboard' pela rota desejada
      } else {
        // Login failed
        setError(data.message || 'Invalid username or password');
        console.log('Login failed', data);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <div class="h-screen bg-indigo-100 flex justify-center items-center">
      <div class="lg:w-2/5 md:w-1/2 w-2/3">
        <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
          <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Formregister</h1>
          <div>
            <label class="text-gray-800 font-semibold block my-3 text-md" for="username">Username</label>
            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="username" />
          </div>
            <div>
              <label class="text-gray-800 font-semibold block my-3 text-md" for="email">Email</label>
              <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="@email" />
          </div>
              <div>
                <label class="text-gray-800 font-semibold block my-3 text-md" for="password">Password</label>
                <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="password" />
          </div>
                <div>
                  <label class="text-gray-800 font-semibold block my-3 text-md" for="confirm">Confirm password</label>
                  <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="confirm" id="confirm" placeholder="confirm password" />
          </div>
                  <button type="submit" class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>
                  <button type="submit" class="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

{/* <div>
      <h1>Login Page</h1>
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <text onClick={(redirectRegister)}>register</text>
      </div>
    </div> */}