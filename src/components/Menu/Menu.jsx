import s from "./Menu.module.css"
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
function Menu() {
    const {t,i18n} = useTranslation()
    return (
      <div className={s.menuWrapper}>
        <div className={s.menuBlock}>
        <div className={s.logo}>TEVER GROUP</div>
            <div className={s.menu}>
                <nav>
                    <Link to={"/"}><div className={s.item}><span>{t("menu.home.text")}</span></div></Link>
                    <div className={s.item}><span>{t("menu.company.text")}</span>
                    <div className={s.subMenu}>
                        <Link to={"/about"}><div>{t("menu.company.subMenu.item1")}</div></Link>
                        <Link to={"/staff"}><div>{t("menu.company.subMenu.item2")}</div></Link>
                        <Link to={"/partners"}><div>{t("menu.company.subMenu.item3")}</div></Link>
                    </div>
                    </div>
                    <div className={s.item}><span>{t("menu.services.text")}</span>
                    <div className={s.subMenu}>
                        <Link to={"/management"}><div>{t("menu.services.subMenu.item1")}</div></Link>
                        <Link to={"/consultancyAccounting"}><div>{t("menu.services.subMenu.item2")}</div></Link>
                        <Link to={"/consultancyTax"}><div>{t("menu.services.subMenu.item3")}</div></Link>
                        <Link to={"/businessConsulting"}><div>{t("menu.services.subMenu.item4")}</div></Link>
                        <Link to={"/hr"}><div>{t("menu.services.subMenu.item5")}</div></Link>
                        <Link to={"/courses"}><div>{t("menu.services.subMenu.item6")}</div></Link>
                    </div>
                    </div>
                    <div className={s.item}><span>{t("menu.resources.text")}</span>
                    <div className={s.subMenu}>
                        <Link to={"/links"}><div>{t("menu.resources.subMenu.item1")}</div></Link>
                        <Link to={"/standards"}><div>{t("menu.resources.subMenu.item2")}</div></Link>
                        <Link to={"/salaryCalculation"}><div>{t("menu.resources.subMenu.item3")}</div></Link>
                    </div>
                    </div>
                    <div className={s.item}><span>{t("menu.contacts.text")}</span>
                    <div className={s.subMenu}>
                        <div>{t("menu.contacts.subMenu.item1")}</div>
                        <div>{t("menu.contacts.subMenu.item2")}</div>
                    </div>
                    </div>
                    <div className={s.item}><span>{t("menu.news.text")}</span>
                        <div className={s.subMenu}>
                            <div>{t("menu.news.subMenu.item1")}</div>
                            <div>{t("menu.news.subMenu.item2")}</div>
                            <div>{t("menu.news.subMenu.item3")}</div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

      </div>
    );
  }
  
  export default Menu;