import { Link } from 'react-router-dom';
import NavHeader from './NavHeader';
import { TbWorldWww } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

export default function Header({ theme, toggleTheme }) {
  const { t } = useTranslation();

  return (
    <header className="bg-bgHeader dark:bg-darkBgHeader z-50 w-full fixed top-0 left-0 h-20 flex items-center justify-between">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex gap-4 items-center">
            <TbWorldWww className="text-colorLogo dark:text-yellow-500 transition-all duration-500 text-[3rem]" />
            <div>
              <p className="text-[0.6rem] font-semibold text-black dark:text-white transition-all duration-200">
                {t('logo-text-1')}
              </p>
              <p className="text-[0.6rem] font-semibold text-black dark:text-white transition-all duration-200">
                {t('logo-text-2')}
              </p>
              <p className="text-[0.6rem] font-semibold text-black dark:text-white transition-all duration-200">
                {t('logo-text-3')}
              </p>
            </div>
          </div>
        </Link>
        <NavHeader theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
}
