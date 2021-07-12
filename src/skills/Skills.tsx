import React from "react";
import styles from './skills.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/headingTitle/Title";

const data = [
    {number: '01', title: 'HTML5/CSS3', icon: 'Battery20Icon', value: 85,
        progress: [{title: 'BootStrap', percent: 90}, {title: 'Saas/Less', percent: 80},  {title: 'Responsive web', percent: 80}]
    },
    {number: '02', title: 'JavaScript', icon: 'Battery50Icon', value: 70,
        progress: [{title: 'Rest API(Axios)', percent: 80}, {title: 'ECMAScript 6+', percent: 70}]
    },
    {
        number: '03', title: 'React/TypeScript', icon: 'BatteryFullIcon', value: 80,
        progress: [{title: 'React-router', percent: 90}, {title: 'Hooks', percent: 80}, {title: 'Functional and Class components', percent: 80}, {title: 'Redux, Thunk, Saga', percent: 80}]
    }
]

const Skills = () => {
    return (
        <section className={`${styles.skillBlock} ${styles.section}`} id={"skills"}>
            <div className="container">
                    <Title title={'My skills'} subTitle={'skills'}/>
                    <div className={styles.skills}>
                        {data.map((el) => {
                            return <Skill key={el.number} number={el.number} title={el.title} icon={el.icon} value={el.value} progress={el.progress}/>
                        })}
                    </div>
            </div>
        </section>

    )
}

export default Skills