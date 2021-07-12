import React, { SyntheticEvent } from "react";
import './modall.scss'
import New from "../new/New";
import CloseIcon from '@material-ui/icons/Close';

const Modal: React.FC<any> = ({modalActive, onClickModalHandler, item}) => {
    const btnHandler = (e: SyntheticEvent) => {
        e.stopPropagation()
        onClickModalHandler()
    }
    const openNodal = () => onClickModalHandler()
    return (
        <div className={modalActive ? 'modal active' : 'modal'} onClick={openNodal}>
            <div className="modal_content">
                <New data={item}/>
                <button onClick={btnHandler} className="button"><CloseIcon /></button>
            </div>
        </div>
    )
}

export default Modal
