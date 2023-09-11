import { ToastContainer } from 'react-toastify';
import styled from 'styled-components/macro';

function ToastContainerBox() {
  return (
    <StyledToastContainer
      position="bottom-center"
      autoClose={1000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
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

  .Toastify__toast {
    width: 19rem;
    height: 4rem !important;
    min-height: 0;
    margin-bottom: 2.4rem;
    background-color: #2e2e2e !important;
    border-radius: 5rem;
  }

  .Toastify__toast-body div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d1ff38;
    font-size: 1.2rem;
  }
  svg {
    display: none;
  }
`;
