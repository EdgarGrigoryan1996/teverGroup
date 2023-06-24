import React from 'react';
import s from "./Partners.module.css"
import {useTranslation} from "react-i18next";
import partnerImg from "../../../assets/images/partners/partners.webp";
import {FaHandsHelping} from "react-icons/fa";

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
                    <div className={s.trust}>{t("partners.listText")}</div>
                    <div className={s.partnersList}>
                        <div className={s.partner}><span><FaHandsHelping /></span><b>{t("partners.item1")}</b></div>
                        <div className={s.partner}><span><FaHandsHelping /></span><b>{t("partners.item2")}</b></div>
                        <div className={s.partner}><span><FaHandsHelping /></span><b>{t("partners.item3")}</b></div>
                        <div className={s.partner}><span><FaHandsHelping /></span><b>{t("partners.item4")}</b></div>
                        <div className={s.partner}><span><FaHandsHelping /></span><b>{t("partners.item5")}</b></div>
                        <div className={s.partner}><span><FaHandsHelping /></span><b>{t("partners.item6")}</b></div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Partners;