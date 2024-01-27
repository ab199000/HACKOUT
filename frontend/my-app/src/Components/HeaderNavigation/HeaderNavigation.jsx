import React from "react";
import styles from "./HeaderNavigation.module.css"

export default function HeaderNavigation(){
    return(
        <nav>
            <ul className={styles.menu}>
                <li>Python</li>
                <li>JavaScript</li>
            </ul>
        </nav>
    )
}