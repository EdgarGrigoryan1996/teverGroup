import React from 'react';
import g from "../../globalStyles.module.css"
import s from "./Services.module.css"
import {BsBook} from "react-icons/bs";
import {TbFileDollar} from "react-icons/tb";
import {HiReceiptTax} from "react-icons/hi";
import {AiOutlineAudit} from "react-icons/ai";
import {MdQueryStats} from "react-icons/md";
import {FaChalkboardTeacher} from "react-icons/fa";
import {useTranslation} from "react-i18next";
import LinkCard from "../Templates/LinkCard/LinkCard";
function Services() {
    const {t} = useTranslation()
    return (
        <section className={s.services}>
            <div className={g.sectionTitle}>
                <h2>{t("servicesList")}</h2>
            </div>

            <div className={s.servicesContent}>
                <LinkCard to="/management" cardIcon={<BsBook/>} cardTitle={t("menu.services.subMenu.item1")} cardDescription="Proin laoreet nisi vitae et velunto phare mattis lorem tristiq."/>
                <LinkCard to="/consultancyTax" cardIcon={<TbFileDollar />} cardTitle={t("menu.services.subMenu.item3")} cardDescription="Proin laoreet nisi vitae et velunto phare mattis lorem tristiq."/>
                <LinkCard to="/businessConsulting" cardIcon={<HiReceiptTax/>} cardTitle={t("menu.services.subMenu.item4")} cardDescription="Proin laoreet nisi vitae et velunto phare mattis lorem tristiq."/>
                <LinkCard to="/hr" cardIcon={<AiOutlineAudit/>} cardTitle={t("menu.services.subMenu.item5")} cardDescription="Proin laoreet nisi vitae et velunto phare mattis lorem tristiq."/>
                <LinkCard to="/courses" cardIcon={<MdQueryStats/>} cardTitle={t("menu.services.subMenu.item6")} cardDescription="Proin laoreet nisi vitae et velunto phare mattis lorem tristiq."/>
                <LinkCard to="/price" cardIcon={<FaChalkboardTeacher/>} cardTitle={t("menu.services.subMenu.item7")} cardDescription="Proin laoreet nisi vitae et velunto phare mattis lorem tristiq."/>
            </div>
        </section>
    );
}

export default Services;