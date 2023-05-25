import s from "./TopInformationSection.module.css"
import {useTranslation} from "react-i18next";
import {FaLinkedinIn,FaFacebookF} from "react-icons/fa"
import {BsFillBuildingsFill} from "react-icons/bs";
import {AiFillPhone} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import armFlag from "../../assets/icons/am.svg"
import usFlag from "../../assets/icons/us.svg"

const TopInformationSection = () => {
    const {t, i18n} = useTranslation()
    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
    }
    return (
        <div className={s.informationBlock}>
            <div className={s.contacts}>
                <div><span><MdEmail/></span>info@tevergroup.am</div>
                <div><span><AiFillPhone /></span>+37455439311</div>
                <div><FaLinkedinIn /></div>
                <div><FaFacebookF /></div>
            </div>
            <div className={s.language}>
                    <div><img src={armFlag} title={"Հայերեն"} alt="Հայերեն" onClick={(e) => changeLang("am")}/></div>
                    <div><img src={usFlag}  title={"English"} alt="English" onClick={(e) => changeLang("en")}/></div>
                <div></div>
            </div>
        </div>
    )
}

export default TopInformationSection