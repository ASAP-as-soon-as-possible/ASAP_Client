import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import {
  BackIc,
  ClockIc,
  DropDownIc,
  DropUpIc,
  ExitIc,
  HambergerIc,
  InputCancelIc,
  InputErrorIc,
  LinkIc,
  MainLogoIc,
  OfflinePlaceIc,
  OnlinePlaceIc,
  PasswordEyeIc,
  PasswordOpenEyeIc,
  PlaceIc,
  PlusIc,
  RadioCheckIc,
  RadioCheckedIc,
  TimeIc,
} from 'components/Icon/icon';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

const buttonType: string[] = [
  'primaryActive',
  'primaryDisabled',
  'secondaryActive',
  'secondaryDisabled',
  'tertiaryActive',
  'tertiaryDisabled',
  'halfPrimaryActive',
  'halfTertiaryActive',
  'halfsecondaryDisabled',
];

const textComponentsType: string[] = [
  'head2',
  'title1',
  'title2',
  'body1',
  'body2',
  'body3',
  'body4',
  'head1',
  'button1',
  'button2',
];

function ComponentTesting() {
  //TextInput component 사용시 useState 로 보내주기
  // const [inputValue, setInputValue] = useState(``);
  //TextAreaInput component 사용시 useState 로 보내주기
  // const [textAreaValue, settextAreaValue] = useState(``);

  return (
    <>
      <Wrapper>
        <CategorySection>
          <h1>SVG Component</h1>
          <MainLogoIc />
          <IconWrapper>
            <HambergerIc />
          </IconWrapper>
          <IconWrapper>
            <ExitIc />
          </IconWrapper>
          <InputCancelIc />
          <InputErrorIc />
          <RadioCheckIc />
          <RadioCheckedIc />
          <IconWrapper>
            <BackIc />
          </IconWrapper>
          <PlusIc />
          <DropDownIc />
          <DropUpIc />
          <PasswordEyeIc />
          <PasswordOpenEyeIc />
          <IconWrapper>
            <LinkIc />
          </IconWrapper>
          <PlaceIc />
          <ClockIc />
          <OnlinePlaceIc />
          <OfflinePlaceIc />
          <TimeIc />
        </CategorySection>
        <CategorySection>
          <h1>ReuseComponents</h1>
          {/* <TextInput
            value={inputValue}
            setValue={setInputValue}
            placeholder={'서비스 기획 1차 회의'}
          />
          <TextAreaInput
            value={textAreaValue}
            setValue={settextAreaValue}
            placeholder={
              '회의 안건, 준비물 등 회의와 관련하여 알리고 싶은 추가 내용을 적어 보세요.'
            }
          /> */}
          {/* <PlaceInput /> */}
        </CategorySection>
        <CategorySection>
          <h1>ReuseButton</h1>

          {buttonType.map((type, i) => {
            return (
              <Button key={i} typeState={type}>
                <Text font={'button2'}>약속 생성하기</Text>
              </Button>
            );
          })}
        </CategorySection>
        <CategorySection>
          <h1>TextComponents</h1>
          {textComponentsType.map((type, i) => {
            return (
              <Text key={i} font={type} color={`${theme.colors.black}`}>
                Hello
              </Text>
            );
          })}
        </CategorySection>
      </Wrapper>
    </>
  );
}

export default ComponentTesting;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  width: 100%;
  height: 80rem;
`;

const CategorySection = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;

  border: 2px solid ${({ theme }) => theme.colors.black};
  padding: 1rem;

  height: 100%;
`;

const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 12.35px 11px;
`;
