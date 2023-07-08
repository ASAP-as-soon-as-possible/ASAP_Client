import { useState } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import TextInput from 'components/atomComponents/TextInput';
import Header from 'components/moleculesComponents/Header';
import TitleComponents from 'components/moleculesComponents/TitleComponent';
import { styled } from 'styled-components';

function ViewTesting() {
  const [inputValue, setInputValue] = useState(``);
  return (
    <>
      <ViewTestingWrapper>
        <Header />
        <TitleComponents
          main={'어떤 회의를 계획중인가요?'}
          sub={'회의 이름을 지어주세요 (최대 15자)'}
        />
        <TextInput
          value={inputValue}
          setValue={setInputValue}
          placeholder={'서비스 기획 1차 회의'}
        />
        <StyledBtnWrapper>
          <Button
            typeState={inputValue && inputValue.length < 16 ? 'primaryActive' : 'secondaryDisabled'}
            onClick={
              inputValue && inputValue.length < 16 ? () => console.log('im clickable') : undefined
            }
          >
            <Text font={'button2'} >
              약속 생성하기
            </Text>
          </Button>
        </StyledBtnWrapper>
      </ViewTestingWrapper>
    </>
  );
}

export default ViewTesting;

const ViewTestingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const StyledBtnWrapper = styled.section`
  position: fixed;
  bottom: 1.2rem;
  border-radius: 50%;
`;
