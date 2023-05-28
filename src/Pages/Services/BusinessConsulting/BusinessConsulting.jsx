import React from 'react';
import s from "./BusinessConsulting.module.css"
import g from "../../../globalStyles.module.css";
import {useTranslation} from "react-i18next";

function BusinessConsulting(props) {
    const {t} = useTranslation()
    return (
        <section>
            <div className={g.sectionTitle}>
                <h2>{t("menu.services.subMenu.item4")}</h2>
            </div>
        </section>
    );
}

export default BusinessConsulting;