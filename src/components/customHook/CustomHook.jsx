import React from "react";
import style from "./CustomHook.module.css";
import MyButton from "../test2/MyButton";

const CustomHook = () => {

  return <div className={style.box}>
    <input type="text" value/>
    <input type="text"/>
    <MyButton>log in</MyButton>
  </div>;
};

export default CustomHook;
