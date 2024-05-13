import { useRef } from "react";
import "../style/Modal.css";

function Modal({ setToggleModal, setTodos, clickedId }) {
  const ref = useRef(null);
  const onWrapCancel = (event) => {
    if (event.target === ref.current) {
      setToggleModal((prev) => !prev);
    }
  };
  const onCancel = () => {
    setToggleModal((prev) => !prev);
  };
  const onConfirm = () => {
    setToggleModal((prev) => !prev);
    setTodos((prev) => prev.filter((todo) => todo.id !== clickedId));
  };
  return (
    <div className="wrap" ref={ref} onClick={onWrapCancel}>
      <div className="alert-box">
        <div>삭제를 하시겠습니까?</div>
        <div className="btn-box">
          <button onClick={onCancel}>취소</button>
          <button onClick={onConfirm}>확인</button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
