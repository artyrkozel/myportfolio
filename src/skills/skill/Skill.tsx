import React from "react";
import styles from './skill.module.scss'
import {SvgIcon} from "@material-ui/core";
import bgItem from './../../common/img/bgItem.jpg'
import { ProgressCircular } from "../../common/ProgressCircular/ProgressCircular";
import {ProgressLine} from "../../common/ProgressBarLine/ProgressBarLine";
type SkillType = {
    number: string,
    title: string,
    icon: any,
    value: number,
    progress: Array<{title: string, percent: number}>
}

const Skill = React.memo((props: SkillType) => {
    return (
            <div className="col-lg-4 col-md-12">
                <div className={styles.skillItemWr}>
                    <div className={styles.skillItem}>
                        <img src={bgItem} className={styles.skillBg} alt="bg"/>
                        <div className={styles.body}>
                            <h4>{props.number}</h4>
                            <h5>{props.title}</h5>
                        </div>
                        <div className={styles.iconNext}>
                            <span><SvgIcon component={props.icon}/></span>
                        </div>
                        <div className={styles.iconBorder}></div>
                        <ProgressCircular progress={props.value} radius={70}/>
                    </div>
                    <div className={styles.SkillProgress}>
                        {props.progress.map((el) => {
                            return <ProgressLine title={el.title} percent={el.percent}/>
                        })}
                    </div>
                </div>
            </div>
    )
})

export default Skill