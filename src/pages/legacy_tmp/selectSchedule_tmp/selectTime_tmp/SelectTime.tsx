import { DropDownIc, ExitIc } from 'components/Icon/icon';

// import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components/macro';

// interface SVGParams {
//   svg: SVGProps<SVGSVGElement>;
// }

function SelectTime() {
  return (
    <SelectTimeWrapper>
      <SelectWrapper>
        <SelectContainer>
          <DateSelect>
            <option value="1">7월 1일 (토)</option>
            <option value="1">7월 2일 (일)</option>
            <option value="1">7월 3일 (월)</option>
          </DateSelect>
          {/* <DropDownIcon /> */}
        </SelectContainer>
        <TimeWrapper>
          <TimeSelector />
          <TimeSelector />
        </TimeWrapper>
      </SelectWrapper>
      <IconWrapper>
        <ExitIcon />
      </IconWrapper>
    </SelectTimeWrapper>
  );
}
const SelectTimeWrapper = styled.section`
  display: flex;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grey8};
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  padding-left: 1.2rem;

  width: 33.5rem;
  height: 12.8rem;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 27.9rem;
`;

const DateSelect = styled.select`
  appearance: none;
  border-radius: 0.8rem;
  background: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 6L0.669872 0L9.33013 0L5 6Z' fill='%234D4CFF'/%3E%3C/svg%3E%0A ")
    calc(100% - 5px) center;
  background-color: ${({ theme }) => theme.colors.grey5};
  background-repeat: no-repeat;
  padding: 5px;
  width: 100%;
  height: 4.8rem;
  text-align: center;
`;
const DropDownIcon = styled(DropDownIc)`
  position: absolute;
  top: 20px;

  right: 10px;
`;
const SelectContainer = styled.div`
  position: relative;
`;

const TimeWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: space-between;
`;

const TimeSelector = styled.select`
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey5};

  width: 13.6rem;
  height: 4.8rem;
`;

const ExitIcon = styled(ExitIc)`
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.2rem;
  height: 2.2rem;
`;
export default SelectTime;
