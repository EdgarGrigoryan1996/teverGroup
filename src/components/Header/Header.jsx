import React from 'react';
import s from "./Header.module.css"
function Header() {
    return (
        <div className={s.headerWrapper}>
            <div className={s.background}>
                <div className={s.headerContentBlock}>
                    <div><h4>Keeping your web presence</h4></div>
                    <div><h1>Accounting & Finances</h1></div>
                    <div><p>However big the scale of your business operations</p></div>
                </div>
            </div>
        </div>
    );
}

export default Header;