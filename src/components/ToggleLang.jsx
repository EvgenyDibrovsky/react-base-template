import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ToggleLang() {
  const { i18n } = useTranslation();

  // Изменяем язык при изменении значения выпадающего списка
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <select
        value={i18n.language} // Устанавливаем значение select на текущий язык
        className="cursor-pointer bg-transparent focus:outline-none font-semibold ml-5 duration-200 hover:text-hoverToggleLang dark:text-white dark:hover:text-yellow-500"
        onChange={e => changeLanguage(e.target.value)}
      >
        <option
          className="bg-transparent text-black dark:text-black"
          value="en"
        >
          EN
        </option>
        <option
          className="bg-transparent text-black dark:text-black"
          value="ru"
        >
          RU
        </option>
      </select>
    </div>
  );
}
