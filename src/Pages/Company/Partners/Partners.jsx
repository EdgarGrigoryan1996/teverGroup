import React from 'react';
import s from "./Partners.module.css"
import {useTranslation} from "react-i18next";
import partnerImg from "../../../assets/images/partners/partners.webp";

function Partners() {
    const {t} = useTranslation()
    return (
        <section>
            <div className={s.partnerContent}>
                <div className={s.imageBlock}>
                    <img src={partnerImg} alt="Partners"/>
                </div>
                <div className={s.InfoBlock}>
                    <div className={s.infoTitle}>{t("menu.company.subMenu.item3")}</div>
                    <div className={s.description}>
                        {t("partners.description")}
                    </div>
                    <div className={s.description}>{t("partners.listText")}</div>
                    <div className={s.partnersList}>
                        <div className={s.partner}>{t("partners.item1")}</div>
                        <div className={s.partner}>{t("partners.item2")}</div>
                        <div className={s.partner}>{t("partners.item3")}</div>
                        <div className={s.partner}>{t("partners.item4")}</div>
                        <div className={s.partner}>{t("partners.item5")}</div>
                        <div className={s.partner}>{t("partners.item6")}</div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Partners;