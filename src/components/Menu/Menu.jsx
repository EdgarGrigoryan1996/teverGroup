import s from "./Menu.module.css"
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import { useRef, useState} from "react"
import { IoIosArrowForward} from "react-icons/io";
import logo from "../../assets/icons/logo.webp"
function Menu() {
    const {t} = useTranslation()
    const [burgerMenuStatus, setBurgerMenuStatus] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(window.innerWidth <= 700 ? true : false)

    const item1 = useRef(null)
    const item2 = useRef(null)
    const item3 = useRef(null)

    const toggleSubMenu = (ref) => {
        if(ref.current.classList.contains(s.openedMobileMenu)){
            ref.current.classList.remove(s.openedMobileMenu)
        } else {
            ref.current.classList.add(s.openedMobileMenu)
        }
    }

    return (
      <div className={s.menuWrapper}>
        <div className={s.menuBlock}>
            <img src={logo} alt="Tever-Group"/>
            <div className={s.menu}>
                <nav>
                <div className={s.burgerMenu + " " + (burgerMenuStatus && s.menuOpened)} onClick={ () => setBurgerMenuStatus(!burgerMenuStatus) }><IoIosArrowForward /></div>
                    <div className={s.menuItems + " " + (burgerMenuStatus && s.burgerMenuActive)}>
                        <div ref={item1} className={s.itemWrapper} onClick={ mobileMenu ? (e) => {toggleSubMenu(item1)} : null}>
                            <span className={s.item}><span>{t("menu.company.text")}</span><span className={s.subMenuOpenArrow}><IoIosArrowForward /></span></span>
                            <div className={s.subMenu}>
                                <Link to={"/about"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.company.subMenu.item1")}</div></Link>
                                <Link to={"/staff"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.company.subMenu.item2")}</div></Link>
                                <Link to={"/partners"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.company.subMenu.item3")}</div></Link>
                            </div>
                    </div>
                    <div ref={item2} className={s.itemWrapper} onClick={ mobileMenu ? (e) => {toggleSubMenu(item2)} : null}>
                        <span className={s.item}><span>{t("menu.services.text")}</span><span className={s.subMenuOpenArrow}><IoIosArrowForward /></span></span>
                        <div className={s.subMenu}>
                            <Link to={"/management"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.services.subMenu.item1")}</div></Link>
                            {/*<Link to={"/consultancyAccounting"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.services.subMenu.item2")}</div></Link>*/}
                            <Link to={"/consultancyTax"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.services.subMenu.item3")}</div></Link>
                            <Link to={"/businessConsulting"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.services.subMenu.item4")}</div></Link>
                            <Link to={"/hr"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.services.subMenu.item5")}</div></Link>
                            <Link to={"/courses"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.services.subMenu.item6")}</div></Link>
                            <Link to={"/price"}><div onClick={() => setBurgerMenuStatus(false)}>{t("price.topTitle")}</div></Link>
                        </div>
                    </div>
                    <div ref={item3} className={s.itemWrapper} onClick={ mobileMenu ? (e) => {toggleSubMenu(item3)} : null}>
                        <span className={s.item}><span>{t("menu.resources.text")}</span><span className={s.subMenuOpenArrow}><IoIosArrowForward /></span></span>
                        <div className={s.subMenu}>
                            <Link to={"/links"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.resources.subMenu.item1")}</div></Link>
                            <Link to={"/standards"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.resources.subMenu.item2")}</div></Link>
                            <Link to={"/salaryCalculation"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.resources.subMenu.item3")}</div></Link>
                            <Link to={"/loanCalculation"}><div onClick={() => setBurgerMenuStatus(false)}>{t("menu.resources.subMenu.item4")}</div></Link>
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