import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

function ToastContainerBox() {
  return (
    <StyledToastContainer
      position="bottom-center"
      autoClose={1000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={true}
      draggable
      pauseOnHover
      theme="dark"
      limit={1}
    />
  );
}

export default ToastContainerBox;

const StyledToastContainer = styled(ToastContainer)`
  display: flex;
  position: absolute;
  bottom: 6rem;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .Toastify__toast.Toastify__toast {
    width: 19rem;

    min-height: 4rem;
    margin-bottom: 1.4rem;
    background-color: #2e2e2e;
    border-radius: 5rem;
  }
  .Toastify__toast-body {
  }
  .Toastify__toast-body div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d1ff38;
    font-weight: 500;
    font-size: 1.2rem;
    font-family: 'Pretendard Variable';
    line-height: 1.6;
  }
  svg {
    display: none;
  }
`;
