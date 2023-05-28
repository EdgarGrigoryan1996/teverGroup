import React from 'react';
import s from "./Links.module.css"
import g from "../../../globalStyles.module.css";
import gerb from "../../../assets/images/links/gerb.png"
import bank from "../../../assets/images/links/bank.png"
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

function Links(props) {
    const {t} = useTranslation()
    return (
        <section>
            <div className={g.sectionTitle}>
                <h2>{t("menu.resources.subMenu.item1")}</h2>
            </div>
            <div className={s.linksBlock}>
                <Link to={"http://www.parliament.am/"} target={"_blank"}>
                    <div className={s.link}>
                        <div className={s.imageBlock}>
                            <img src={gerb} alt=""/>
                        </div>
                        <div className={s.title}>{t("links.link1")}</div>
                    </div>
                </Link>

                <Link to={"https://www.gov.am/am/"} target={"_blank"}>
                    <div className={s.link}>
                        <div className={s.imageBlock}>
                            <img src={gerb} alt=""/>
                        </div>
                        <div className={s.title}>{t("links.link2")}</div>
                    </div>
                </Link>

                <Link to={"https://www.petekamutner.am/DefaultTs.aspx?sid=ts"} target={"_blank"}>
                    <div className={s.link}>
                        <div className={s.imageBlock}>
                            <img src="https://www.petekamutner.am/Images/logo_ts.png" alt=""/>
                        </div>
                        <div className={s.title}>{t("links.link3")}</div>
                    </div>
                </Link>


                <Link to={"https://www.cba.am/am/SitePages/Default.aspx"} target={"_blank"}>
                    <div className={s.link}>
                        <div className={s.imageBlock}>
                            <img src={bank} alt=""/>
                        </div>
                        <div className={s.title}>{t("links.link4")}</div>
                    </div>
                </Link>


                <Link to={"https://caaa.am/"} target={"_blank"}>
                    <div className={s.link}>
                        <div className={s.imageBlock}>
                            <img src="https://caaa.am/wp-content/themes/wp4a/assets/img/logo.svg" alt=""/>
                        </div>
                        <div className={s.title}>{t("links.link5")}</div>
                    </div>
                </Link>

                <Link to={"https://www.arlis.am/"} target={"_blank"}>
                    <div className={s.link}>
                        <div className={s.imageBlock}>
                            <img src={gerb} alt=""/>
                        </div>
                        <div className={s.title}>{t("links.link6")}</div>
                    </div>
                </Link>

            </div>
        </section>
    );
}

export default Links;