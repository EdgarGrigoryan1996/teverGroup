import React from 'react';
import s from "./AboutCompany.module.css"
import g from "../../../globalStyles.module.css";

import aboutImage from "../../../assets/images/project1-min.jpg"
import {IoIosArrowForward} from "react-icons/io";

function AboutCompany(props) {
    return (
        <section className={s.aboutPage}>
            <div>
                <div className={g.sectionTitle}>
                    <h2>About Company</h2>
                </div>
                <div className={s.aboutContent}>
                    <div className={s.imageBlock}>
                        <img src={aboutImage} alt="Business"/>
                    </div>
                    <div className={s.InfoBlock}>
                        <div className={s.infoTitle}>Your Financial Partner for Success</div>
                        <div className={s.description}>
                            Proin laoreet nisi vitae pharetra mattis, etiam luctus suscipit velit vitae amatug ultricies. Augue molestie a etiam quis tincidunt est, et efficitur ipsum nunc bibendum ut risus et vehicula proin tempus tellus diam laoreet justo velit ante.
                        </div>
                        <div className={s.ourMissions}>
                            <div className={s.vision}>
                                <div className={s.missionTitle}>Our Mission</div>
                                <div className={s.missionItems}>
                                    <div><span><IoIosArrowForward /></span> Nulla congue aliquet vulputate</div>
                                    <div><span><IoIosArrowForward /></span> Nulla congue aliquet vulputate</div>
                                    <div><span><IoIosArrowForward /></span> Nulla congue aliquet vulputate</div>
                                    <div><span><IoIosArrowForward /></span> Nulla congue aliquet vulputate</div>
                                </div>
                            </div>
                            <div className={s.mission}>
                                <div className={s.missionTitle}>Our Mission</div>
                                <div className={s.missionItems}>
                                    <div><span><IoIosArrowForward /></span> Nulla congue aliquet vulputate</div>
                                    <div><span><IoIosArrowForward /></span> Nulla congue aliquet vulputate</div>
                                    <div><span><IoIosArrowForward /></span> Nulla congue aliquet vulputate</div>
                                    <div><span><IoIosArrowForward /></span> Nulla congue aliquet vulputate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default AboutCompany;