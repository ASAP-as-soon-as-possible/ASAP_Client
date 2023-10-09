import React from 'react';

import { css, styled } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  typeState: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, typeState, onClick }: ButtonProps) {
  return (
    <ButtonWrapper $type={typeState} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
}

export default Button;

const buttonDefaultCSS = {
  basicCss: css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    padding: 1.6rem;
    width: 33.5rem;
    height: 5.4rem;
    letter-spacing: -0.032rem;
  `,
};

const buttonCSS = {
  primaryActive: css`
    ${buttonDefaultCSS.basicCss};
    background: ${({ theme }) => theme.colors.main1};
    color: ${({ theme }) => theme.colors.white};
  `,
  halfPrimaryActive: css`
    ${buttonDefaultCSS.basicCss};
    background: ${({ theme }) => theme.colors.main1};
    width: 15.2rem;
    color: ${({ theme }) => theme.colors.white};
  `,
  halfPrimaryDisabled: css`
    ${buttonDefaultCSS.basicCss};
    background: ${({ theme }) => theme.colors.grey7};
    width: 15.2rem;
    color: ${({ theme }) => theme.colors.white};
  `,
  primaryDisabled: css`
    ${buttonDefaultCSS.basicCss};
    background: ${({ theme }) => theme.colors.grey7};
    color: ${({ theme }) => theme.colors.white};
  `,
  secondaryActive: css`
    ${buttonDefaultCSS.basicCss};
    background: ${({ theme }) => theme.colors.main5};
    color: ${({ theme }) => theme.colors.grey9};
  `,
  halfSecondaryActive: css`
    ${buttonDefaultCSS.basicCss};
    background: ${({ theme }) => theme.colors.main5};
    width: 15.2rem;
    color: ${({ theme }) => theme.colors.grey9};
  `,
  secondaryDisabled: css`
    ${buttonDefaultCSS.basicCss};
    background: ${({ theme }) => theme.colors.grey7};
    color: ${({ theme }) => theme.colors.grey5};
  `,
  halfsecondaryDisabled: css`
    ${buttonDefaultCSS.basicCss};
    background: ${({ theme }) => theme.colors.grey7};
    width: 15.2rem;
    color: ${({ theme }) => theme.colors.grey5};
  `,
  tertiaryActive: css`
    ${buttonDefaultCSS.basicCss};
    border: 1px solid ${({ theme }) => theme.colors.main3};
    background-color: ${({ theme }) => theme.colors.grey10};
    color: ${({ theme }) => theme.colors.main3};
  `,
  halfTertiaryActive: css`
    ${buttonDefaultCSS.basicCss};
    border: 1px solid ${({ theme }) => theme.colors.main3};
    background-color: ${({ theme }) => theme.colors.grey10};
    width: 15.2rem;
    color: ${({ theme }) => theme.colors.main3};
  `,
  tertiaryDisabled: css`
    ${buttonDefaultCSS.basicCss};
    border: 1px solid ${({ theme }) => theme.colors.grey6};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.grey6};
  `,
};

const ButtonWrapper = styled.button<{ $type: string }>`
  ${({ $type }) => {
    switch ($type) {
      case 'primaryActive':
        return buttonCSS.primaryActive;
      case 'halfPrimaryActive':
        return buttonCSS.halfPrimaryActive;
      case 'primaryDisabled':
        return buttonCSS.primaryDisabled;
      case 'secondaryActive':
        return buttonCSS.secondaryActive;
      case 'halfSecondaryActive':
        return buttonCSS.halfSecondaryActive;
      case 'secondaryDisabled':
        return buttonCSS.secondaryDisabled;
      case 'halfsecondaryDisabled':
        return buttonCSS.halfsecondaryDisabled;
      case 'tertiaryActive':
        return buttonCSS.tertiaryActive;
      case 'halfTertiaryActive':
        return buttonCSS.halfTertiaryActive;
      case 'tertiaryDisabled':
        return buttonCSS.tertiaryDisabled;
      case 'halfPrimaryDisabled':
        return buttonCSS.halfPrimaryDisabled;
      default:
        return '';
    }
  }};
`;
