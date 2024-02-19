import React from "react";
import { Link } from "react-router-dom"
import styles from "./Nav.module.scss"

const Nav = (props) => {
  return (
    <div>
      <Link to="/">
        <div>Home</div>
      </Link>      
    </div>
  )
}

export default Nav