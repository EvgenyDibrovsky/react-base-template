export default function SelectAuthForm({ selectedForm, setSelectedForm }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-1 my-5">
      <button
        onClick={() => setSelectedForm('Login')}
        className={`h-10 flex items-center justify-center rounded-md border transition-all duration-200 border-btnAuthForm dark:border-yellow-500 text-btnAuthForm dark:text-yellow-500 hover:text-white hover:bg-btnAuthForm hover:dark:bg-yellow-500 hover:dark:text-black ${
          selectedForm === 'Login'
            ? 'bg-btnAuthForm text-white dark:bg-yellow-500 dark:text-black' // Удалить запятую
            : 'text-btnAuthForm dark:text-black'
        }`}
      >
        Login
      </button>
      <button
        onClick={() => setSelectedForm('Register')}
        className={`h-10 flex items-center justify-center rounded-md border transition-all duration-200 border-btnAuthForm dark:border-yellow-500 text-btnAuthForm dark:text-yellow-500 hover:text-white hover:bg-btnAuthForm hover:dark:bg-yellow-500 hover:dark:text-black ${
          selectedForm === 'Register'
            ? 'bg-btnAuthForm text-white  dark:bg-yellow-500 dark:text-black' // Удалить запятую
            : 'text-btnAuthForm dark:text-black'
        }`}
      >
        Registration
      </button>
    </div>
  );
}
