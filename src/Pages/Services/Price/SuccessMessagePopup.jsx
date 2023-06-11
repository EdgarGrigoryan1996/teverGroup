import React from 'react';
import s from "./Price.module.css"
import UseAnimations from "react-useanimations";
import checkmark from 'react-useanimations/lib/checkmark'

function SuccessMessagePopup() {
    return (
        <div className={s.popupWrapper}>
            <div className={s.popupBlock}>
                <UseAnimations animation={checkmark} speed={0.5}  size={256} strokeColor={"var(--white)"}/>
            </div>
        </div>
    );
}

export default SuccessMessagePopup;