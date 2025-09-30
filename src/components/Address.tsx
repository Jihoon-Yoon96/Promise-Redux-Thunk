import React from 'react';

// AddressModal이 받을 props 타입을 정의합니다.
interface AddressModalProps {
  tempAddress: string;
  onTempAddressChange: (value: string) => void;
  onConfirm: () => void;
  onClose: () => void;
}

const AddressModal = ({ 
  tempAddress, 
  onTempAddressChange, 
  onConfirm, 
  onClose 
}: AddressModalProps): React.JSX.Element => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>주소지 찾기</h3>
        <input
          type="text"
          value={tempAddress}
          // 부모 컴포넌트의 setTempAddress 함수를 실행합니다.
          onChange={(e) => onTempAddressChange(e.target.value)}
          placeholder="예: 서울특별시 강남구 테헤란로 123"
        />
        <div className="modal-actions">
          <button className="btn cancel" onClick={onClose}>
            취소
          </button>
          <button className="btn" onClick={onConfirm}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
