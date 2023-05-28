import React from 'react';
import s from "./Partners.module.css"
import g from "../../../globalStyles.module.css";
import {useTranslation} from "react-i18next";
import partnerImg from "../../../assets/images/partners/partners.jpg";
import onexLogo from "../../../assets/images/partners/onex.svg"
import globbingLogo from "../../../assets/images/partners/globbing.png"


function Partners(props) {
    const {t} = useTranslation()
    return (
        <section>
            <div className={g.sectionTitle}>
                <h2>{t("menu.company.subMenu.item3")}</h2>
            </div>
            <div className={s.partnerContent}>
                <div className={s.imageBlock}>
                    <img src={partnerImg} alt="Partners"/>
                </div>
                <div className={s.InfoBlock}>
                    <div className={s.infoTitle}>{t("partners.title")}</div>
                    <div className={s.description}>
                        {t("partners.description")}
                    </div>
                </div>
            </div>
            <div className={s.partnersList}>
                <div className={s.partner}><img src={onexLogo} alt="Onex"/></div>
                <div className={s.partner}><img src={globbingLogo} alt="Onex"/></div>
                <div className={s.partner}><img src={globbingLogo} alt="Onex"/></div>
                <div className={s.partner}><img src={onexLogo} alt="Onex"/></div>
            </div>
        </section>
    );
}

export default Partners;