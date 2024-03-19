import { Button, Toast, ToastBody } from "reactstrap";

const ToastResult = ({ toastIsOpen, setToastIsOpen, bg, innerText }) => {
  return (
    <Toast
      className={`${bg} text-white fixed-bottom ms-auto me-4 mb-4`}
      isOpen={toastIsOpen}
      fade
    >
      <ToastBody className="d-flex justify-content-between">
        {innerText}
        <Button
          close
          className="btn-close-white"
          onClick={() => setToastIsOpen(false)}
        ></Button>
      </ToastBody>
    </Toast>
  );
};

export default ToastResult;
