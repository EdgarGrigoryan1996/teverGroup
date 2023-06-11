import React from 'react';
import s from "./Hr.module.css"
import g from "../../../globalStyles.module.css";
import {useTranslation} from "react-i18next";

function Hr() {
    const {t} = useTranslation()
    return (
        <section>
            <div className={g.sectionTitle}>
                <h2>{t("menu.services.subMenu.item5")}</h2>
            </div>
        </section>
    );
}

export default Hr;