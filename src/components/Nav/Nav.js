import { Link } from "react-router-dom"
import styles from "./Nav.module.scss"

const Nav = (props) => {
  return (
    <div>
      <Link to="/">
        <div>Markbook</div>
      </Link>      
    </div>
  )
}

export default Nav