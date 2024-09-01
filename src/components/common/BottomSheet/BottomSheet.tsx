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
  bottom: 0;
  transform: translateY(${({ $isModalOpen }) => ($isModalOpen ? 0 : '100%')});
  flex-direction: column;
  gap: 0.8rem;
  transition: transform 600ms cubic-bezier(0.86, 0, 0.07, 1);
  z-index: 1;
  border-top-left-radius: 1.8rem;
  border-top-right-radius: 1.8rem;
  background-color: ${({ theme }) => theme.colors.grey8};

  padding: 3.6rem 2rem 4.8rem;
  width: 100%;
  max-width: 43rem;

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
