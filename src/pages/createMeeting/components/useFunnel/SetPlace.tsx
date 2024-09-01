import Button from 'components/common/atomComponents/Button';
import PlaceInput from 'components/common/atomComponents/PlaceInput';
import Text from 'components/common/atomComponents/Text';
import BottomBtnSection from 'components/common/moleculesComponents/BottomBtnSection';
import { placeType } from 'pages/createMeeting/data/meetingInfoData';
import { FunnelProps } from 'pages/createMeeting/types/useFunnelInterface';
import styled from 'styled-components';

function SetPlace({ meetingInfo, setMeetingInfo, setStep }: FunnelProps) {
  const setPlaceDetail = (place: string) => {
    setMeetingInfo((prev) => ({ ...prev, place, placeDetail: '' }));
  };
  return (
    <SetPlaceWrapper>
      <PlaceInfoSection>
        {Object.keys(placeType).map((type, i) => {
          return (
            <PlaceSection key={i + type}>
              <Button
                typeState={meetingInfo.place === type ? 'primaryActive' : 'primaryDisabled'}
                onClick={() => setPlaceDetail(type)}
              >
                <Text font={'button2'}>
                  {type === 'ONLINE' ? '온라인' : type === 'OFFLINE' ? '오프라인' : '미정'}
                </Text>
              </Button>
              {type === 'UNDEFINED' ? null : meetingInfo.place === type ? (
                <PlaceInput
                  data={type}
                  value={meetingInfo.placeDetail}
                  setValue={setMeetingInfo}
                  placeholder={
                    type === 'ONLINE'
                      ? '(선택) 화상 회의 툴을 입력해주세요'
                      : '(선택) 구체적인 장소명을 입력해주세요'
                  }
                />
              ) : null}
            </PlaceSection>
          );
        })}
      </PlaceInfoSection>
      <BottomBtnSection>
        <Button
          typeState={meetingInfo.place ? 'primaryActive' : 'primaryDisabled'}
          onClick={
            meetingInfo.place
              ? () =>
                  setStep((prev: number) => {
                    if (prev === 6) {
                      return prev;
                    }
                    return prev + 1;
                  })
              : undefined
          }
        >
          <Text font={'button2'}>다음</Text>
        </Button>
      </BottomBtnSection>
    </SetPlaceWrapper>
  );
}

export default SetPlace;

const SetPlaceWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

const PlaceInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
const PlaceSection = styled.section``;
