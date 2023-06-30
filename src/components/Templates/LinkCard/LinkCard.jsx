import React from 'react';
import s from "./LinkCard.module.css";
import {Link} from "react-router-dom";

function LinkCard(props) {
    return (
        <Link className={s.cardLink} to={props.to}>
            <div className={s.card}>
                <div className={s.cardLogo}>{props.cardIcon}</div>
                <div className={s.cardTitle}>{props.cardTitle}</div>
                {/*<div className={s.cardDescription}><p>{props.cardDescription}</p></div>*/}
            </div>
        </Link>
    );
}

export default LinkCard;