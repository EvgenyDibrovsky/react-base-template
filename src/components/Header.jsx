import { Link } from 'react-router-dom';
import catalog from '../image/catalog.svg';
import NavHeader from './NavHeader';

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="bg-bgHeader dark:bg-darkBgHeader z-50 w-full fixed top-0 left-0 h-20 flex items-center justify-between">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={catalog} alt="caalog" className="relative h-10" />
        </Link>
        <NavHeader theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
}
