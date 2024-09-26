import { useRef, useState } from "react";
function Bmitext({bmi}){
    if(bmi<18.5)
        return (<h1>UnderWeight</h1>);
    if(bmi>30)
        return (<h1>OverWeight</h1>);
    return (<h1>Normal</h1>);
}
export default function Bmi(){
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [bmi,setBmi]=useState(0.00);
    function handleClick(){
        let w=W_input.current.value;
        let h=H_input.current.value/100;
        setBmi(w/Math.pow(h,2))
    }
    return (<>
    Weigth: <input ref={W_input}/> kg.<br/>
    hight: <input ref={H_input}/> cm.<br/> 
    <button onClick={handleClick}>Calculate</button><br/>
    Bmi:{bmi.toFixed(2)}
    <Bmitext bmi={bmi}/></>);

}