'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Router instance

  // Handle form submit
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await signIn('credentials', {
      username,
      password,
      redirect: false, // Prevent auto redirect
    });
    if (res.error) {
      setError('Invalid credentials'); // Set error if failed
    } else {
      router.push('/products'); // Redirect to products on success
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-gray-500 text-black p-8 rounded-lg shadow-md w-96">
        {/* Login title */}
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="form-input mb-4 w-full border px-2 py-2 rounded-sm"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="form-input mb-4 w-full border px-2 py-2 rounded-sm"
            required
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}{' '}
          {/* Error message */}
          <button
            type="submit"
            className="btn w-full  border px-2 py-2 rounded-sm"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
