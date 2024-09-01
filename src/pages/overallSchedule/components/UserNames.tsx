import Text from 'components/common/atomComponents/Text';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';

import { useClickContext } from '../contexts/useClickContext';

function UserNames() {
  const { clickedUserNames } = useClickContext();

  return (
    <Dim>
      <UserNamesWrapper>
        {clickedUserNames.length === 0 ? (
          <Texts>
            <Text font={'body4'} color={`${theme.colors.grey5}`}>
              블럭을 선택하면 해당 시간대에 참여가능한
            </Text>
            <Text font={'body4'} color={`${theme.colors.grey5}`}>
              인원을 확인할 수 있어요
            </Text>
          </Texts>
        ) : (
          <Text font={'body2'} color={theme.colors.grey2}>
            {clickedUserNames.join(', ')}
          </Text>
        )}
      </UserNamesWrapper>
    </Dim>
  );
}

export default UserNames;

const UserNamesWrapper = styled.aside`
  display: flex;

  bottom: 4.4rem;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.grey5};
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.grey9};
  width: 33.5rem;
  min-height: 8.3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Dim = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  gap: 1rem;
  align-items: end;
  justify-content: center;
  z-index: 2;
  height: 16.4rem;

  margin-top: 3rem;
  background: ${({ theme }) => theme.colors.dim_gradient};
  padding-bottom: 2.9rem;

  width: 100%;

  pointer-events: none;
`;
