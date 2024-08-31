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
    width: 100%;
    max-width: 39rem;
    height: 5.4rem;
    letter-spacing: -0.032rem;
    /* margin: 0 2rem; */
    pointer-events: auto;
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
    width: 100%;
    max-width: 18.8rem;
    color: ${({ theme }) => theme.colors.white};
  `,
  halfPrimaryDisabled: css`
    ${buttonDefaultCSS.basicCss};
    background: ${({ theme }) => theme.colors.grey7};
    max-width: 18.8rem;
    width: 100%;
    color: ${({ theme }) => theme.colors.grey4};
  `,
  primaryDisabled: css`
    ${buttonDefaultCSS.basicCss};
    background: ${({ theme }) => theme.colors.grey7};
    color: ${({ theme }) => theme.colors.grey4};
    cursor: default;
  `,
  secondaryActive: css`
    ${buttonDefaultCSS.basicCss};
    background: ${({ theme }) => theme.colors.main5};
    color: ${({ theme }) => theme.colors.grey9};
  `,
  halfSecondaryActive: css`
    ${buttonDefaultCSS.basicCss};
    background: ${({ theme }) => theme.colors.main5};
    max-width: 18.8rem;
    color: ${({ theme }) => theme.colors.grey9};
  `,
  secondaryDisabled: css`
    ${buttonDefaultCSS.basicCss};
    background: ${({ theme }) => theme.colors.grey7};
    color: ${({ theme }) => theme.colors.grey5};
    pointer-events: none;
    cursor: default;
  `,
  halfsecondaryDisabled: css`
    ${buttonDefaultCSS.basicCss};
    background: ${({ theme }) => theme.colors.grey7};
    max-width: 18.8rem;
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
    max-width: 18.8rem;
    color: ${({ theme }) => theme.colors.main3};
  `,
  tertiaryDisabled: css`
    ${buttonDefaultCSS.basicCss};
    border: 1px solid ${({ theme }) => theme.colors.grey6};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.grey6};
  `,
  quaternaryDisabled: css`
    ${buttonDefaultCSS.basicCss};
    background: ${({ theme }) => theme.colors.grey7};
    color: ${({ theme }) => theme.colors.grey2};
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
      case 'quaternaryDisabled':
        return buttonCSS.quaternaryDisabled;
      default:
        return '';
    }
  }};
`;
