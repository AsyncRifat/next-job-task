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
      <div className="max-w-xl mx-auto bg-gray-200 p-6 rounded-lg shadow-lg text-black">
        {/* Login title */}
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="form-input form-input w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-cyan-500 bg-teal-50 border-gray-300 text-black mb-5"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="form-input form-input w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-cyan-500 bg-teal-50 border-gray-300 text-black mb-5"
            required
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}{' '}
          {/* Error message */}
          <button
            type="submit"
            className="btn w-full bg-cyan-800 py-2 rounded-lg text-teal-50"
          >
            Login
          </button>
          <p className="text-rose-500 mt-3">
            <span className="font-bold text-md">Sorry!</span> <br /> I did not
            connect it to mongoDB. <br /> I hardcoded the username and password.{' '}
            <br /> username: <span className="font-bold text-md">Admin</span>{' '}
            <br /> password:
            <span className="font-bold text-md">password</span> <br />
            Using these you will get permission to add products.
          </p>
        </form>
      </div>
    </div>
  );
}
