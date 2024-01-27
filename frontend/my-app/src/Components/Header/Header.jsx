import React from "react";
import styles from "./Header.module.css"
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import logo from "../../img/logo.png"

export default function Header(){
    return(
        <header className={styles.header}>
            <HeaderNavigation/>
            <img src={logo} alt="#" />
            <button className={styles.glowOnHover} type="submit">Sign Up</button>
        </header>
    )
}