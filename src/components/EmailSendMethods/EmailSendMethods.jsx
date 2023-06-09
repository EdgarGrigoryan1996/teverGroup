import React, {useEffect, useState} from 'react';
import Select from "react-select";
import Standard from "./Standard/Standard";
import Excel from "./Excel/Excel";
import s from "./EmailSendMethods.module.css"
import g from "../../globalStyles.module.css";
import {useTranslation} from "react-i18next";
import {getSelectedOptionIndex} from "./helpFunctions/getSelectedOptionIndex";


function EmailSendMethods(props) {
    const {t} = useTranslation()
    const methods = [
        {value:"standard",label:t("price.title")},
        {value:"excel",label:t("price.excelTitle")}
    ]
    const [selectedMethod, setSelectedMethod] = useState(methods[0])

    const styles = {
        valueContainer: (css, state) => ({ ...css,
            input: { "height": 0 }
        })
    }
    useEffect(() => {
        const selectedValue = selectedMethod.value;
        let index = getSelectedOptionIndex(methods,selectedValue);


        setSelectedMethod(methods[index])


    },[window.localStorage.lng,t])

    return (
        <div className={s.sendEmailBlock}>
            <div className={g.sectionTitle}>
                <h2>{t("price.topTitle")}</h2>
            </div>
            <Select
                isSearchable={false}
                value={selectedMethod}
                onChange={setSelectedMethod}
                options={methods}
                styles={{
                    ...styles,
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'var(--second-color)' : 'var(--grey-color)',
                        outline:"none",
                        padding:"5px",
                        boxShadow:"none",
                        transition:"all .5s",
                        border: state.isFocused ? "1px solid var(--second-color)" : "1px solid #ccc",
                        '&:hover': {
                            borderColor:state.isFocused ? "var(--second-color)" : "#ccc"
                        },
                        "@media only screen and (max-width: 560px)": {
                            ...styles["@media only screen and (max-width: 560px)"],
                            fontSize: "12px",
                        },
                        "@media only screen and (max-width: 450px)": {
                            ...styles["@media only screen and (max-width: 450px)"],
                            fontSize: "10px",
                        },
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
            />
            <div className={s.methodsContent}>
                {selectedMethod.value === methods[0].value ? <Standard /> : <Excel />}
            </div>
        </div>
    );
}

export default EmailSendMethods;