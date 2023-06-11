import s from "./TopInformationSection.module.css"
import {useTranslation} from "react-i18next";
import {FaLinkedinIn,FaFacebookF} from "react-icons/fa"
import {AiFillPhone} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import Select from "react-select";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const langOptions = [
    {value:"en",label: "English"},
    {value:"am",label: "Հայերեն"}
]

const TopInformationSection = () => {
    const {i18n} = useTranslation()
    const [selectedLang, setSelectedLang] = useState(langOptions[0])

    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
    }
    useEffect(() => {
        changeLang(selectedLang.value)
    },[selectedLang])

    return (
        <div className={s.informationBlock}>
            <div className={s.contacts}>
                <div><span><MdEmail/></span>info@tevergroup.am</div>
                <div><span><AiFillPhone /></span>+37455439311</div>
                <div><Link target="_blank" to="https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"><FaLinkedinIn /></Link></div>
                <div><Link target="_blank" to="https://ru-ru.facebook.com/"><FaFacebookF /></Link></div>
            </div>
            <div className={s.language}>

                <Select
                    isSearchable={false}
                    onChange={setSelectedLang}
                    value={selectedLang}
                    options={langOptions}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            menuPortal: provided => ({ ...provided, zIndex: 9999,fontSize:"6px" }),
                            menu: provided => ({ ...provided, zIndex: 9999,fontSize:"6px" }),
                            "@media only screen and (max-width: 700px)": {
                                fontSize: "12px",
                            },
                            "@media only screen and (max-width: 450px)": {
                                fontSize: "10px",
                            },
                        })
                    }}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 5,
                        colors: {
                            ...theme.colors,
                            text: '#ccc',
                            primary25: 'var(--main-color)',
                            primary: 'var(--second-color)',
                        },
                    })}
                >
                </Select>
            </div>
        </div>
    )
}

export default TopInformationSection