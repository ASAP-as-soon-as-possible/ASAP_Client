import Button from 'components/atomComponents/Button';
import PlaceInput from 'components/atomComponents/PlaceInput';
import Text from 'components/atomComponents/Text';
import { placeType } from 'pages/createMeeting/data/meetingInfoData'
import { funnelProps } from 'pages/createMeeting/types/useFunnelInterface';
import styled from 'styled-components/macro';


function SetPlace({meetingInfo,setMeetingInfo,setStep}:funnelProps) {
    const setPlaceDetail = (place: string) => {
        setMeetingInfo((prev) => ({ ...prev, place ,placeDetail: ""}));
      };
  return (
  <>
    <PlaceInfoWrapper>
          {placeType.map((type , i)=>{
            return (<PlaceSetion key={i+type}>
                      <Button typeState={meetingInfo?.place === type ? 'primaryActive' : 'secondaryDisabled'} onClick={()=>setPlaceDetail(type)}>
                          <Text font={'button2'}>{type === "ONLINE"?"온라인": type ==="OFFLINE"?"오프라인":"미정"}</Text>
                      </Button>
                      {type === "UNDEFIND" ? null : meetingInfo?.place === type ? <PlaceInput
                        data={type}
                        value={meetingInfo.placeDetail}
                        setValue={setMeetingInfo}
                        placeholder={type === "ONLINE"?"(선택) 화상 회의 툴을 입력해주세요":"(선택) 구체적인 장소명을 입력해주세요"}
                      /> : null
                      }
                  </PlaceSetion>)
          })}
        </PlaceInfoWrapper>
        <StyledBtnWrapper>
          <Button
            typeState={meetingInfo.place ? 'primaryActive' : 'secondaryDisabled'}
            onClick={
                meetingInfo.place
                ? () =>
                    setStep((prev:number) => {
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
        </StyledBtnWrapper>
        </>
  )
}

export default SetPlace

const StyledBtnWrapper = styled.section`
  position: fixed;
  bottom: 1.2rem;
  border-radius: 50%;
`;

const PlaceInfoWrapper = styled.div`
  display:flex;
  flex-direction: column;
  gap:1rem;
`
const PlaceSetion = styled.section``