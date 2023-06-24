import { useTranslation } from "react-i18next"
import g from "../../../globalStyles.module.css"
import s from "../EmailSendMethods.module.css"
import {useCallback, useEffect, useState } from "react"
import Select from "react-select"
import UseAnimations from "react-useanimations";
import alertCircle from 'react-useanimations/lib/alertCircle'
import { getSelectedOptionIndex } from "../helpFunctions/getSelectedOptionIndex"
import {validateEmail} from "../helpFunctions/validateEmail";
import {sendEmailData, sendExcelEmailData} from "../../../api/sendEmail/sendEmail";
import SuccessMessagePopup from "../SuccessMessagePopup";

function Price() {
    const {t} = useTranslation()

    const courseOptions = [
        {value:"Հաշվապահական հաշվառման բազային գիտելիքների դասընթացներ",label:t("trainings.items.item1")},
        {value:"ՀԾ հաշվապահ ծրագրի ուսուցում",label:t(t("trainings.items.item2"))},
        {value:"Microsoft Excel խորացված դասընթացներ",label:t(t("trainings.items.item3"))}
    ]

    const [selectedCourse, setSelectedCourse] = useState(courseOptions[0])
    const [successMessageStatus, setSuccessMessageStatus] = useState(false)
    const [readyForCheck, setReadyForCheck] = useState(false)
    const [companyName, setCompanyName] = useState({
        text:"",
        err:{
            msg:t("price.err.empty"),
            status:null
        }
    })
    const [email, setEmail] = useState({
        text:"",
        err:{
            msg:t("price.err.empty"),
            status:null
        }
    })
    const [phone, setPhone] = useState({
        text:"",
        err:{
            msg:t("price.err.empty"),
            status:null
        }
    })

    const [students, setStudents] = useState({
        text:"",
        err:{
            msg:t("price.err.empty"),
            status:null
        }
    })

    function checkFields(){
        if(companyName.err.status && email.err.status && phone.err.status  && students.err.status){
            sendData()
        }
    }
    function changeValue(event,state,set) {
        set({
            text:event.target.value,
            err:{
                ...state.err,
                status:null
            }
        })
    }
    function sendData(){
        sendExcelEmailData(companyName,email,phone,students,selectedCourse)
        setCompanyName({
            text:"",
            err:{
                msg:t("price.err.empty"),
                status:null
            }
        })
        setEmail({
            text:"",
            err:{
                msg:t("price.err.empty"),
                status:null
            }
        })
        setPhone({
            text:"",
            err:{
                msg:t("price.err.empty"),
                status:null
            }
        })

        setStudents({
            text:"",
            err:{
                msg:t("price.err.empty"),
                status:null
            }
        })
        setSuccessMessageStatus(true)
        setTimeout(() => {
            setSuccessMessageStatus(false)
        },3000)

    }
    function sendEmail(){
        if (companyName.text.trim() === "") {
            setCompanyName({
                ...companyName,
                err: {
                    msg: t("price.err.empty"),
                    status: false
                }
            })
        } else {
            setCompanyName({
                ...companyName,
                err: {
                    msg: t("price.err.empty"),
                    status: true
                }
            })
        }

        if(email.text.trim() !== "" && !validateEmail(email.text)){
            setEmail({
                ...email,
                err: {
                    msg: t("price.err.emailErr"),
                    status: false
                }
            })
        } else if(email.text.trim() === ""){
            setEmail({
                ...email,
                err: {
                    msg: t("price.err.empty"),
                    status: false
                }
            })
        } else {
            setEmail({
                ...email,
                err: {
                    msg: t("price.err.empty"),
                    status: true
                }
            })
        }

        if (phone.text.trim() === "") {
            setPhone({
                ...phone,
                err: {
                    msg: t("price.err.empty"),
                    status: false
                }
            })
        } else {
            setPhone({
                ...phone,
                err: {
                    msg: t("price.err.empty"),
                    status: true
                }
            })
        }

        if (students.text.trim() === "") {
            setStudents({
                ...students,
                err: {
                    msg: t("price.err.empty"),
                    status: false
                }
            })
        } else {
            setStudents({
                ...students,
                err: {
                    msg: t("price.err.empty"),
                    status: true
                }
            })
        }

        setReadyForCheck(!readyForCheck)


    }

    const styles = {
        valueContainer: (css, state) => ({ ...css,
            input: { "height": 0 }
        })
    }

    const renderSelect = useCallback((selectedValue, options, handleChange) => (
        <Select
            isSearchable={false}
            value={selectedValue}
            options={options}
            onChange={handleChange}
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
    ), [selectedCourse])

    useEffect(() => {

        const selectedValue = selectedCourse.value;
        let index = getSelectedOptionIndex(courseOptions,selectedValue);
        setSelectedCourse(courseOptions[index])

    },[window.localStorage.lng,t])

    useEffect(() => {
        checkFields()
    },[readyForCheck])

    return (
        <section>
            <h2>{t("price.excelTitle")}</h2>
            {successMessageStatus && <SuccessMessagePopup/>}
            <div className={s.excelMethod}>
                <div className={s.fields}>
                    <div className={s.inputBlock + " " + (companyName.err.status === false && s.errorBlock)}><input type="text" value={companyName.text}  placeholder={t("price.companyName")} onChange={(e) => changeValue(e,companyName,setCompanyName)}/>
                        {companyName.err.status === false &&
                            <span title={companyName.err.msg} className={s.errorMessage}>
                            <UseAnimations animation={alertCircle} strokeColor={"#ea3434"} size={36}/>
                        </span>}
                    </div>
                    <div className={s.inputBlock + " " + (email.err.status === false && s.errorBlock)}><input type="email" value={email.text} placeholder={t("price.email")} onChange={(e) => changeValue(e,email,setEmail)}/>
                        {email.err.status === false &&
                            <span title={email.err.msg} className={s.errorMessage}>
                            <UseAnimations animation={alertCircle} strokeColor={"#ea3434"} size={36}/>
                        </span>}
                    </div>
                    <div className={s.inputBlock + " " + (phone.err.status === false && s.errorBlock)}><input type="number" value={phone.text} placeholder={t("price.phone")} onChange={(e) => changeValue(e,phone,setPhone)}/>
                        {phone.err.status === false &&
                            <span title={phone.err.msg} className={s.errorMessage}>
                            <UseAnimations animation={alertCircle} strokeColor={"#ea3434"} size={36}/>
                        </span>}
                    </div>

                    <div className={s.inputBlock + " " + (students.err.status === false && s.errorBlock)}><input type="number"  placeholder={t("price.students")} value={students.text} onChange={(e) => changeValue(e,students,setStudents)}/>
                        {students.err.status === false &&
                            <span title={students.err.msg} className={s.errorMessage}>
                                    <UseAnimations animation={alertCircle} strokeColor={"#ea3434"} size={36}/>
                                </span>}
                    </div>
                    <div className={s.excelInputBlock}>
                        <div className={s.fieldTitle}>{t("price.excelCourseName")}</div>
                        {renderSelect(selectedCourse, courseOptions, setSelectedCourse)}
                    </div>

                </div>
                <div className={s.buttonBlock}><button onClick={sendEmail}>{t("price.buttonText")}</button></div>
            </div>
        </section>
    )
}

export default Price