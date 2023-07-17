import AvailableSchedule from 'pages/AvailableSchedule/AvailableSchedule';
import ChooseBestTime from 'pages/BestMeetTime/ChooseBestTime';
import ComponentTesting from 'pages/ComponentTesting';
import CreateMeeting from 'pages/createMeeting/CreateMeeting';
import CueCard from 'pages/cueCard/CueCard';
import ErrorPage404 from 'pages/ErrorLoading/ErrorPage404';
import LoadingPage from 'pages/ErrorLoading/LoadingPage';
import LoginEntrance from 'pages/LoginEntrance/LoginEntrance';
import OnBoarding from 'pages/onBoarding/OnBoarding';
import Prioritization from 'pages/Prioritization/Prioritization';
import SelectPage from 'pages/selectSchdule/SelectPage';
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
        <Route path="/priority/:meetingId" element={<Prioritization />} />
        <Route path="/schedule-complete/:meetingId" element={<div>일정 입력 완료 페이지</div>} />
        <Route path="/meet/:meetingId" element={<div>링크입장페이지</div>} />
        <Route path="/login/:meetingId" element={<div>로그인 페이지를 넣어주세요</div>} />
        <Route path="/host/:meetingId" element={<div>최적의 회의시간 페이지를 넣어주세요</div>} />
        <Route
          path="/schedule-complete/:meetingId"
          element={<SteppingLayout steppingType={'hostScheduleComplete'} />}
        />
        <Route path="/meet/:meetingId" element={<SteppingLayout steppingType={'meetEntrance'} />} />
        <Route path="/login/host/:meetingId" element={<LoginEntrance loginType={'host'} />} />
        <Route path="/login/member/:meetingId" element={<LoginEntrance loginType={'member'} />} />
        <Route path="/host/:meetingId" element={<ChooseBestTime />} />
        <Route path="/q-card/:meetingId" element={<CueCard />} />
        <Route path="/loadingpage" element={<LoadingPage />} />
        <Route path="*" element={<ErrorPage404 />} />
        <Route path="*" element={<div>not found</div>} />
        <Route path="/select" element={<SelectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
