import React from 'react';
import g from "../../globalStyles.module.css"
import s from "./Services.module.css"
import {BsBook} from "react-icons/bs";
import {TbBusinessplan, TbFileDollar} from "react-icons/tb";
import {HiReceiptTax} from "react-icons/hi";
import {AiOutlineAudit, AiOutlineFileSearch} from "react-icons/ai";
import {MdQueryStats} from "react-icons/md";
import {FaChalkboardTeacher} from "react-icons/fa";
function Services(props) {
    return (
        <section className={s.services}>
            <div className={g.sectionTitle}>
                <h2>Our Services</h2>
            </div>
            <div className={s.servicesSubTitle}>
                <h2>Real Accounting Services for You</h2>
            </div>
            <div className={s.titleParagraph}>
                <h6>
                    Sed tincidunt accumsan lacus nec bibendum sapien aliquet ut suspendisse pharetra. Finibus condimentum aenean lacinia sem metus Integer.
                </h6>
            </div>
            <div className={s.servicesContent}>
                <div className={s.service}>
                    <div className={s.serviceLogo}><BsBook /></div>
                    <div className={s.serviceTitle}>Bookkeeping</div>
                    <div className={s.serviceDescription}><p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p></div>
                </div>

                <div className={s.service}>
                    <div className={s.serviceLogo}><TbFileDollar /></div>
                    <div className={s.serviceTitle}>Payroll Services</div>
                    <div className={s.serviceDescription}><p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p></div>
                </div>

                <div className={s.service}>
                    <div className={s.serviceLogo}><HiReceiptTax /></div>
                    <div className={s.serviceTitle}>Tax Planning</div>
                    <div className={s.serviceDescription}><p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p></div>
                </div>

                <div className={s.service}>
                    <div className={s.serviceLogo}><AiOutlineAudit /></div>
                    <div className={s.serviceTitle}>Audit & Assurance</div>
                    <div className={s.serviceDescription}><p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p></div>
                </div>

                <div className={s.service}>
                    <div className={s.serviceLogo}><MdQueryStats /></div>
                    <div className={s.serviceTitle}>Financial Statement</div>
                    <div className={s.serviceDescription}><p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p></div>
                </div>

                <div className={s.service}>
                    <div className={s.serviceLogo}><FaChalkboardTeacher /></div>
                    <div className={s.serviceTitle}>Tech Consulting</div>
                    <div className={s.serviceDescription}><p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p></div>
                </div>

                <div className={s.service}>
                    <div className={s.serviceLogo}><TbBusinessplan /></div>
                    <div className={s.serviceTitle}>Business Advisory</div>
                    <div className={s.serviceDescription}><p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p></div>
                </div>

                <div className={s.service}>
                    <div className={s.serviceLogo}><AiOutlineFileSearch /></div>
                    <div className={s.serviceTitle}>Outsourced CFO</div>
                    <div className={s.serviceDescription}><p>Proin laoreet nisi vitae et velunto phare mattis lorem tristiq.</p></div>
                </div>
            </div>
        </section>
    );
}

export default Services;