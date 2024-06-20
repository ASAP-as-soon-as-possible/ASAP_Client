import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ChooseBestTime from 'pages/BestMeetTime/ChooseBestTime';
import CreateMeeting from 'pages/createMeeting/CreateMeeting';
import CueCard from 'pages/cueCard/CueCard';
import ErrorPage404 from 'pages/ErrorLoading/ErrorPage404';
import LoadingPage from 'pages/ErrorLoading/LoadingPage';
import LoginEntrance from 'pages/LoginEntrance/LoginEntrance';
import OnBoarding from 'pages/onBoarding/OnBoarding';
import SelectPage from 'pages/selectSchedule/SelectSchedulePage';
import SelectSchedulePriority from 'pages/legacy/selectSchedule/SelectPriorityPage';
import SteppingLayout from 'pages/SteppingStone/SteppingLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/meet/create" element={<CreateMeeting />} />
        <Route path="/meet/complete" element={<SteppingLayout steppingType={'meetComplete'} />} />
        <Route path="/:auth/schedule/:meetingId" element={<SelectPage />} />
        <Route path="/:auth/priority/:meetingId" element={<SelectSchedulePriority />} />
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
        <Route path="/select" element={<SelectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
