import React from "react";
import styles from './main.module.scss'
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import photo from './../common/img/origineal.jpg'
import {Link} from "react-scroll";
import Particles from "react-particles-js";

const Main = () => {
    const params = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            }
        }
    }
    return (
        <main className={styles.mainBlock} id={"main"}>
            <Particles className={styles.particles} params={params}/>
            <div className="container">
                <div className={`${"row align-items-center justify-content-around"} ${styles.row}`}>
                    <div className="col-lg-7 col-xl-6 col-md-10">
                        <div className={styles.contentWr}>
                            <Fade direction="up" delay={500}>
                                <span className={styles.subTitle}>Hi there</span>
                                <h1 className={styles.title}>My name is Artur Kozel</h1>
                                <ReactTypingEffect text="Frontend developer" className={styles.subTitle}/>
                                <div className="row">
                                    <div className={styles.mainBtnWr}>
                                        <div className="col-md-4">
                                            <Link
                                                activeClass="active"
                                                className={`${styles.mainBtn} ${styles.btn4}`}
                                                to="projects"
                                                spy={true}
                                                smooth={true}
                                                offset={0}
                                                duration={1000}
                                            >
                                                My Works
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-6 col-md-12">
                        <Fade direction="down" delay={500}>
                            <div className={styles.heroImg}>
                                <div className={styles.borderOuter}>
                                    <div className={styles.borderInner}>
                                        <img src={photo} alt="main photo"/>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main