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
        sendExcelEmailData(companyName,email,phone,students)
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
                    ...companyName.err,
                    status: false
                }
            })
        } else {
            setCompanyName({
                ...companyName,
                err: {
                    ...companyName.err,
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
                    ...phone.err,
                    status: false
                }
            })
        } else {
            setPhone({
                ...phone,
                err: {
                    ...phone.err,
                    status: true
                }
            })
        }

        if (students.text.trim() === "") {
            setStudents({
                ...students,
                err: {
                    ...students.err,
                    status: false
                }
            })
        } else {
            setStudents({
                ...students,
                err: {
                    ...students.err,
                    status: true
                }
            })
        }

        setReadyForCheck(!readyForCheck)


    }

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
                </div>
                <div className={s.buttonBlock}><button onClick={sendEmail}>{t("price.buttonText")}</button></div>
            </div>
        </section>
    )
}

export default Price