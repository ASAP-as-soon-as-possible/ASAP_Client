import ChooseBestTime from 'pages/bestMeetTime/ChooseBestTime';
import CompleteCreateMeeting from 'pages/completeCreateMeeting/CompleteCreateMeeting';
import CreateMeeting from 'pages/createMeeting/CreateMeeting';
import CueCard from 'pages/cueCard/CueCard';
import ErrorPage404 from 'pages/errorLoading/ErrorPage404';
import LoadingPage from 'pages/errorLoading/LoadingPage';
import LoginEntrance from 'pages/loginEntrance/LoginEntrance';
import OnBoarding from 'pages/onBoarding/OnBoarding';
import SelectSchedule from 'pages/selectSchedule/SelectSchedule';
import SteppingLayout from 'pages/steppingStone/SteppingLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/meet/create" element={<CreateMeeting />} />
        <Route path="/meet/complete/:meetingId" element={<CompleteCreateMeeting />} />
        <Route path="/:auth/select/:meetingId" element={<SelectSchedule />} />
        <Route
          path="/host/schedule-complete/:meetingId"
          element={<SteppingLayout steppingType={'hostScheduleComplete'} />}
        />
        <Route path="/meet/:meetingId" element={<SteppingLayout steppingType={'meetEntrance'} />} />
        <Route path="/login/host/:meetingId" element={<LoginEntrance loginType={'host'} />} />
        <Route path="/login/member/:meetingId" element={<LoginEntrance loginType={'member'} />} />
        <Route
          path="/member/schedule-complete/:meetingId"
          element={<SteppingLayout steppingType={'memberScheduleComplete'} />}
        />
        <Route path="/host/:meetingId" element={<ChooseBestTime />} />
        <Route path="/q-card/:meetingId" element={<CueCard />} />
        <Route path="/loadingpage" element={<LoadingPage />} />
        <Route path="*" element={<ErrorPage404 />} />
        <Route path="/error" element={<ErrorPage404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
