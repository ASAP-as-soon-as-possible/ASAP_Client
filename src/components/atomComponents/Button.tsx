import React from 'react';

import { css, styled } from 'styled-components'


interface ButtonProps {
    children: React.ReactNode,
    typeState: string
    onClick?:()=>void
}

function Button({ children, typeState ,onClick }: ButtonProps) {
  return (
    <StyledBtn type={typeState} onClick={onClick}>{children}</StyledBtn>
  )
}

export default Button

const buttonDefaultCSS = {
  basicCss : css`
  display: flex;
  width: 30.3rem;
  height: 5.4rem;
  padding: 1.6rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  letter-spacing: -0.032rem;
  `
}

const buttonCSS = {
  primaryActive: css`
      ${buttonDefaultCSS.basicCss};
      background: ${({theme})=>theme.colors.main1};
      color: #FFFFFF;
    `,
  halfPrimaryActive: css`
  ${buttonDefaultCSS.basicCss};
  width:16rem;
  background: ${({theme})=>theme.colors.main1};
  color: #FFFFFF;
    `,
  primaryDisabled: css`
      ${buttonDefaultCSS.basicCss};
      background: ${({theme})=>theme.colors.grey7};
      color: ${({theme})=>theme.colors.white};
    `,
  secondaryActive: css`
      ${buttonDefaultCSS.basicCss};
      background: ${({theme})=>theme.colors.main5};
      color:  ${({theme})=>theme.colors.grey9};
    `,
  secondaryDisabled: css`
      ${buttonDefaultCSS.basicCss};
      background: ${({theme})=>theme.colors.grey7};
      color: ${({theme})=>theme.colors.grey5};
    `,
  tertiaryActive: css`
    ${buttonDefaultCSS.basicCss};
    background-color: transparent;
    border: 1px solid ${({theme})=>theme.colors.main3};
    color: ${({theme})=>theme.colors.main3};
`,
  halfTertiaryActive: css`
    ${buttonDefaultCSS.basicCss};
    width: 16rem;
    background-color: transparent;
    border: 1px solid ${({theme})=>theme.colors.main3};
    color: ${({theme})=>theme.colors.main3};
`,
  tertiaryDisabled: css`
    ${buttonDefaultCSS.basicCss};
    background-color: transparent;
    border: 1px solid ${({theme})=>theme.colors.grey6};
    color: ${({theme})=>theme.colors.grey6};
`,
};

const StyledBtn = styled.button<{ type: string }>`
${({ type }) => {
    switch (type) {
    case "primaryActive":
      return buttonCSS.primaryActive;
    case "halfPrimaryActive":
      return buttonCSS.halfPrimaryActive;
    case "primaryDisabled":
      return buttonCSS.primaryDisabled;
    case "secondaryActive":
      return buttonCSS.secondaryActive;
    case "secondaryDisabled":
      return buttonCSS.secondaryDisabled;
    case "tertiaryActive":
      return buttonCSS.tertiaryActive;
    case "halfTertiaryActive":
      return buttonCSS.halfTertiaryActive;
    case "tertiaryDisabled":
      return buttonCSS.tertiaryDisabled;
    default:
      return '';
    }
  }
}
`