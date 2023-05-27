import s from "./Menu.module.css"
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {useState} from "react"
import { IoIosArrowForward} from "react-icons/io";

function Menu() {
    const {t,i18n} = useTranslation()
    const [burgerMenuStatus, setBurgerMenuStatus] = useState(false)


    return (
      <div className={s.menuWrapper}>
        <div className={s.menuBlock}>
        <div className={s.logo}><Link to={"/"}>TEVER GROUP</Link> </div>
            <div className={s.menu}>
                <nav>
                <div className={s.burgerMenu + " " + (burgerMenuStatus && s.menuOpened)} onClick={() => setBurgerMenuStatus(!burgerMenuStatus) }><IoIosArrowForward /></div>
                    <div className={s.menuItems + " " + (burgerMenuStatus && s.burgerMenuActive)}>
                        <div className={s.itemWrapper}>
                            <span className={s.item}><span><IoIosArrowForward />{t("menu.company.text")}</span></span>
                            <div className={s.subMenu}>
                                <Link to={"/about"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.company.subMenu.item1")}</div></Link>
                                <Link to={"/staff"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.company.subMenu.item2")}</div></Link>
                                <Link to={"/partners"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.company.subMenu.item3")}</div></Link>
                            </div>
                    </div>
                    <div className={s.itemWrapper}>
                        <span className={s.item}><span><IoIosArrowForward />{t("menu.services.text")}</span></span>
                        <div className={s.subMenu}>
                            <Link to={"/management"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.services.subMenu.item1")}</div></Link>
                            <Link to={"/consultancyAccounting"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.services.subMenu.item2")}</div></Link>
                            <Link to={"/consultancyTax"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.services.subMenu.item3")}</div></Link>
                            <Link to={"/businessConsulting"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.services.subMenu.item4")}</div></Link>
                            <Link to={"/hr"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.services.subMenu.item5")}</div></Link>
                            <Link to={"/courses"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.services.subMenu.item6")}</div></Link>
                        </div>
                    </div>
                    <div className={s.itemWrapper}>
                        <span className={s.item}><span><IoIosArrowForward />{t("menu.resources.text")}</span></span>
                        <div className={s.subMenu}>
                            <Link to={"/links"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.resources.subMenu.item1")}</div></Link>
                            <Link to={"/standards"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.resources.subMenu.item2")}</div></Link>
                            <Link to={"/salaryCalculation"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.resources.subMenu.item3")}</div></Link>
                        </div>
                    </div>
                    </div>
                    
                </nav>
            </div>
        </div>

      </div>
    );
  }
  
  export default Menu;