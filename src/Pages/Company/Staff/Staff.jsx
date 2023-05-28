import React from 'react';
import s from "./Staff.module.css"
import g from "../../../globalStyles.module.css";
import {useTranslation} from "react-i18next";
import ownerImg from "../../../assets/images/staff/owner.jpg"
import headAuditImg from "../../../assets/images/staff/headAudit.jpg"
import deputyDirectorImg from "../../../assets/images/staff/deputyDirector.jpg"
import {FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";

function Staff(props) {
    const {t} = useTranslation()
    return (
        <section className={s.staff}>
            <div className={g.sectionTitle}>
                <h2>{t("menu.company.subMenu.item2")}</h2>
            </div>
            <div className={s.meet}>
                <h2>Meet Our Staff</h2>
            </div>
            <div className={s.staffBlock}>
                <div className={s.peopleBlock}>
                    <div className={s.imgBlock}>
                        <img src={ownerImg} alt="Owner"/>

                    </div>
                    <div className={s.infoBlock}>

                        <div className={s.socialBlock}>
                            <div className={s.socialItem}><Link to={"https://ru-ru.facebook.com/"}><FaFacebookF /></Link> </div>
                            <div className={s.socialItem}><Link to={"https://ru-ru.facebook.com/"}><FaLinkedinIn /></Link> </div>
                            <div className={s.socialItem}><Link to={"https://ru-ru.facebook.com/"}><FaTwitter /></Link> </div>
                        </div>

                        <div><h3> {t("staff.owner.name")}</h3></div>
                        <div><h6>{t("staff.owner.position")}</h6></div>
                    </div>
                </div>

                <div className={s.peopleBlock}>
                    <div className={s.imgBlock}>
                        <img src={deputyDirectorImg} alt="Owner"/>

                    </div>
                    <div className={s.infoBlock}>

                        <div className={s.socialBlock}>
                            <div className={s.socialItem}><Link to={"https://ru-ru.facebook.com/"}><FaFacebookF /></Link> </div>
                            <div className={s.socialItem}><Link to={"https://ru-ru.facebook.com/"}><FaLinkedinIn /></Link> </div>
                            <div className={s.socialItem}><Link to={"https://ru-ru.facebook.com/"}><FaTwitter /></Link> </div>
                        </div>

                        <div><h3> {t("staff.deputyDirector.name")}</h3></div>
                        <div><h6>{t("staff.deputyDirector.position")}</h6></div>
                    </div>
                </div>

                <div className={s.peopleBlock}>
                    <div className={s.imgBlock}>
                        <img src={headAuditImg} alt="Owner"/>

                    </div>
                    <div className={s.infoBlock}>

                        <div className={s.socialBlock}>
                            <div className={s.socialItem}><Link to={"https://ru-ru.facebook.com/"}><FaFacebookF /></Link> </div>
                            <div className={s.socialItem}><Link to={"https://ru-ru.facebook.com/"}><FaLinkedinIn /></Link> </div>
                            <div className={s.socialItem}><Link to={"https://ru-ru.facebook.com/"}><FaTwitter /></Link> </div>
                        </div>

                        <div><h3> {t("staff.headAudit.name")}</h3></div>
                        <div><h6>{t("staff.headAudit.position")}</h6></div>
                    </div>
                </div>

                <div className={s.peopleBlock}>
                    <div className={s.imgBlock}>
                        <img src={ownerImg} alt="Owner"/>

                    </div>
                    <div className={s.infoBlock}>

                        <div className={s.socialBlock}>
                            <div className={s.socialItem}><Link to={"https://ru-ru.facebook.com/"}><FaFacebookF /></Link> </div>
                            <div className={s.socialItem}><Link to={"https://ru-ru.facebook.com/"}><FaLinkedinIn /></Link> </div>
                            <div className={s.socialItem}><Link to={"https://ru-ru.facebook.com/"}><FaTwitter /></Link> </div>
                        </div>

                        <div><h3> {t("staff.taxConsultant.name")}</h3></div>
                        <div><h6>{t("staff.taxConsultant.position")}</h6></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Staff;