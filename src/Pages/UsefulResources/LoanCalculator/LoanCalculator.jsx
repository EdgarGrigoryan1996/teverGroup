import React from 'react';
import g from "../../../globalStyles.module.css";
import {useTranslation} from "react-i18next";

function LoanCalculator(props) {
    const {t} = useTranslation()
    return (
        <section>
            <div className={g.sectionTitle}>
                <h2>{t("menu.resources.subMenu.item4")}</h2>
            </div>
        </section>
    );
}

export default LoanCalculator;