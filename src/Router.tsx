import AvailableSchedule from 'pages/AvailableSchedule/AvailableSchedule';
import ComponentTesting from 'pages/ComponentTesting';
import CreateMeeting from 'pages/createMeeting/CreateMeeting';
import CueCard from 'pages/cueCard/CueCard';
import LoginEntrance from 'pages/LoginEntrance/LoginEntrance';
import OnBoarding from 'pages/onBoarding/OnBoarding';
import SteppingLayout from 'pages/SteppingStone/SteppingLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/componenttest" element={<ComponentTesting />} />
        <Route path="/" element={<OnBoarding />} />
        <Route path="/scheduletest" element={<AvailableSchedule />} />
        <Route path="/meet/create" element={<CreateMeeting />} />
        <Route path="/meet/complete" element={<SteppingLayout steppingType={'meetComplete'} />} />
        <Route path="/schedule/:meetingId" element={<div>가능 시간 입력페이지를 넣어주세요</div>} />
        <Route path="/priority/:meetingId" element={<div>우선순위 선정페이지를 넣어주세요</div>} />
        <Route
          path="/schedule-complete/:meetingId"
          element={<SteppingLayout steppingType={'hostScheduleComplete'} />}
        />
        <Route path="/meet/:meetingId" element={<SteppingLayout steppingType={'meetEntrance'} />} />
        <Route path="/login/host/:meetingId" element={<LoginEntrance loginType={"host"} />} />
        <Route path="/login/member/:meetingId" element={<LoginEntrance loginType={"member"} />} />
        <Route path="/host/:meetingId" element={<div>최적의 회의시간 페이지를 넣어주세요</div>} />
        <Route path="/q-card/:meetingId" element={<CueCard />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
