import React from 'react';
import s from "./Courses.module.css"
import g from "../../../globalStyles.module.css";
import {useTranslation} from "react-i18next";

function Courses(props) {
    const {t} = useTranslation()
    return (
        <section>
            <div className={g.sectionTitle}>
                <h2>{t("menu.services.subMenu.item6")}</h2>
            </div>
        </section>
    );
}

export default Courses;