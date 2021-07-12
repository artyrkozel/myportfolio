import React from "react";
import styles from './title.module.scss'

const Title = (props: any) => {
    return (
        <div className={styles.sectionHeading}>
            <span>{props.subTitle}</span>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Title