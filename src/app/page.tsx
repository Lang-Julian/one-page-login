import Link from 'next/link';

const LoginForm = () => {
  return (
    <main className="bg-pageBg bg-cover bg-center bg-no-repeat">
      <div className="bg-white bg-opacity-15 w-full h-screen flex justify-center items-center">
        <aside className="bg-black bg-opacity-50 w-full max-w-md rounded-xl shadow-xl shadow-black bg.">
          <h1 className="text-center bg-main bg-opacity-90 text-white text-4xl rounded-t-xl py-4">Anmelden</h1>
          <form className="p-6" action="">
            <input type="text" name="" placeholder="Benutzername" className="py-2 px-3 w-full placeholder:text-main bg-opacity-90 bg-white text-lg outline-none rounded-xl" />
            <input type="password" name="" placeholder="Passwort" className="py-2 px-3 w-full placeholder:text-main bg-opacity-90 bg-white text-lg outline-none mt-3 rounded-xl font-medium" />
            <div className="flex mt-5 justify-between items-center">
              <Link href="/sign-up" className="text-white cursor-pointer transition hover:text-second px-2">Noch nicht Registriert?</Link>
              <button type="submit" className="text-white bg-opacity-80 bg-main px-8 py-2 font-medium rounded-xl transition hover:bg-second" >Anmelden</button>
            </div>
          </form>
        </aside>
      </div>
    </main>
  );
};

export default LoginForm;