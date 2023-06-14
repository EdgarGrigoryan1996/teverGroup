import React from 'react';
import s from "./AboutCompany.module.css"
import g from "../../../globalStyles.module.css";
import aboutImage from "../../../assets/images/about.webp"
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
                    </div>
                </div>
            </div>
        </section>

    );
}

export default AboutCompany;