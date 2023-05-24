import s from "./TopInformationSection.module.css"
import {useTranslation} from "react-i18next";
import {FaLinkedinIn,FaFacebookF} from "react-icons/fa"
import {BsFillBuildingsFill} from "react-icons/bs";
import {AiFillPhone} from "react-icons/ai";
import {MdEmail} from "react-icons/md";

const TopInformationSection = () => {
    const {t, i18n} = useTranslation()
    const changeLang = (e) => {
        i18n.changeLanguage(e.target.value)
    }
    return (
        <div className={s.informationBlock}>
            <div className={s.contacts}>
                <div><span><BsFillBuildingsFill /></span>New Yourk city</div>
                <div><span><MdEmail/></span>info@tevergroup.am</div>
                <div><span><AiFillPhone /></span>+37455439311</div>
            </div>
            <div className={s.links}>
                <div>
                    <select name="" id="" onChange={(e) => changeLang(e)}>
                        <option value="en">English</option>
                        <option value="am">Հայերեն</option>
                    </select>
                </div>
                <div><FaLinkedinIn /></div>
                <div><FaFacebookF /></div>
                <div></div>
            </div>
        </div>
    )
}

export default TopInformationSection