import { useTranslation } from "react-i18next"
import g from "../../../globalStyles.module.css"
import s from "./Price.module.css"
import { useState } from "react"
import Select from "react-select"
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
    const [companyName, setCompanyName] = useState("")
    const [email, setEmail] = useState("")
    const [selectedTax, setSelectedTax] = useState(taxOptions[0])
    const [selectedActivity, setSelectedActivity] = useState(activityOptions[0])
    const [staffNumber, setStaffNumber] = useState("")
    const [monthTurnover, setmonthTurnover] = useState("")
    const [montAverage, setmontAverage] = useState("")
    const [assetsNumber, setAssetsNumber] = useState("")

    function changeValue(event,set) {
        set(event.target.value)
    }
    return (
        <section>
            <div className={g.sectionTitle}>
                <h2>{t("menu.services.subMenu.item7")}</h2>
            </div>
            <div className={s.formBlock}>
                <div className={s.fields}>
                    <div className={s.inputBlock}><input type="text" value={companyName}  placeholder="Company Name" onChange={(e) => changeValue(e,setCompanyName)}/></div>
                    <div className={s.inputBlock}><input type="email" value={email} placeholder="Email" onChange={(e) => changeValue(e,setEmail)}/></div>
                    <div className={s.inputBlock}>
                        <Select 
                            value={selectedTax}
                            options={taxOptions}
                            onChange={setSelectedTax}
                        />
                    </div>
                    <div className={s.inputBlock}>
                        <Select 
                            value={selectedActivity}
                            options={activityOptions}
                            onChange={setSelectedActivity}
                        />
                    </div>
                    <div className={s.inputBlock}><input type="number"  placeholder="Number of Staff" value={staffNumber} onChange={(e) => changeValue(e,setStaffNumber)}/></div>
                    <div className={s.inputBlock}><input type="number"  placeholder="Monthly Average Turnover" value={monthTurnover} onChange={(e) => changeValue(e,setmonthTurnover)}/></div>
                    <div className={s.inputBlock}><input type="number"  placeholder="Monthly Average import size" value={montAverage} onChange={(e) => changeValue(e,setmontAverage)}/></div>
                    <div className={s.inputBlock}><input type="number"  placeholder="Number of Fixed Assets" value={assetsNumber} onChange={(e) => changeValue(e,setAssetsNumber)}/></div>
                </div>
                <div className={s.buttonBlock}><button>Send</button></div>
            </div>
        </section>
    )
}

export default Price