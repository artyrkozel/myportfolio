import React, {useState} from "react";
import styles from './projectItem.module.scss'
import Btn from "../../common/btn/Button";
import Modal from "../../Modal/Modal";
import {dataType} from "../Projects";

type projectType = {
    project: dataType
}

const Project = React.memo((props: projectType) => {

    const [modalActive, setModalActive] = useState<boolean>(false)
    const onClickHandler = () => {
        setModalActive(true)
    }
    const onClickModalHandler = () => {
        setModalActive(!modalActive)
    }
    return (
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12" style={{padding: '0'}} onClick={onClickHandler}>
                <div className={styles.wrContent}>
                    <div className={styles.content}>
                        <div style={{height: '120px'}}></div>
                        <h1 className={styles.title}>{props.project.title}</h1>
                        <Btn title={"More"} />
                    </div>
                </div>
                <Modal modalActive={modalActive} onClickModalHandler={onClickModalHandler} item={props.project} photo={props.project.img}/>
            </div>
    )
})

export default Project