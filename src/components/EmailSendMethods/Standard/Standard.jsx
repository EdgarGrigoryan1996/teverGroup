import { useTranslation } from "react-i18next"
import g from "../../../globalStyles.module.css"
import s from "../EmailSendMethods.module.css"
import {useCallback, useEffect, useState } from "react"
import Select from "react-select"
import UseAnimations from "react-useanimations";
import alertCircle from 'react-useanimations/lib/alertCircle'
import { getSelectedOptionIndex } from "../helpFunctions/getSelectedOptionIndex"
import {validateEmail} from "../helpFunctions/validateEmail";
import {sendEmailData} from "../../../api/sendEmail/sendEmail";
import SuccessMessagePopup from "../SuccessMessagePopup";

function Price() {
    const {t} = useTranslation()

    const taxOptions = [
        {value:"ԱԱՀ",label:t("price.tax.item1")},
        {value:"Շրջանաության հարկ",label:t("price.tax.item2")},
        {value:"Այլ",label:t("price.tax.item3")}
    ]
    const activityOptions = [
        {value:"Մանրածախ առևտուր",label:t("price.activity.item1")},
        {value:"Մեծածախ առևտուր",label:t("price.activity.item2")},
        {value:"Արտադրություն",label:t("price.activity.item3")},
        {value:"Ծառայությունների մատուցում",label:t("price.activity.item4")},
        {value:"Շինարարություն",label:t("price.activity.item5")},
        {value:"Այլ",label:t("price.activity.item6")}
    ]


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
    const [selectedTax, setSelectedTax] = useState(taxOptions[0])
    const [selectedActivity, setSelectedActivity] = useState(activityOptions[0])
    const [staffNumber, setStaffNumber] = useState({
        text:"",
        err:{
            msg:t("price.err.empty"),
            status:null
        }
    })
    const [monthTurnover, setmonthTurnover] = useState({
        text:"",
        err:{
            msg:t("price.err.empty"),
            status:null
        }
    })
    const [montAverage, setmontAverage] = useState({
        text:"",
        err:{
            msg:t("price.err.empty"),
            status:null
        }
    })
    const [assetsNumber, setAssetsNumber] = useState({
        text:"",
        err:{
            msg:t("price.err.empty"),
            status:null
        }
    })

    function checkFields(){
        if(companyName.err.status && email.err.status && phone.err.status && staffNumber.err.status && monthTurnover.err.status && assetsNumber.err.status){
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
        sendEmailData(companyName,email,phone,selectedTax,selectedActivity,staffNumber,monthTurnover,montAverage,assetsNumber)
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
        setStaffNumber({
            text:"",
            err:{
                msg:t("price.err.empty"),
                status:null
            }
        })
        setmonthTurnover({
            text:"",
            err:{
                msg:t("price.err.empty"),
                status:null
            }
        })
        setmontAverage({
            text:"",
            err:{
                msg:t("price.err.empty"),
                status:null
            }
        })
        setAssetsNumber({
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

        if (monthTurnover.text.trim() === "") {
            setmonthTurnover({
                ...monthTurnover,
                err: {
                    ...monthTurnover.err,
                    status: false
                }
            })
        } else {
            setmonthTurnover({
                ...monthTurnover,
                err: {
                    ...monthTurnover.err,
                    status: true
                }
            })
        }

        if (staffNumber.text.trim() === "") {
            setStaffNumber({
                ...staffNumber,
                err: {
                    ...staffNumber.err,
                    status: false
                }
            })
        } else {
            setStaffNumber({
                ...staffNumber,
                err: {
                    ...staffNumber.err,
                    status: true
                }
            })
        }

        if (assetsNumber.text.trim() === "") {
            setAssetsNumber({
                ...assetsNumber,
                err: {
                    ...assetsNumber.err,
                    status: false
                }
            })
        } else {
            setAssetsNumber({
                ...assetsNumber,
                err: {
                    ...assetsNumber.err,
                    status: true
                }
            })
        }

        setReadyForCheck(!readyForCheck)


    }
    useEffect(() => {
        const selectedValue = selectedTax.value;
        const selectedValue2 = selectedActivity.value;
        let index = getSelectedOptionIndex(taxOptions,selectedValue);
        let index2 = getSelectedOptionIndex(activityOptions,selectedValue2);

        setSelectedTax(taxOptions[index])
        setSelectedActivity(activityOptions[index2])

    },[window.localStorage.lng])

    useEffect(() => {
        checkFields()
    },[readyForCheck])

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
    ), [selectedActivity, selectedTax])

    return (
        <section>
            <h2>{t("price.title")}</h2>
            {successMessageStatus && <SuccessMessagePopup/>}
            <div className={s.standardMethod}>
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
                    <div className={s.inputBlock + " " + s.selectInputBlock}>
                        <div className={s.fieldTitle}>{t("price.tax.title")}</div>
                        {renderSelect(selectedTax, taxOptions, setSelectedTax)}
                    </div>
                    <div className={s.inputBlock + " " + s.selectInputBlock}>
                        <div className={s.fieldTitle}>{t("price.activity.title")}</div>
                        {renderSelect(selectedActivity, activityOptions, setSelectedActivity)}

                    </div>
                    <div className={s.inputBlock + " " + (staffNumber.err.status === false && s.errorBlock)}><input type="number"  placeholder={t("price.staffNumber")} value={staffNumber.text} onChange={(e) => changeValue(e,staffNumber,setStaffNumber)}/>
                        {staffNumber.err.status === false &&
                            <span title={staffNumber.err.msg} className={s.errorMessage}>
                                <UseAnimations animation={alertCircle} strokeColor={"#ea3434"} size={36}/>
                            </span>}

                    </div>
                    <div className={s.inputBlock + " " + (monthTurnover.err.status === false && s.errorBlock)}><input type="number"  placeholder={t("price.monthTurnover")} value={monthTurnover.text} onChange={(e) => changeValue(e,monthTurnover,setmonthTurnover)}/>
                        {monthTurnover.err.status === false &&
                            <span title={monthTurnover.err.msg} className={s.errorMessage}>
                                <UseAnimations animation={alertCircle} strokeColor={"#ea3434"} size={36}/>
                            </span>}

                    </div>
                    <div className={s.inputBlock + " " + (montAverage.err.status === false && s.errorBlock)}><input type="number"  placeholder={t("price.monthAverage")} value={montAverage.text} onChange={(e) => changeValue(e,montAverage,setmontAverage)}/>
                        {montAverage.err.status === false &&
                            <span title={montAverage.err.msg} className={s.errorMessage}>
                                <UseAnimations animation={alertCircle} strokeColor={"#ea3434"} size={36}/>
                            </span>}

                    </div>
                    <div className={s.inputBlock + " " + (assetsNumber.err.status === false && s.errorBlock)}><input type="number"  placeholder={t("price.assetsNumber")} value={assetsNumber.text} onChange={(e) => changeValue(e,assetsNumber,setAssetsNumber)}/>
                        {assetsNumber.err.status === false &&
                            <span title={assetsNumber.err.msg} className={s.errorMessage}>

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