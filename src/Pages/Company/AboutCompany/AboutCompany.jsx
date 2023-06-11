import React from 'react';
import s from "./AboutCompany.module.css"
import g from "../../../globalStyles.module.css";
import aboutImage from "../../../assets/images/about.webp"
import {IoIosArrowForward} from "react-icons/io";
import {useTranslation} from "react-i18next";

function AboutCompany() {
    const {t} = useTranslation()
    return (
        <section className={s.aboutPage}>
            <div>
                <div className={g.sectionTitle}>
                    <h2>{t("menu.company.subMenu.item1")}</h2>
                </div>
                <div className={s.aboutContent}>
                    <div className={s.imageBlock}>
                        <img src={aboutImage} alt="Business"/>
                    </div>
                    <div className={s.InfoBlock}>
                        <div className={s.infoTitle}>{t("company.about.title")}</div>
                        <div className={s.description}>
                            {t("company.about.description")}
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