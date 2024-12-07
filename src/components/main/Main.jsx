import MyButton from "../test2/MyButton";
import style from "./Main.module.css";
import { useAlert } from "../alert/AlertContext";

import React from "react";

const Main = () => {
  const {toggle} = useAlert();

  return (
    <div className={style.box}>
      <p>This is the Main component</p>
      <MyButton onClick={toggle}>Alert!</MyButton>
    </div>
  );
};

export default Main;
