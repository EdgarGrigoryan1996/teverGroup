import s from "./TopInformationSection.module.css"
import {useTranslation} from "react-i18next";
import {AiFillPhone} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import Select from "react-select";
import {useEffect, useState} from "react";


const langOptions = [
    {value:"am",label: "Հայերեն"},
    {value:"en",label: "English"}
    
]
function getStorageLang(options){
    const currentStorageLang = localStorage.getItem("lng")
    if(currentStorageLang){
       let test = options.filter((option) => {
            return option.value === currentStorageLang
        })[0]
        return test
    } else {
        return options[0]
    }
}

const TopInformationSection = () => {
    const {i18n} = useTranslation()
    const [selectedLang, setSelectedLang] =  useState(getStorageLang(langOptions))

    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
        localStorage.setItem("lng",lang)
    }
    useEffect(() => {
        changeLang(selectedLang.value)
    },[selectedLang])

    const styles = {
        // this one works
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: "3px",
          }),
          menu: (provided,state) => ({
            ...provided,
            zIndex:9999,
          }),
          option: (provided, state) => ({
            ...provided,
            zIndex:9999,
            "@media only screen and (max-width: 700px)":{
                fontSize: '14px', // Здесь можно указать нужный размер шрифта
            },
            "@media only screen and (max-width: 450px)":{
                fontSize: '10px', // Здесь можно указать нужный размер шрифта
            }
            
          }),
            control: (baseStyles, state) => ({
                ...baseStyles,
                "@media only screen and (max-width: 700px)": {
                    fontSize: "12px",
                },
                "@media only screen and (max-width: 450px)": {
                    fontSize: "10px",
                    width:"85px",
                    padding:0,
                    height:"28px",
                    minHeight:"28px",
                    
                },
            })
        }
        
    
    return (
        <div className={s.informationBlock}>
            <div className={s.contacts}>
                <div><span><MdEmail/></span><a href="mailto:info@tevergroup.am?subject=&body=">info@tevergroup.am</a></div>
                <div><span><AiFillPhone /></span><a href="tel:+37455233311">+ 374 (55) 23 33 11</a></div>
            </div>
            <div className={s.language}>

                <Select
                    isSearchable={false}
                    onChange={setSelectedLang}
                    value={selectedLang}
                    options={langOptions}
                    styles={styles}
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