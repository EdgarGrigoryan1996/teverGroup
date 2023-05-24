import s from "./Menu.module.css"
import {useTranslation} from "react-i18next";
function Menu() {
    const {t,i18n} = useTranslation()
    return (
      <div className={s.menuWrapper}>
        <div className={s.menuBlock}>
        <div className={s.logo}>TEVER GROUP</div>
            <div className={s.menu}>
                <nav>
                    <div>{t("menu.item1.text")}</div>
                    <div>{t("menu.item2.text")}</div>
                    <div>{t("menu.item3.text")}</div>
                    <div>{t("menu.item4.text")}</div>
                    <div>{t("menu.item5.text")}</div>
                </nav>
            </div>
        </div>

      </div>
    );
  }
  
  export default Menu;