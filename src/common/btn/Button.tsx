import React from "react";
import styles from './Btn.module.scss'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

type btnType = {
    title: string
}

const Btn = (props: btnType) => {
    return (
        <div className={`${styles.maiBtn} ${styles.btn5}`}>
            {props.title}
            <ArrowForwardIcon />
        </div>

    )
}
export default Btn