import React from 'react';
import s from "./Standards.module.css"
import g from "../../../globalStyles.module.css";
import {useTranslation} from "react-i18next";

function Standards(props) {
    const {t} = useTranslation()
    return (
        <section>
            <div className={g.sectionTitle}>
                <h2>{t("menu.resources.subMenu.item2")}</h2>
            </div>
        </section>
    );
}

export default Standards;