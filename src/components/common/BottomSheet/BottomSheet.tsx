import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import styled from 'styled-components';

interface BottomSheetProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

function BottomSheet({ children, isOpen }: BottomSheetProps) {
  return (
    <>
      <BottomSheetModal $isModalOpen={isOpen}>{children}</BottomSheetModal>
      <ModalOverlay $isModalOpen={isOpen} />
    </>
  );
}

export default BottomSheet;

const BottomSheetModal = styled.div<{ $isModalOpen: boolean }>`
  display: flex;
  position: fixed;
  bottom: ${({ $isModalOpen }) => ($isModalOpen ? 0 : -27.5)}rem;
  flex-direction: column;
  gap: 0.8rem;
  transition: bottom 600ms cubic-bezier(0.86, 0, 0.07, 1);
  z-index: 1;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.grey8};

  padding: 2.8rem 2rem 4rem;
  width: 37.5rem;

  & button {
    width: 100%;
  }
`;

const ModalOverlay = styled.div<{ $isModalOpen: boolean }>`
  display: ${({ $isModalOpen }) => ($isModalOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;

  background-color: ${({ theme }) => theme.colors.black60};
  width: 100%;
  height: 100%;
`;
