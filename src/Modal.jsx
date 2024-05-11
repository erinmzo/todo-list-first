import "./modal.css";
function Modal({ modal, setModal }) {
  const onCancel = () => {
    setModal((prev) => !prev);
  };
  return (
    <div className="wrap">
      <div className="alert-box">
        <div>삭제를 하시겠습니까?</div>
        <div className="btn-box">
          <button onClick={onCancel}>취소</button>
          <button>확인</button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
