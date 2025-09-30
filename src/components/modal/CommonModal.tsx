import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/config/store";
import { ModalState } from "../../redux/modules/modals";


const modalStyle: React.CSSProperties = {
  position: 'relative', // 닫기 버튼의 위치 기준점
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '15px',
  right: '15px',
  background: 'transparent',
  border: 'none',
  fontSize: '24px',
  lineHeight: '1',
  cursor: 'pointer',
  padding: '0',
  color: '#555',
};

const CommonModal = (): React.JSX.Element | null => {
  const modals = useSelector((state: RootState) => state.modals.modals);

  if (!modals.length) {
    return null;
  }

  return (
    <>
      {modals.map((modal: ModalState) => {
        const ModalComponent = modal.component;

        return (
          <div key={modal.id} className="modal-overlay">
            <div className="modal" style={modalStyle}>
              {/* 닫기 버튼 */}
              <button style={closeButtonStyle} onClick={() => modal.close()}>&times;</button>

              <h3>{modal.title}</h3>
              {/* 전달받은 컴포넌트를 렌더링하고 모든 모달 관련 props를 전달 */}
              <ModalComponent {...modal} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CommonModal;

