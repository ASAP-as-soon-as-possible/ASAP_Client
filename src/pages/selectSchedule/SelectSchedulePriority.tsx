import React from 'react';

import { availableDatesAtom, preferTimesAtom } from 'atoms/atom';
import { useRecoilState } from 'recoil';

const SelectSchedulePriority = () => {
  const [availableDates, setAvailableDates] = useRecoilState(availableDatesAtom);
  const [preferTimes, setPreferTimes] = useRecoilState(preferTimesAtom);

  return <div>SelectSchedulePriority</div>;
};

export default SelectSchedulePriority;
