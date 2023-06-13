import React from 'react';
import s from "./UsefulResources.module.css"
import g from "../../globalStyles.module.css";
import LinkCard from "../Templates/LinkCard/LinkCard";
import {BsFillCalculatorFill, BsFillFileEarmarkRuledFill} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import {CiCalculator2} from "react-icons/ci";
import {FaExternalLinkSquareAlt} from "react-icons/fa";

function UsefulResources() {
    const {t} = useTranslation()
    return (
        <section className={s.useful}>
            <div className={g.sectionTitle}>
                <h2>{t("menu.resources.text")}</h2>
            </div>
            <div className={s.usefulContent}>
                <LinkCard to="/salaryCalculation" cardIcon={<CiCalculator2/>} cardTitle={t("menu.resources.subMenu.item3")} cardDescription="Proin laoreet nisi vitae et velunto phare mattis lorem tristiq."/>
                <LinkCard to="/loanCalculation" cardIcon={<BsFillCalculatorFill />} cardTitle={t("menu.resources.subMenu.item4")} cardDescription="Proin laoreet nisi vitae et velunto phare mattis lorem tristiq."/>
                <LinkCard to="/links" cardIcon={<FaExternalLinkSquareAlt/>} cardTitle={t("menu.resources.subMenu.item1")} cardDescription="Proin laoreet nisi vitae et velunto phare mattis lorem tristiq."/>
                <LinkCard to="/standards" cardIcon={<BsFillFileEarmarkRuledFill/>} cardTitle={t("menu.resources.subMenu.item2")} cardDescription="Proin laoreet nisi vitae et velunto phare mattis lorem tristiq."/>
            </div>
        </section>
    );
}

export default UsefulResources;