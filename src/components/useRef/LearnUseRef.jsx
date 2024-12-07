import { useEffect, useRef, useState } from "react";
import styles from "./LearnUseRef.module.css";
import MyButton from "../test2/MyButton";

const LearnUseRef = () => {
  const [value, setValue] = useState("");
  const count = useRef(0);
  const inputRef = useRef(null);
  const [value2, setValue2] = useState("");

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const changeValue2 = (e) => {
    setValue2(e.target.value);
  };
 
  useEffect(() => {
    count.current++;
    
  });

  let buttonActive = true;

  const clickButton = () => {
    if (buttonActive){
        inputRef.current.style.backgroundColor = "orange"
        inputRef.current.style.border = "2px solid green"
        inputRef.current.focus();
        buttonActive = false;
    }
    else{
        inputRef.current.style.backgroundColor = "white"
        inputRef.current.style.border = "none"
        inputRef.current.blur();
        buttonActive = true;
    }
  }

  return (
    <div className={styles.inputBox}>
      <div className={styles.countBox}>
        <p>Count : {count.current} </p>
        <MyButton onClick={clickButton}>Click me!</MyButton>
      </div>
      <input
        ref={inputRef}
        className={styles.inputField}
        value={value}
        onChange={changeValue}
      />
      <input
        className={styles.inputField}
        value={value2}
        onChange={changeValue2}
      />
    </div>
  );
};

export default LearnUseRef;
