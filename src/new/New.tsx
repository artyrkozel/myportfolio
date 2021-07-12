import React from "react";
import styles from './new.module.scss'

export const  New: React.FC<any> = ({data}) => {
    return (
            <div className={`${styles.project} ${styles.cont}`}>
                <div className='container'>
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <img className={styles.portfolioImg} src={data.img} alt="img"/>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.headerTitle}>
                                <h5>Portfolio Details</h5>
                            </div>
                            <div className={styles.projectDetails}>
                                <ul>
                                    <li><h6>Project name</h6> <span>{data.details.projectName}</span></li>
                                    <li><h6>Stack</h6> <span>{data.details.stack }</span></li>
                                    <li><h6>URL</h6> <span><a href={data.details.url} target="_blank" rel="noreferrer">View</a></span></li>
                                </ul>
                            </div>
                            <div className={styles.headerTitle}>
                                <h5>Description</h5>
                            </div>
                            <div>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default New