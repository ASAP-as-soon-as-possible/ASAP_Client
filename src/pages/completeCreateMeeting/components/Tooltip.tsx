import { TooltipArrowIc } from 'components/Icon/icon';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import Text from '../../../components/common/atomComponents/Text';

interface TooltipPropTypes {
  tooltipText: string;
}
const Tooltip = ({ tooltipText }: TooltipPropTypes) => {
  return (
    <TooltipWrapper>
      <TooltioArrowIcon />
      <ToolTipTextWrapper>
        <Text color={theme.colors.grey5} font={'body4'}>
          {tooltipText}
        </Text>
      </ToolTipTextWrapper>
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
`;
export default Tooltip;
