export default function SelectAuthForm({ selectedForm, setSelectedForm }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-1 my-5">
      <button
        onClick={() => setSelectedForm('Login')}
        className={`h-10 flex items-center justify-center rounded-md border transition-all duration-200 border-btnAuthForm text-btnAuthForm hover:text-white hover:bg-btnAuthForm ${
          selectedForm === 'Login'
            ? 'bg-btnAuthForm text-white' // Удалить запятую
            : 'text-btnAuthForm'
        }`}
      >
        Login
      </button>
      <button
        onClick={() => setSelectedForm('Register')}
        className={`h-10 flex items-center justify-center rounded-md border transition-all duration-200 border-btnAuthForm text-btnAuthForm hover:text-white hover:bg-btnAuthForm ${
          selectedForm === 'Register'
            ? 'bg-btnAuthForm text-white' // Удалить запятую
            : 'text-btnAuthForm'
        }`}
      >
        Registration
      </button>
    </div>
  );
}
