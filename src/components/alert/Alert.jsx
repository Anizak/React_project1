import React, { useContext } from "react";
import style from "./Alert.module.css";
import { AlertContext, useAlert } from "./AlertContext";

const Alert = () => {
  // const alert = useContext(AlertContext);

  const {visible} = useAlert();

  if (!visible) return null;
  return (
    <div className={style.box}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        quisquam eligendi eum corrupti recusandae fugiat vel quae illum eaque
        aliquam numquam, adipisci nostrum ipsum voluptas placeat neque?
        Inventore, fuga illo!
      </p>
    </div>
  );
};

export default Alert;
