import React, { useCallback, useState } from "react";
import styles from "./LearnUseCallback.module.css";
import MyButton from "../test2/MyButton";
import Item from "./item/Item";

const LearnUseCallback = () => {
  const [color, setColor] = useState(true);
  const [count, setCount] = useState(1);

  const changeColor = () => {
    setColor((prev) => !prev);
  };

  // const generateItems = () =>{
  //     return new Array(count).fill("").map((_,i)=> `item - ${i+1}`)
  // }

  const generateItems = useCallback(() => {
    return new Array(count).fill("").map((_, i) => `item - ${i + 1}`);
  }, [count]);
  
  return (
    <div className={styles.box}>
      <p style={{ color: color ? "red" : "blue" }}>Count - {count}</p>
      <MyButton onClick={() => setCount((prev) => prev + 1)}>Add</MyButton>
      <MyButton onClick={changeColor}>Change Color</MyButton>
      <Item getData={generateItems} />
    </div>
  );
};

export default LearnUseCallback;
