"use client";

import Link from 'next/link';
import { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwörter stimmen nicht überein');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Registrierung erfolgreich');
      } else {
        setMessage(data.message || 'Fehler bei der Registrierung');
      }
    } catch (error) {
      setMessage('Netzwerkfehler: ' + error);
    }
  };

  return (
    <main className="bg-pageBg bg-cover bg-center bg-no-repeat">
      <div className="bg-white bg-opacity-15 w-full h-screen flex justify-center items-center">
        <aside className="bg-black bg-opacity-50 w-full max-w-md rounded-xl shadow-xl shadow-black bg.">
          <h1 className="text-center bg-main bg-opacity-90 text-white text-4xl rounded-t-xl py-4">Registrieren</h1>
          <form className="p-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Benutzername"
              className="py-2 px-3 w-full placeholder:text-main bg-opacity-90 bg-white text-lg outline-none rounded-xl"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail"
              className="py-2 px-3 w-full placeholder:text-main bg-opacity-90 bg-white text-lg outline-none mt-3 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Passwort"
              className="py-2 px-3 w-full placeholder:text-main bg-opacity-90 bg-white text-lg outline-none mt-3 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Passwort wiederholen"
              className="py-2 px-3 w-full placeholder:text-main bg-opacity-90 bg-white text-lg outline-none mt-3 rounded-xl"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="flex mt-5 justify-between items-center">
              <Link href="/" className="text-white cursor-pointer transition hover:text-second px-2">
                Bereits Registriert?
              </Link>
              <button
                type="submit"
                className="text-white bg-opacity-80 bg-main px-8 py-2 font-medium rounded-xl transitio hover:bg-second"
              >
                Registrieren
              </button>
            </div>
            {message && <p className="text-white text-center mt-3 p-2 outline rounded-xl ">{message}</p>}
          </form>
        </aside>
      </div>
    </main>
  );
};

export default SignUp;
