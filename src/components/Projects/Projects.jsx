import React from 'react';
import s from "./Projects.module.css"
import g from "../../globalStyles.module.css";
import project1Img from "../../assets/images/project1-min.jpg"
function Projects(props) {
    return (
        <section className={s.projects}>
            <div className={g.sectionTitle}>
                <h2>The Last Projects</h2>
            </div>
            <div className={s.subTitle}><h2>We Worked On</h2></div>
            <div className={s.projectsBlock}>

                <div className={s.project}>
                    <div className={s.projectImg}><img src={project1Img} alt=""/></div>
                    <div className={s.projectContent}>
                        <div className={s.projectTitle}>Financial Restructuring</div>
                        <div className={s.projectDescription}><p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p></div>
                    </div>
                </div>

                <div className={s.project}>
                    <div className={s.projectImg}><img src={project1Img} alt=""/></div>
                    <div className={s.projectContent}>
                        <div className={s.projectTitle}>Financial Restructuring</div>
                        <div className={s.projectDescription}><p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p></div>
                    </div>
                </div>

                <div className={s.project}>
                    <div className={s.projectImg}><img src={project1Img} alt=""/></div>
                    <div className={s.projectContent}>
                        <div className={s.projectTitle}>Financial Restructuring</div>
                        <div className={s.projectDescription}><p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;