import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/config/store"; // 1. RootState 타입을 가져옵니다.
import { ModalState } from "../../redux/modules/modals";    // 2. Modal의 개별 상태 타입을 가져옵니다.

const CommonModal = (): React.JSX.Element | null => {
  // 3. useSelector의 state에 RootState 타입을 지정합니다.
  const modals = useSelector((state: RootState) => state.modals.modals);

  if (!modals.length) {
    return null;
  }

  return (
    <>
      {/* 4. 이제 TypeScript는 'modal'이 ModalState 타입이라는 것을 압니다. */}
      {modals.map((modal: ModalState) => {
        const ModalComponent = modal.component;

        return (
          <div key={modal.id} className="modal-overlay">
            <div className="modal">
              <h3>{modal.title}</h3>
              {/* <ModalComponent {...modal.props} close={modal.close} /> */}
              <ModalComponent {...modal} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CommonModal;

