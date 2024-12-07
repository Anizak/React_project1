import React, { useMemo, useState } from "react";
import styles from "./LearnUseMemo.module.css";
import MyButton from "../test2/MyButton";

const double = (num) => {
  console.log("jdsd");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

const LearnUseMemo = () => {
  const [number, setNumber] = useState(30);
  const [color, setColor] = useState("");

  const changeColor = () => {
    setColor((prev) => !prev);
  };

  // const result = double(number);
  const result = useMemo(() => {
    return double(number);
  }, [number]);

  return (
    <div className={styles.box}>
      <p style={{ color: color ? "red" : "brown" }}>Number - {result}</p>
      <MyButton onClick={() => setNumber((prev) => prev + 1)}>Plus</MyButton>
      <MyButton onClick={() => setNumber((prev) => prev - 1)}>Minus</MyButton>
      <MyButton onClick={changeColor}>Change Color </MyButton>
    </div>
  );
};

export default LearnUseMemo;
