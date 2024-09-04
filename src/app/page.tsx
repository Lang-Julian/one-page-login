"use client";  // Dies markiert die Komponente als Client Component

import Link from 'next/link';
import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login erfolgreich');
      } else {
        setMessage(data.message || 'Fehler beim Login');
      }
    } catch (error) {
      setMessage('Netzwerkfehler: ' + error);
    }
  };

  return (
    <main className="bg-pageBg bg-cover bg-center bg-no-repeat">
      <div className="bg-white bg-opacity-15 w-full h-screen flex justify-center items-center">
        <aside className="bg-black bg-opacity-50 w-full max-w-md rounded-xl shadow-xl shadow-black bg.">
          <h1 className="text-center bg-main bg-opacity-90 text-white text-4xl rounded-t-xl py-4">Anmelden</h1>
          <form className="p-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Benutzername"
              className="py-2 px-3 w-full placeholder:text-main bg-opacity-90 bg-white text-lg outline-none rounded-xl"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Passwort"
              className="py-2 px-3 w-full placeholder:text-main bg-opacity-90 bg-white text-lg outline-none mt-3 rounded-xl font-medium"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex mt-5 justify-between items-center">
              <Link href="/sign-up" className="text-white cursor-pointer transition hover:text-second px-2">
                Noch nicht Registriert?
              </Link>
              <button
                type="submit"
                className="text-white bg-opacity-80 bg-main px-8 py-2 font-medium rounded-xl transition hover:bg-second"
              >
                Anmelden
              </button>
            </div>
            {message && <p className="text-white mt-3 outline">{message}</p>}
          </form>
        </aside>
      </div>
    </main>
  );
};

export default LoginForm;
