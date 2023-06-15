import React from 'react';
import s from "./Header.module.css"
import {useTranslation} from "react-i18next";
function Header() {
    const {t} = useTranslation()
    return (
        <div className={s.headerWrapper}>
            <div className={s.background}>
                <div className={s.headerContentBlock}>
                    <div><h1>{t("header.title")}</h1></div>
                    <div><p>{t("header.subTitle")}</p></div>
                </div>
            </div>
        </div>
    );
}

export default Header;