import React, { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import AuthModal from './AuthModal'; // Убедитесь, что путь правильный

export default function AuthHeader() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <BsPersonCircle className="text-[1.2rem] text-black dark:text-white" />
      </button>
      {showModal && <AuthModal closeModal={() => setShowModal(false)} />}
    </>
  );
}
