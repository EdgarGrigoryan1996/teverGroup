import { useTranslation } from "react-i18next"
import g from "../../../globalStyles.module.css"
import s from "./Price.module.css"
import {useState } from "react"
import Select from "react-select"
import UseAnimations from "react-useanimations";
import alertCircle from 'react-useanimations/lib/alertCircle'
function Price() {
    const taxOptions = [
        {value:"VAT Payer",label:"VAT Payer"},
        {value:"Tumover Taxpayer",label:"Tumover Taxpayer"},
        {value:"Other",label:"Other"}
    ]
    const activityOptions = [
        {value:"Retail",label:"Retail"},
        {value:"Wholesale",label:"Wholesale"},
        {value:"Production",label:"Production"},
        {value:"Service Provision",label:"Service Provision"},
        {value:"Construction",label:"Construction"},
        {value:"Other",label:"Other"}
    ]


    const {t} = useTranslation()
    const [readyForSend, setReadyForSend] = useState(false)
    const [companyName, setCompanyName] = useState({
        text:"",
        err:{
            msg:"Company Name is Requared",
            status:true
        }
    })
    const [email, setEmail] = useState({
        text:"",
        err:{
            msg:"Email is requared",
            status:true
        }
    })
    const [selectedTax, setSelectedTax] = useState(taxOptions[0])
    const [selectedActivity, setSelectedActivity] = useState(activityOptions[0])
    const [staffNumber, setStaffNumber] = useState({
        text:"",
        err:{
            msg:"Staff Number is Requared",
            status:true
        }
    })
    const [monthTurnover, setmonthTurnover] = useState({
        text:"",
        err:{
            msg:"Month Turnover is Requared",
            status:true
        }
    })
    const [montAverage, setmontAverage] = useState({
        text:"",
        err:{
            msg:"Month Average is Requared",
            status:true
        }
    })
    const [assetsNumber, setAssetsNumber] = useState({
        text:"",
        err:{
            msg:"Assets Number is Requared",
            status:true
        }
    })

   
    function changeValue(event,state,set) {
        set({
            text:event.target.value,
            err:{
                ...state.err,
                status:true
            }
        })
    }
    function sendData(){
        if(readyForSend){
            console.log("success")
            setCompanyName({
                text:"",
                err:{
                    msg:"Company Name is Requared",
                    status:true
                }
            })
            setEmail({
                text:"",
                err:{
                    msg:"Email is requared",
                    status:true
                }
            })
            setStaffNumber({
                text:"",
                err:{
                    msg:"Staff Number is Requared",
                    status:true
                }
            })
            setmonthTurnover({
                text:"",
                err:{
                    msg:"Month Turnover is Requared",
                    status:true
                }
            })
            setmontAverage({
                text:"",
                err:{
                    msg:"Month Average is Requared",
                    status:true
                }
            })
            setAssetsNumber({
                text:"",
                err:{
                    msg:"Assets Number is Requared",
                    status:true
                }
            })
            setReadyForSend(false)
        }
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
        }

        if (email.text.trim() === "") {
            setEmail({
                ...email,
                err: {
                    ...email.err,
                    status: false
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
        }

        if (montAverage.text.trim() === "") {
            setmontAverage({
                ...montAverage,
                err: {
                    ...montAverage.err,
                    status: false
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
        }

        if (assetsNumber.text.trim() === "") {
            setAssetsNumber({
                ...assetsNumber,
                err: {
                    ...assetsNumber.err,
                    status: false
                }
            })
        }
       
        if(companyName.err.status && email.err.status && staffNumber.err.status && monthTurnover.err.status && montAverage.err.status && assetsNumber.err.status){
            setReadyForSend(true)
            sendData()
        }
    }

    
    return (
        <section>
            <div className={g.sectionTitle}>
                <h2>{t("menu.services.subMenu.item7")}</h2>
            </div>
            <div className={s.formBlock}>
                <div className={s.fields}>
                    <div className={s.inputBlock + " " + (!companyName.err.status && s.errorBlock)}><input type="text" value={companyName.text}  placeholder="Company Name" onChange={(e) => changeValue(e,companyName,setCompanyName)}/>
                        {!companyName.err.status && 
                            <span title={companyName.err.msg} className={s.errorMessage}>
                            <UseAnimations animation={alertCircle} strokeColor={"#ea3434"} size={36}/>
                        </span>}
                    </div>
                    <div className={s.inputBlock + " " + (!email.err.status && s.errorBlock)}><input type="email" value={email.text} placeholder="Email" onChange={(e) => changeValue(e,email,setEmail)}/>
                        {!email.err.status && 
                            <span title={email.err.msg} className={s.errorMessage}>
                            <UseAnimations animation={alertCircle} strokeColor={"#ea3434"} size={36}/>
                        </span>}
                    </div>
                    <div className={s.inputBlock + " " + s.selectInputBlock}>
                        <div className={s.fieldTitle}>Tax Regime</div>
                        <Select 
                            value={selectedTax}
                            options={taxOptions}
                            onChange={setSelectedTax}
                             styles={{
                                control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'var(--second-color)' : 'var(--grey-color)',
                                outline:"none",
                                padding:"5px",
                                border: "0",
                                boxShadow:"none",
                                transition:"all .5s",
                                border: state.isFocused ? "1px solid var(--second-color)" : "1px solid #ccc",
                                '&:hover': {
                                    borderColor:state.isFocused ? "var(--second-color)" : "#ccc"
                                 }
                                }),
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
                    </div>
                    <div className={s.inputBlock + " " + s.selectInputBlock}>
                        <div className={s.fieldTitle}>Field of Activity</div>
                        <Select 
                            value={selectedActivity}
                            options={activityOptions}
                            onChange={setSelectedActivity}
                            styles={{
                                control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'var(--second-color)' : 'var(--grey-color)',
                                outline:"none",
                                padding:"5px",
                                border: "0",
                                boxShadow:"none",
                                transition:"all .5s",
                                border: state.isFocused ? "1px solid var(--second-color)" : "1px solid #ccc",
                                '&:hover': {
                                    borderColor:state.isFocused ? "var(--second-color)" : "#ccc"
                                 }
                                }),
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
                    </div>
                    <div className={s.inputBlock + " " + (!staffNumber.err.status && s.errorBlock)}><input type="number"  placeholder="Number of Staff" value={staffNumber.text} onChange={(e) => changeValue(e,staffNumber,setStaffNumber)}/>
                              {!staffNumber.err.status && 
                                <span title={staffNumber.err.msg} className={s.errorMessage}>
                                <UseAnimations animation={alertCircle} strokeColor={"#ea3434"} size={36}/>
                            </span>}
                              
                    </div>
                    <div className={s.inputBlock + " " + (!monthTurnover.err.status && s.errorBlock)}><input type="number"  placeholder="Monthly Average Turnover" value={monthTurnover.text} onChange={(e) => changeValue(e,monthTurnover,setmonthTurnover)}/>
                              {!monthTurnover.err.status && 
                                <span title={monthTurnover.err.msg} className={s.errorMessage}>
                                <UseAnimations animation={alertCircle} strokeColor={"#ea3434"} size={36}/>
                            </span>}
                              
                    </div>
                    <div className={s.inputBlock + " " + (!montAverage.err.status && s.errorBlock)}><input type="number"  placeholder="Monthly Average import size" value={montAverage.text} onChange={(e) => changeValue(e,montAverage,setmontAverage)}/>
                              {!montAverage.err.status && 
                                <span title={montAverage.err.msg} className={s.errorMessage}>
                                <UseAnimations animation={alertCircle} strokeColor={"#ea3434"} size={36}/>
                            </span>}
                              
                    </div>
                    <div className={s.inputBlock + " " + (!assetsNumber.err.status && s.errorBlock)}><input type="number"  placeholder="Number of Fixed Assets" value={assetsNumber.text} onChange={(e) => changeValue(e,assetsNumber,setAssetsNumber)}/>
                              {!assetsNumber.err.status && 
                                <span title={assetsNumber.err.msg} className={s.errorMessage}>
                                    
                                    <UseAnimations animation={alertCircle} strokeColor={"#ea3434"} size={36}/>
                                </span>}
                              
                    </div>
                </div>
                <div className={s.buttonBlock}><button onClick={sendEmail}>Send</button></div>
            </div>
        </section>
    )
}

export default Price