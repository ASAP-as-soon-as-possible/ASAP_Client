import React from 'react';

import { css, styled } from 'styled-components'


interface ButtonProps {
    children: React.ReactNode,
    typeState: string
}

function Button({ children, typeState }: ButtonProps) {
  return (
    <StyledBtn type={typeState}>{children}</StyledBtn>
  )
}

export default Button

const buttonDefaultCSS = {
  basicCss : css`
  display: flex;
  width: 303px;
  height: 54px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  letter-spacing: -0.32px;
  `
}

const buttonCSS = {
  primaryActive: css`
      ${buttonDefaultCSS.basicCss};
      background: var(--asap-main-1, #3253FF);
      color: #FFFFFF;
    `,
  primaryDisabled: css`
      ${buttonDefaultCSS.basicCss};
      background: var(--asap-neutral-grey-7, #3F3F3F);
      color: #A4A4A4;
    `,
  secondaryActive: css`
      ${buttonDefaultCSS.basicCss};
      background: var(--asap-main-5, #B0BDFF);
      color: #252525;
    `,
  secondaryDisabled: css`
      ${buttonDefaultCSS.basicCss};
      background: var(--asap-neutral-grey-7, #3F3F3F);
      color: #787878;
    `,
  tertiaryActive: css`
    ${buttonDefaultCSS.basicCss};
    background-color: transparent;
    border: 1px solid var(--asap-main-3, #667EFF);
    color: #667EFF;
`,
  tertiaryDisabled: css`
    ${buttonDefaultCSS.basicCss};
    background-color: transparent;
    border: 1px solid var(--asap-neutral-grey-6, #555);
    color: #555555;
`,
};

const StyledBtn = styled.button<{ type: string }>`
${({ type }) => {
    switch (type) {
    case "primaryActive":
      return buttonCSS.primaryActive;
    case "primaryDisabled":
      return buttonCSS.primaryDisabled;
    case "secondaryActive":
      return buttonCSS.secondaryActive;
    case "secondaryDisabled":
      return buttonCSS.secondaryDisabled;
    case "tertiaryActive":
      return buttonCSS.tertiaryActive;
    case "tertiaryDisabled":
      return buttonCSS.tertiaryDisabled;
    default:
      return '';
    }
  }
}
`