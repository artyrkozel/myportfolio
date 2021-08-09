import React from "react";
import styles from './projects.module.scss'
import Project from "./project/Project";
import Title from "../common/headingTitle/Title";
import demo3 from "../common/img/demo3.png";
import demo4 from "../common/img/demo4.png";
import demo1 from "../common/img/demo.png";
import demo5 from './../common/img/demo5.png'
import demo6 from './../common/img/helmets.png'

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
    {title: 'TodoList',img: demo3, details: {projectName: 'TodoList', stack: 'React, Redux, Redux-thunk, Typescript', url: 'https://artyrkozel.github.io/todolist/#/todolist/'}, description: 'Creation of different todo-sheets, adding / deleting / editing tasks, using Material Ui, login (redux form) using RestApi, redux-toolkit' },
    {title: 'Helmets store',img: demo6, details: {projectName: 'Helmets store', stack: 'Mongo DB, Express, React, Node JS', url: 'https://helmets-store.netlify.app/main'}, description: 'This project implemented on the MERN stack. There is ability to filter items by type and price. Description page contains information about the product and button which adds item to cart. Cart page contains all added items and ability to delete it. All data is saved in the Mongo database and localStorage'},
    {title: 'Git search',img: demo5, details: {projectName: 'Git search', stack: 'React, Redux, Typescript, Redux-thunk', url: 'https://git-mysearch.netlify.app/'}, description: 'Responsive coding, search for git users, pagination for git repositories'},
    {title: 'Movie search',img: demo4, details: {projectName: 'Movie search', stack: 'React, Redux, Redux-saga, Typescript', url: 'https://artyrkozel.github.io/movie-search/#/movie-search/main'}, description: 'Page navigation (react router dom), search for movies on demand, filtering by genre, title, rating. Possibility to add a movie to WatchList.'},
    {title: 'HTML coding',img: demo1, details: {projectName: 'HTML coding', stack: 'HTML/CSS, SCSS/SASS', url: 'https://artyrkozel.github.io/artyrkozel-artyrkozel-artyrkozel-version.github.io/'}, description: 'Responsive web design, using FlexBox, Grid'},  
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
                    {data.map(project => <Project project={project}/>)}
                </div>
            </div>
        </section>
    )
}

export default Projects