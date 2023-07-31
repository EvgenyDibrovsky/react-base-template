import { FaRegLightbulb, FaLightbulb } from 'react-icons/fa';

export default function ToggleTheme({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="text-switherTheme duration-200 hover:scale-[1.1] text-[1.2rem] dark:text-yellow-500"
    >
      {theme === 'light' ? <FaRegLightbulb /> : <FaLightbulb />}
    </button>
  );
}
