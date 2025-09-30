import {add, minus} from "../redux/modules/test";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Test = () =>{
    const dispatch = useDispatch();
    const number = useSelector((state:any) => state.test.value)


    const [value, setValue] = useState(0)
    function handleInputChange(e:React.ChangeEvent<HTMLInputElement>){
        setValue(+e.target.value)
    }
    return(
        <div>
            <h1>환경설정 테스트</h1>
            <h2>현재 숫자 : {number}</h2>
            <input type="number" value={value} onChange={handleInputChange}/>
            <button onClick={()=>dispatch(add(value))}>+</button>
            <button onClick={()=>dispatch(minus(value))}>-</button>
        </div>
    )
}

export default Test
