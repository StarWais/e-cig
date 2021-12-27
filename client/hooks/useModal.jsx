import React, { createContext, useContext, useState } from 'react';

const modalContext = createContext();

export const useModal = () => useContext(modalContext);

const useProvideModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export function ModalProvider({ children }) {
  const context = useProvideModal();
  return (
    <modalContext.Provider value={context}>{children} </modalContext.Provider>
  );
}
