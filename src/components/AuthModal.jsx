import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BsX } from 'react-icons/bs';

export default function AuthModal({ closeModal }) {
  // Отключаем прокрутку при монтировании компонента
  useEffect(() => {
    document.body.classList.add('overflow-y-hidden');

    // Возвращаем прокрутку при размонтировании компонента
    return () => {
      document.body.classList.remove('overflow-y-hidden');
    };
  }, []);

  const modalContent = (
    <div
      className="fixed inset-0 flex items-center justify-center  bg-bgModal z-50 backdrop-blur-sm"
      onClick={closeModal}
    >
      <div
        className="relative w-1/2 h-1/2 rounded-md transition-all duration-200 bg-white text-black shadow-md dark:bg-black dark:text-white dark:shadow-white p-10"
        onClick={e => e.stopPropagation()} // Останавливаем всплытие события, чтобы модальное окно не закрывалось при клике внутри
      >
        <BsX
          className="absolute cursor-pointer right-2 top-2 text-[2rem] text-black dark:text-white hover:text-red-500 transition-all duration-200"
          onClick={closeModal}
        />
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById('modal-root')
  );
}
