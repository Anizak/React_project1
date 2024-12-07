import { useState } from "react";
import MyButton from "../test2/MyButton";
import style from "./LearnState.module.css";

const LearnState = () => {
  // const countState = useState(0);
  // let count = countState[0]
  // let changeCount = countState[1]   sra poxaren grum enq

  const [value, setValue] = useState("");

  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ani",
    },
    {
      id: 2,
      name: "Stepan",
    },
  ]);

  const increment = () => {
    // count++;

    // let a = (count + 6 - 7) * 10

    setCount(count + 1);
    // console.log(count);
  };
  const decrement = () => {
    setCount(count - 1);
    // console.log(count);
  };


  const add = () => {
    let localUsers = [...users];
    localUsers[0].name = value;
    setUsers(localUsers);
  };

  return (
    <div className={style.mainBox}>
      <MyButton onClick={decrement}>decrement</MyButton>
      <p>count = {count}</p>
      <MyButton onClick={increment}>increment</MyButton>
      <div className={style.usersBox}>users : {users[0].name}, {users[1].name}</div>
      <input className={style.inputField} type="text" value={value} onChange={(e)=> setValue(e.target.value)}/>
      <button className={style.btn} onClick={add}>
        Add
      </button>
    </div>
  );
};

export default LearnState;
