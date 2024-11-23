import MyButton from "../test2/MyButton";
import style from "./Test.module.css";

const Test = ({ name, age, callbackForAge, ...props }) => {
  //   console.log(props);
  //   console.log(props.name);
  // console.log(props.age);

  // const name = props.name

  //   const obj = {
  //     a: 1,
  //     b: 2,
  //   };

  //   const a = obj.a
  //   const b = obj.b

  //   const { a, b } = obj;

  //   console.log(a, b);

  // const {name,age} = props

  const newAge = age + 10;
  // console.log(newAge);
  callbackForAge(newAge);



  return (
    <div className={style.test}>
      <p>Name - {name}</p>
      <p>Age - {age}</p>
      <p>Addres - {props.address}</p>
      {/* <p>Age - {props.age}</p> */}
      <MyButton onClick={()=>alert('click me')}>click me</MyButton>
      <MyButton onClick={()=> alert('send')}>send</MyButton>
      <MyButton name='hi' onClick={()=>alert('sax lav a')}>
        <p>send</p>
        <span> message</span>
      </MyButton>
    </div>
  );
};

export default Test;
