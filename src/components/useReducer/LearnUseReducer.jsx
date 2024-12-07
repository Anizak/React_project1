
import React, { useReducer, useState } from 'react'
import style from "./LearnUseReducer.module.css"
import MyButton from '../test2/MyButton'
import { initialState, testReducer } from '../../stateManager/testReducer';
import { type } from '@testing-library/user-event/dist/type';

const LearnUseReducer = () => {

    // const [number, setNumber] = useState(0);
    // const [name, setName] = useState("")

    const [data, dispatch] = useReducer(testReducer, initialState)
    const [value, setValue] = useState("");

  return (
    <div className={style.box}>
        <MyButton onClick={() => dispatch({type: 'decrement'})}>Decrement</MyButton>
        <p>Number :  {data.count}</p>
        <MyButton onClick={() => dispatch({type: "increment"})}>Increment</MyButton>
        <input className={style.inputField} value={value} onChange={(e)=>setValue(e.target.value)}/>
        <p>{data.name}</p>
        <MyButton onClick={()=>dispatch({type: "changeName", payload:{name : value}})}>Change Name</MyButton>
    </div>
  )
}

export default LearnUseReducer