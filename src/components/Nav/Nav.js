import { Link } from "react-router-dom"
import styles from "./Nav.module.scss"

const Nav = (props) => {
  return (
    <div className={styles.nav}>      
        <Link to="/" className={styles.nav__item}>
          <img src="/img/logo.svg" className={styles.nav__logo} />
          <span>markbook</span>        
        </Link>      
      </div>    
  )
}

export default Nav