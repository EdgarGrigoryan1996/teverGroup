import React from 'react';
import s from "./HeartbeatMiniSection.module.css"
import {useTranslation} from "react-i18next";
function HeartbeatMiniSection() {
    const {t} = useTranslation()
    return (
        <div className={s.heartbeatWrapper}>
            <div className={s.background}>
                <h2 className={s.businessMessage}>{t("miniSection")}</h2>
            </div>
        </div>
    );
}

export default HeartbeatMiniSection;