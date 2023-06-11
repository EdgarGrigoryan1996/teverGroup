import React, {useEffect} from 'react';
import s from "./ServicePageTemplate.module.css";
import g from "../../globalStyles.module.css";
import {MdOutlineDownloadDone} from "react-icons/md";

function ServicePagesTemplate(props) {
    const url = window.location.pathname.split('/').pop()
    useEffect(() => {
        window.scrollTo({top: 0, left: 0,});
    },[url])
    return (
        <section className={s.templatePage}>
            <div>
                <div className={g.sectionTitle}>
                    <h2>{props.data.title}</h2>
                </div>
                <div className={s.templateContent}>
                    <div className={s.imageBlock}>
                        <img src={props.image} alt=""/>
                    </div>
                    <div className={s.InfoBlock}>
                        <div className={s.infoTitle}>{props.data.title}</div>
                        <div className={s.description}>
                            {props.data.items.map((item) => {
                                return (
                                    <div className={s.item}>
                                        <div><MdOutlineDownloadDone /></div>
                                        <div>{item.item}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default ServicePagesTemplate;