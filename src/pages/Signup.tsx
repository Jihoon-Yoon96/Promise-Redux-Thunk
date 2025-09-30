import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/config/store"; // AppDispatch 타입을 가져옵니다.
import { openModalWithPromise } from "../redux/modules/modals";

// 모달로 사용할 컴포넌트들
import Calendar from "../components/Calendar";
import AddressModal from "../components/Address"; // 경로 수정: Address -> AddressModal

interface FormState {
  name: string;
  id: string;
  password: string;
  address: string;
  birthday: string;
}

const SignupPage = (): React.JSX.Element => {
  // useDispatch에 AppDispatch 타입을 적용하여 thunk 액션을 지원하도록 합니다.
  const dispatch = useDispatch<AppDispatch>();
  const [form, setForm] = useState<FormState>({
    name: "", id: "", password: "", address: "", birthday: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // 주소지 찾기 버튼 클릭 핸들러
  const handleAddressClick = async () => {
    // dispatch가 Promise를 반환하는 것을 TypeScript가 이제 이해합니다.
    const result = await dispatch(openModalWithPromise({
      component: AddressModal,
      title: '주소지 찾기',
    }));

    if (result) {
      setForm({ ...form, address: result });
    }
  };

  // 날짜 선택 버튼 클릭 핸들러
  const handleBirthdayClick = async () => {
    const result = await dispatch(openModalWithPromise({
      component: Calendar,
      title: '날짜 선택',
      props:{ test:'test'}
    }));

    console.log('birthday result', result);
    
    if (result) {
      setForm({ ...form, birthday: result });
    }
  };

  return (
    <>
      <div className="form-group">
        <label>이름</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>ID</label>
        <input type="text" name="id" value={form.id} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>비밀번호</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>주소지</label>
        <div className="address-box">
          <input type="text" name="address" value={form.address} readOnly />
          <button className="btn" onClick={handleAddressClick}>주소지 찾기</button>
        </div>
      </div>

      <div className="form-group">
        <label>생년월일</label>
        <div className="address-box">
          <input type="text" name="birthday" value={form.birthday} readOnly />
          <button className="btn" onClick={handleBirthdayClick}>날짜 선택</button>
        </div>
      </div>
    </>
  );
};

export default SignupPage;

