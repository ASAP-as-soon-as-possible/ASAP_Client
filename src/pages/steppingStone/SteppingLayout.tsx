import { useEffect, useState } from 'react';

import Header from 'components/moleculesComponents/Header';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { client } from 'utils/apis/axios';

import SteppingBody from './components/SteppingBody';
import SteppingBtnSection from './components/SteppingBtnSection';

interface SteppingProps {
  steppingType: string;
}

function SteppingLayout({ steppingType }: SteppingProps) {
  const navigate = useNavigate();
  const { meetingId } = useParams();

  const [meetingTitle, setMeetingTitle] = useState('');

  const isConfirmedMeet = async () => {
    // 회의명 붙이기
    const result = await client.get(`/meeting/${meetingId}`);
    if (result.data.code === 409) {
      navigate(`/q-card/${meetingId}`);
    } else {
      setMeetingTitle(result.data.data.title);
    }
  };

  useEffect(
    () => {
      if (steppingType === 'meetEntrance') {
        isConfirmedMeet();
      }
    },
    [steppingType],
  );

  const handlePopstate = () => {
    navigate('/');
  };

  useEffect(() => {
    return () => {
      window.addEventListener('popstate', handlePopstate);
    };
  }, []);

  return (
    <>
      <SteppingWrapper>
        <Header position={'stepping'} />
        <SteppingBody steppingType={steppingType} meetingTitle={meetingTitle} />
        <SteppingBtnSection steppingType={steppingType} />
        <div />
      </SteppingWrapper>
    </>
  );
}

export default SteppingLayout;

const SteppingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
