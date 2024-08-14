import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import Text from '../atomComponents/Text';

interface BottomSheetProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  children?: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
}

function BottomSheet({ children, isOpen, onClose }: BottomSheetProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Trigger>
        <Text color={theme.colors.white} font={theme.fonts.body1}>
          dialog open
        </Text>
      </Dialog.Trigger>
      <Dialog.Portal>
        <StyledBackground>
          <BottomSheetContent>
            <Dialog.Title>
              <Text color={theme.colors.black} font={theme.fonts.body1}>
                title
              </Text>
            </Dialog.Title>
            <Dialog.Description>
              <Text color={theme.colors.black} font={theme.fonts.body1}>
                description
              </Text>
            </Dialog.Description>
            <Dialog.Close>
              <Text color={theme.colors.black} font={theme.fonts.body1}>
                dialog close
              </Text>
            </Dialog.Close>
          </BottomSheetContent>
        </StyledBackground>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default BottomSheet;

const BottomSheetContent = styled(Dialog.Content)`
  width: 500px;
  height: 500px;
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledBackground = styled(Dialog.Overlay)`
  display: flex;
  position: fixed;
  inset: 0;
  align-items: center;
  justify-content: center;
  background: var(--semantic-color-background-dimmed, rgb(15 15 18 / 80%));
`;
