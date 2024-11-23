import  styles from "./Header.module.css" 
import images from "../../assets/images/Rectangle 123.png"

const Header = () => {
    const  name = 'Ani'
    return <header className={styles.header}>
        <p>Hello {name}</p>
        {/* <img src={images} alt="img" /> */}
    </header>
}

export default Header