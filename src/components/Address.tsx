import React from 'react';
import { useState } from 'react';

/** AddressModal이 받을 props 타입 정의 **/ 
// 모달 호출될 때 받는 props
interface PropsFromParent {
  address: string
}

// Redux에서 받는 props 전체
interface AddressModalProps {
  id: number;
  component: React.ComponentType<any>;
  title: React.ReactNode;
  close: (result?: any) => void;
  // address: string;
  props: PropsFromParent; // 이거 왜 안되냐..
}

const Address = (props: AddressModalProps): React.JSX.Element => {
  console.log('AddressModal props', props);
  
  const [newAddress, setNewAddress] = useState(props.props.address || '');
  console.log('newAddress', newAddress);
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAddress(e.target.value);
  }

  const handleConfirm = () => {
    props.close(newAddress); // 입력된 주소를 부모 컴포넌트로 전달하고 모달 닫기 (Promise resolve 처리)
  }
  
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>주소지 찾기</h3>
        <input
          type="text"
          value={newAddress}
          // 부모 컴포넌트의 setTempAddress 함수를 실행합니다.
          onChange={(e) => handleInputChange(e)}
          placeholder="예: 서울특별시 강남구 테헤란로 123"
        />
        <div className="modal-actions">
          <button className="btn cancel" onClick={()=>props.close(props.props.address)}>
            취소
          </button>
          <button className="btn" onClick={handleConfirm}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
