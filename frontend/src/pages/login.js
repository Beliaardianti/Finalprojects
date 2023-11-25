import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();

    // Contoh sederhana: validasi email dan password
    if (email === 'user@example.com' && password === 'password') {
      // Jika email dan password sesuai, navigasi ke halaman dashboard
      history('/dashboard');
    } else {
      // Jika login gagal, bisa tambahkan logika lainnya, misalnya, tampilkan pesan kesalahan
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-400">
      <div className="bg-white p-8 rounded shadow-md w-4/12">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="email"
              id="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="m-4 text-center">
          Don't have an account?{' '}
          <Link to="/register" className="text-pink-700 cursor-pointer">
            Register
          </Link>
        </p>
          <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
