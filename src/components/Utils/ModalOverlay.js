import React, { useEffect, useCallback, useRef } from "react";

const ModalOverlay = ({ children, IsOpen = true, setIsOpen = () => {} }) => {
  const elContainer = useRef();
  const closeModal = (e) => {
    if (e.target === elContainer.current) setIsOpen(false);
  };

  const pressEscape = useCallback(
    (e) => {
      if (e.key === "Escape" && IsOpen) {
        setIsOpen(false);
      }
    },
    [setIsOpen, IsOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", pressEscape);
    return () => document.removeEventListener("keydown", pressEscape);
  }, [pressEscape]);

  return (
    <div
      className={`fixed top-1/2 left-1/2 z-20 flex min-h-screen w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black opacity-80`}
      ref={elContainer}
      onClick={closeModal}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
