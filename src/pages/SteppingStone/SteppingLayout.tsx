import { useEffect, useState } from 'react';

import Header from 'components/moleculesComponents/Header';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { authClient, client } from 'utils/apis/axios';

import SteppingBody from './components/SteppingBody';
import SteppingBtnSection from './components/SteppingBtnSection';

interface SteppingProps {
  steppingType: string;
}

function SteppingLayout({ steppingType }: SteppingProps) {
  const navigate = useNavigate();
  const { meetingId } = useParams();

  const isConfirmedMeet = async () => {
    const result = await client.get(`/meeting/${meetingId}`);
    console.log(result);
    if (result.data.code === 409) {
      navigate(`/q-card/${meetingId}`);
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

  return (
    <>
      <SteppingWrapper>
        <Header position={'stepping'} />
        <SteppingBody steppingType={steppingType} />
        <SteppingBtnSection steppingType={steppingType} />
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
