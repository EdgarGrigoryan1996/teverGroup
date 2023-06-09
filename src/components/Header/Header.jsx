import React from 'react';
import s from "./Header.module.css"
import {useTranslation} from "react-i18next";
import headerImg from "../../assets/images/headerImg4.webp"
function Header() {
    const {t} = useTranslation()
    return (
        <div className={s.headerWrapper}>
            <img src={headerImg} alt=""/>
            <div className={s.headerContentBlock}>
                <div><h1>{t("header.title")}</h1></div>
            </div>
            <div className={s.background}>


            </div>
        </div>
    );
}

export default Header;