import React from "react";
import styles from './projects.module.scss'
import Project from "./project/Project";
import Title from "../common/headingTitle/Title";
import first from './../common/img/01.png'
import second from './../common/img/02.png'
import third from './../common/img/03.png'
import demo3 from "../common/img/demo3.png";
import demo2 from "../common/img/demo2.png";
import demo4 from "../common/img/demo4.png";
import demo1 from "../common/img/demo.png";
import demo5 from './../common/img/demo5.png'

type detailsType = {
    projectName: string
    stack: string
    url: string
}
export type dataType = {
    title: string
    img: string
    details: detailsType
    description: string
}

const data = [
    {title: 'TodoList',img: demo3, details: {projectName: 'TodoList', stack: 'React, Redux, Redux-thunk, Typescript', url: 'https://artyrkozel.github.io/todolist/#/todolist/'}, description: 'Creation of different todo-sheets, adding / deleting / editing tasks, using Material Ui, login (redux form), using RestApi, redux-toolkit' },
    {title: 'SocialNet',img: demo2, details: {projectName: 'SocialNet', stack: 'React, Redux, Redux-thunk, Typescript', url: 'https://artyrkozel.github.io/socialnet/#/socialnet/login'}, description: 'Implementation of the FLUX cycle, creating a login using Formik (with validation), page navigation (react router dom), the ability to edit a profile, add / change a status, subscribe to users, display a list of cryptocurrencies with the ability to filter, general chat (websocket), Material-Ui design, using RestApi'},
    {title: 'Movie search',img: demo4, details: {projectName: 'Movie search', stack: 'React, Redux, Redux-saga, Typescript', url: 'https://artyrkozel.github.io/movie-search/#/movie-search/main'}, description: 'Page navigation (react router dom), search for movies on demand, filtering by genre, title, rating. Possibility to add a movie to WatchList.'},
    {title: 'HTML coding',img: demo1, details: {projectName: 'HTML coding', stack: 'HTML5/CSS3', url: 'https://artyrkozel.github.io/artyrkozel-artyrkozel-artyrkozel-version.github.io/'}, description: 'Responsive coding, using FlexBox, Grid'},
    {title: 'Git search',img: demo5, details: {projectName: 'Git search', stack: 'React, Redux, Typescript, Redux-thunk', url: 'https://elated-bose-bea697.netlify.app/'}, description: 'Responsive coding, search for git users, pagination for git repositories'}
]

const Projects = () => {
    return (
        <section className={`${styles.projectsBlock} ${styles.section}`} id={"projects"}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row justify-content-center">
                            <Title title={'My projects'} subTitle={'projects'}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Project bg={first} id={'0'} title={'TodoList'} item={data[0]} photo={demo3}/>
                    <Project bg={second} id={'1'} title={'SocialNet'} item={data[1]} photo={demo2}/>
                    <Project bg={third} id={'2'} title={'Movie search'} item={data[2]} photo={demo4}/>
                    <Project bg={third} id={'3'} title={'HTML coding'} item={data[3]} photo={demo1}/>
                    <Project bg={third} id={'4'} title={'Git search'} item={data[4]} photo={demo1}/>
                </div>
            </div>
        </section>
    )
}

export default Projects