import React from 'react';
import s from "./Management.module.css"
import g from "../../../globalStyles.module.css";
import {useTranslation} from "react-i18next";

function Accounting() {
    const {t} = useTranslation()
    return (
        <section>
            <div className={g.sectionTitle}>
                <h2>{t("menu.services.subMenu.item1")}</h2>
            </div>
        </section>
    );
}

export default Accounting;