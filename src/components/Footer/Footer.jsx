import React from 'react';
import s from "./Footer.module.css"
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {BsFillTelephoneForwardFill} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {ImLocation} from "react-icons/im";
import {FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import logo from "../../assets/icons/logo.webp"

function Footer() {
    const {t} = useTranslation()
    return (
        <footer>
            <div className={s.footerWrapper}>
                <div className={s.logo}>
                    <div>
                        <img src={logo} alt="Tever Group"/>
                    </div>

                    <div className={s.social}>
                        <div className={s.socialItem}><Link target={"_blank"} to={"https://www.linkedin.com/in/tever-llc-acconting-and-finance-500403234/"}><FaLinkedinIn /></Link></div>
                        <div className={s.socialItem}><Link target={"_blank"} to={"https://www.facebook.com/TEVER-LLC-103901596096166/"}><FaFacebookF /></Link></div>
                        <div className={s.socialItem}><Link target={"_blank"} to={"https://instagram.com/tever_llc?igshid=MzRlODBiNWFlZA=="}><FaInstagram /></Link></div>
                    </div>
                </div>
                <div className={s.quick}>
                    <div className={s.footerTitle}>{t("menu.company.text")}</div>
                    <div className={s.lists}>
                        <Link to={"/about"}><div>{t("menu.company.subMenu.item1")}</div></Link>
                        {/*<Link to={"/staff"}><div>{t("menu.company.subMenu.item2")}</div></Link>*/}
                        <Link to={"/partners"}><div>{t("menu.company.subMenu.item3")}</div></Link>
                        <Link to={"/links"}><div>{t("menu.resources.subMenu.item1")}</div></Link>
                        <Link to={"/standards"}><div>{t("menu.resources.subMenu.item2")}</div></Link>
                        <Link to={"/salaryCalculation"}><div>{t("menu.resources.subMenu.item3")}</div></Link>
                        <Link to={"/loanCalculation"}><div>{t("menu.resources.subMenu.item4")}</div></Link>
                    </div>
                </div>
                <div className={s.services}>
                    <div className={s.footerTitle}>{t("menu.services.text")}</div>
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
                    <div className={s.footerTitle}>{t("footer.info")}</div>
                    <div className={s.lists}>
                        <div className={s.infoItem}>
                            <div><BsFillTelephoneForwardFill /></div>
                            <div>
                                <h4><a href="tel:+37455233311">+ 374 (55) 23 33 11</a></h4>
                            </div>
                        </div>
                        <div className={s.infoItem}>
                            <div><AiOutlineMail /></div>
                            <div>

                                <h4><a href="mailto:info@tevergroup.am?subject=&body=">info@tevergroup.am</a></h4>
                            </div>
                        </div>
                        <div className={s.infoItem}>
                            <div><ImLocation/></div>
                            <div>

                                <h4>{t("footer.address")}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;