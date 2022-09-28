import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext(null);
const ModalProvider = (props) => {
  const [IsOpen, setIsOpen] = useState(false);
  return <ModalContext.Provider value={{ IsOpen, setIsOpen }} {...props} />;
};

const useModalProvider = () => useContext(ModalContext);

export { ModalProvider, useModalProvider };
