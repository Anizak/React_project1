import style from "./MyButton.module.css"

const MyButton = ({children,onClick,...props}) => {
 
    // const send = ()=>{
       
    //     alert('Send !')
    // }
    // const send = (id)=>{
    //     console.log(id);
        
    //     alert('Send !')
    // }
    
    return <button className={style.button} onClick={onClick}>{children}</button>
    // return <button className={style.button} onClick={send}>{children}</button>
    // return <button className={style.button} onClick={()=>send(1)}>{children}</button>
}

export default MyButton;