import React, { useEffect, useState, useRef } from 'react';

const useDetectClose = (initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  const removeHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(
    () => {
      const onClick = (e: React.MouseEvent<HTMLElement>) => {
        if (ref.current !== null && !ref.current.contains(e.target)) {
          setIsOpen(!isOpen);
        }
      };

      if (isOpen) {
        window.addEventListener('click', onClick);
      }

      return () => {
        window.removeEventListener('click', onClick);
      };
    },
    [isOpen],
  );

  return [isOpen, ref, removeHandler];
};

export default useDetectClose;
