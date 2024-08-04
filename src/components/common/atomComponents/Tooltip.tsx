import { TooltipArrowIc } from 'components/Icon/icon';
import styled from 'styled-components';

interface TooltipPropTypes {
  tooltipText: string;
}
const Tooltip = ({ tooltipText }: TooltipPropTypes) => {
  return (
    <TooltipWrapper>
      <TooltioArrowIcon />
      <ToolTipTextWrapper>{tooltipText}</ToolTipTextWrapper>
    </TooltipWrapper>
  );
};

const TooltipWrapper = styled.div`
  cursor: default;
  position: absolute;

  top: 6rem;
  width: 8.1rem;
  height: 2.8rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const TooltioArrowIcon = styled(TooltipArrowIc)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ToolTipTextWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.1rem;
  height: 2.8rem;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.grey9};

  color: ${({ theme }) => theme.colors.grey5};

  ${({ theme }) => theme.fonts.body4};
`;
export default Tooltip;
