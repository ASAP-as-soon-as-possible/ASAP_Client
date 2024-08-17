import Text from 'components/common/atomComponents/Text';
import { TooltipArrowIc } from 'components/Icon/icon';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface MemberTooltipProps {
  members: string[];
}

function MemberTooltip({ members }: MemberTooltipProps) {
  return (
    <MemberTooltipWrapper className="tooltip">
      <TooltipContent>
        <TooltipArrowIcon />
        <Text font="body4" color={theme.colors.grey7}>
          {members.join(', ')}
        </Text>
      </TooltipContent>
    </MemberTooltipWrapper>
  );
}

export default MemberTooltip;
const MemberTooltipWrapper = styled.div`
  visibility: hidden;
  z-index: 1;
  position: absolute;
  width: fit-content;
  right: 4%;
  top: 90%;
`;

const TooltipArrowIcon = styled(TooltipArrowIc)`
  position: absolute;
  top: -0.6rem;
  right: 1.3rem;

  path {
    fill: ${({ theme }) => theme.colors.grey3};
  }
`;
const TooltipContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.8rem;
  border-radius: 0.6rem;
  background-color: ${theme.colors.grey3};
  width: fit-content;
  text-align: center;
  span {
    white-space: pre;
    word-break: unset;
  }
`;
