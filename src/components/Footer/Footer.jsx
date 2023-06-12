import React from 'react';
import s from "./Footer.module.css"
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {BsFillTelephoneForwardFill} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {ImLocation} from "react-icons/im";
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";

function Footer() {
    const {t} = useTranslation()
    return (
        <footer>
            <div className={s.footerWrapper}>
                <div className={s.logo}>
                    <div>
                        <h2>Tever Group</h2>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ipsum, quidem!
                    </div>
                    <div className={s.social}>
                        <div className={s.socialItem}><Link target={"_blank"} to={"https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"}><FaLinkedinIn /></Link></div>
                        <div className={s.socialItem}><Link target={"_blank"} to={"https://ru-ru.facebook.com/"}><FaFacebookF /></Link></div>
                    </div>
                </div>
                <div className={s.quick}>
                    <div className={s.footerTitle}>Quick Links</div>
                    <div className={s.lists}>
                        <Link to={"/about"}><div>{t("menu.company.subMenu.item1")}</div></Link>
                        <Link to={"/staff"}><div>{t("menu.company.subMenu.item2")}</div></Link>
                        <Link to={"/partners"}><div>{t("menu.company.subMenu.item3")}</div></Link>
                        <Link to={"/links"}><div>{t("menu.resources.subMenu.item1")}</div></Link>
                        <Link to={"/standards"}><div>{t("menu.resources.subMenu.item2")}</div></Link>
                        <Link to={"/salaryCalculation"}><div>{t("menu.resources.subMenu.item3")}</div></Link>
                    </div>
                </div>
                <div className={s.services}>
                    <div className={s.footerTitle}>Services</div>
                    <div className={s.lists}>
                        <Link to={"/management"}><div>{t("menu.services.subMenu.item1")}</div></Link>
                        <Link to={"/consultancyTax"}><div>{t("menu.services.subMenu.item3")}</div></Link>
                        <Link to={"/businessConsulting"}><div>{t("menu.services.subMenu.item4")}</div></Link>
                        <Link to={"/hr"}><div>{t("menu.services.subMenu.item5")}</div></Link>
                        <Link to={"/courses"}><div>{t("menu.services.subMenu.item6")}</div></Link>
                        <Link to={"/price"}><div>{t("menu.services.subMenu.item7")}</div></Link>
                    </div>
                </div>
                <div className={s.information}>
                    <div className={s.footerTitle}>Information</div>
                    <div className={s.lists}>
                        <div className={s.infoItem}>
                            <div><BsFillTelephoneForwardFill /></div>
                            <div>
                                <h4>+37455439311</h4>
                            </div>
                        </div>
                        <div className={s.infoItem}>
                            <div><AiOutlineMail /></div>
                            <div>

                                <h4>info@tevergroup.am</h4>
                            </div>
                        </div>
                        <div className={s.infoItem}>
                            <div><ImLocation/></div>
                            <div>

                                <h4>Los Angeles</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;