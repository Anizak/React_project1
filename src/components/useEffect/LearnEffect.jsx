import { useEffect, useState } from "react";
import style from "./LearnEffect.module.css"
import MyButton from "../test2/MyButton";


const LearnEffect = () => {
    const [time, setTime] = useState(new Date());

    const [value, setValue]  = useState("");

    const [position, setPosition] = useState({x : 0, y : 0});

    const getPosition = (e) =>{
        setPosition({x : e.clientX , y : e.clientY});
    }

    setInterval(( )=> {
        setTime(new Date());
    }, 1000);
    // let time = new Date();

    useEffect(()=>{
        document.addEventListener("mousemove" , getPosition);

        return () => {document.removeEventListener("mousemove", getPosition)}
    },[])    //[] -> ess depqum ashxatuma 1 angam 

    useEffect(()=>{
     console.log(value);
        
    },[value])     //[] -> ess depqum ashxatuma 1 angam 

    const [data, setData] = useState([]);
    const [type, setType] = useState("users")

    const getUsers = ()=> {
        setType("users");
    }

    const getToDo = ()=> {
        setType("todos")
    }
    const getPosts = ()=> {
        setType("posts")
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
    }, [type])

    return <div className={style.mainBox}>
        <div className={style.timeBox}>{time.toLocaleTimeString()}</div>
        <div className={style.inputBox}>
            <input className={style.inputField} value={value} onChange = {(e) => setValue(e.target.value)}/>
            <MyButton onClick={getUsers}>Users</MyButton>
            <MyButton onClick={getToDo}>ToDo</MyButton>
            <MyButton onClick={getPosts}>Posts</MyButton> 
        </div>
        <div className={style.position}><pre>{JSON.stringify(position, null, 2)}</pre></div>
        <div className={style.data}><pre>{JSON.stringify(data, null, 2)}</pre></div>
    </div>
};


export default LearnEffect;