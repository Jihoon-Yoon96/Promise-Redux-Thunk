import store from "../redux/config/store";
import "../../assets/app.css";
import "../../assets/modal.css";
import { Provider } from "react-redux";

type Props = {
  children: React.ReactNode;
}; 

const Layouts = ({children}: Props) => {

  return (
    <Provider store={store}>
    <div className="container">
      <div className="form-box">
        <h2 className="title">회원가입</h2>
        <p className="subtitle">새 계정을 만들어보세요</p>

        
          {children}


        <button className="btn full">회원가입</button>
      </div>
    </div>
    </Provider>
  );
};

export default Layouts;
