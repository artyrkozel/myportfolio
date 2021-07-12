import React from "react";
import styles from './mainBtn.module.scss'
import {Link} from "react-scroll";

const MainBtn = (props: any) => {

    return (
        <div className={styles.wr}>
            <a className={`${styles.mainBtn} ${styles.btn4}`}>
                Click me
            </a>
        </div>



    )
}
export default MainBtn