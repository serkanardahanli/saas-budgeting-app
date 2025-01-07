'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const justRegistered = searchParams.get('registered') === 'true';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/dashboard');
      } else {
        const data = await response.json();
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold mb-8">Login to FlowQi</h1>
        {justRegistered && (
          <div className="text-green-500 mb-4">Registration successful! Please log in.</div>
        )}
        <form onSubmit={handleSubmit} className="w-full max-w-xs">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full px-3 py-2 mb-4 text-gray-700 border rounded-lg focus:outline-none"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full px-3 py-2 mb-4 text-gray-700 border rounded-lg focus:outline-none"
          />
          <button
            type="submit"
            className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg focus:outline-none hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
        {error && (
          <div className="text-red-500 text-sm text-center mt-4">{error}</div>
        )}
        <div className="text-center mt-4">
          <Link href="/register" className="font-medium text-blue-500 hover:text-blue-600">
            Don't have an account? Register
          </Link>
        </div>
      </main>
    </div>
  );
}

