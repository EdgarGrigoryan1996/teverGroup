import React from 'react';
import {FaFilePdf} from "react-icons/fa";
import s from "./Standards.module.css"
import {downloadPdf} from "../../../api/downloadPdf/downloadPdf";

function DownloadBtn(props) {
    return (
        <div className={s.buttonBlock}>
            <div><FaFilePdf /><i>{props.code}</i> - </div>
            <div onClick={() => downloadPdf(props.link)} className={s.downloadBtn}>{props.text}</div>
        </div>

    );
}

export default DownloadBtn;