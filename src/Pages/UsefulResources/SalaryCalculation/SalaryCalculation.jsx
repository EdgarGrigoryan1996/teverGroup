import React, {useEffect, useRef, useState} from 'react';
import s from "./SalaryCalculation.module.css"
import g from "../../../globalStyles.module.css"
import RegisterPayInfo from "./SalaryCalculationInfos/RegisterPayInfo";
import RegisterNotPay from "./SalaryCalculationInfos/RegisterNotPay";
import CleanNotPayInfo from "./SalaryCalculationInfos/CleanNotPayInfo";
import CleanPayInfo from "./SalaryCalculationInfos/CleanPayInfo";
import {useTranslation} from "react-i18next";

function SalaryCalculation() {
    const {t} = useTranslation()
    const [registeredMethod, setRegisteredMethod] = useState(true)
    const [payMethod, setPayMethod] = useState(true)

    const [currentSalary, setCurrentSalary] = useState("")
    const [ekamtahark, setEkamtahark] = useState(null)
    const [socialPay, setSocialPay] = useState(null)
    const [droshmanish, setDroshmanish] = useState(null)
    const [result, setResult] = useState(null)

    const inputRef = useRef(null)

    let currentResult;

    let droshmanish1,ekamtahark1,socialPay1

    const handleChangeMethod = (setMethod,status) => {
        setMethod(status)
        inputRef.current.focus()
    }

    function registerPay(){
            setEkamtahark(Math.round(+currentSalary * 0.2))
        ekamtahark1 = Math.round(+currentSalary * 0.2)

            if(+currentSalary < 500000){
                setSocialPay(Math.round(+currentSalary * 5 / 100))
                socialPay1 = Math.round(+currentSalary * 5 / 100)
            } else if(+currentSalary < 1125000){
                setSocialPay(Math.round(+currentSalary * 10 / 100) - 25000)
                socialPay1 = Math.round(+currentSalary * 10 / 100) - 25000
            } else{
                setSocialPay(87500)
                socialPay1 = 87500
            }

            switch (true) {
                case +currentSalary <= 100000 && currentSalary!== "" :
                    setDroshmanish(1500)
                    droshmanish1 =1500
                    break;
                case +currentSalary <= 200000 && currentSalary!== "" :
                    setDroshmanish(3000)
                    droshmanish1 =3000
                    break;
                case +currentSalary <= 500000 && currentSalary!== "" :
                    setDroshmanish(5500)
                    droshmanish1 =5500
                    break;
                case +currentSalary <= 1000000 && currentSalary!== "" :
                    setDroshmanish(8500)
                    droshmanish1 =8500
                    break;
                case +currentSalary > 1000000 && currentSalary!== "" :
                    setDroshmanish(15000)
                    droshmanish1 =15000
                    break;
                default:
                    setDroshmanish(0)
                    droshmanish1 = 0
            }
            currentResult = +currentSalary - ekamtahark1 - socialPay1 - droshmanish1
            return currentResult

    }
    function cleanPay(){

        let salary = +currentSalary
        

        if(salary !== 0){
            // Droshmanish
            if(salary < 73500 && salary !== ""){
                setDroshmanish(1500)
                droshmanish1 = 1500
            } else if(salary <= 147000 && salary !== ""){
                setDroshmanish(3000)
                droshmanish1 = 3000
            } else if(salary <= 369000 && salary !== ""){
                setDroshmanish(5500)
                droshmanish1 = 5500
            } else if(salary <= 716500 && salary !== ""){
                setDroshmanish(8500)
                droshmanish1 = 8500
            } else {
                setDroshmanish(15000)
                droshmanish1 = 15000
            }

        //     Social
            if(salary < 369500){
                setSocialPay(Math.round((salary+droshmanish1) / 0.75 * 0.05))
                socialPay1 = Math.round((salary+droshmanish1) / 0.75 * 0.05)
            } else if(salary < 797500){
                setSocialPay(Math.round((salary+droshmanish1 - 25000) / 0.7 * 0.1 - 25000))
                socialPay1 = Math.round((salary+droshmanish1 - 25000) / 0.7 * 0.1 - 25000)
            } else {
                setSocialPay(87500)
                socialPay1 = 87500
            }

        //     Ekamtahark
            setEkamtahark(Math.round((salary + droshmanish1 + socialPay1) / 0.8 * 0.2))
            ekamtahark1 = Math.round((salary + droshmanish1 + socialPay1) / 0.8 * 0.2)
            currentResult = salary + droshmanish1 + ekamtahark1 + socialPay1
            return currentResult
        } else {
            setSocialPay(0)
            setEkamtahark(0)
            setDroshmanish(0)
            return 0
        }
    }
    function registerNotPay(){
        let salary =  +currentSalary

        if(salary > 0) {
            setEkamtahark(Math.round(salary * 0.2))
            ekamtahark1 = Math.round(salary * 0.2)
            setSocialPay(0)
            socialPay1 = 0

            switch (true) {
                case salary <= 100000 && salary !== "" :
                    setDroshmanish(1500)
                    droshmanish1 = 1500
                    break;
                case salary <= 200000 && salary !== "" :
                    setDroshmanish(3000)
                    droshmanish1 = 3000
                    break;
                case salary <= 500000 && salary !== "" :
                    setDroshmanish(5500)
                    droshmanish1 = 5500
                    break;
                case salary <= 1000000 && salary !== "" :
                    setDroshmanish(8500)
                    droshmanish1 = 8500
                    break;
                case salary > 1000000 && salary !== "" :
                    setDroshmanish(15000)
                    droshmanish1 = 15000
                    break;
                default:
                    setDroshmanish(0)
                    droshmanish1 = 0
            }
        } else {
            setSocialPay(0)
            setEkamtahark(0)
            setDroshmanish(0)
            return 0
        }
            currentResult = salary - ekamtahark1 - socialPay1 - droshmanish1
            return currentResult

    }
    function cleanNotPay(){
        let salary = +currentSalary

        if(salary !== 0){
            // Droshmanish
            if(salary < 78500){
                setDroshmanish(1500)
                droshmanish1 = 1500
            } else if(salary <= 157000){
                setDroshmanish(3000)
                droshmanish1 = 3000
            } else if(salary <= 394500){
                setDroshmanish(5500)
                droshmanish1 = 5500
            } else if(salary <= 791500){
                setDroshmanish(8500)
                droshmanish1 = 8500
            } else {
                setDroshmanish(15000)
                droshmanish1 = 15000
            }

            //     Social
            setSocialPay(0)
            socialPay1 = 0
            //     Ekamtahark
            setEkamtahark(Math.round((salary + droshmanish1 + socialPay1) / 0.8 * 0.2))
            ekamtahark1 = Math.round((salary + droshmanish1 + socialPay1) / 0.8 * 0.2)
            currentResult = salary + droshmanish1 + ekamtahark1 + socialPay1
            return currentResult
        } else {
            setSocialPay(0)
            setEkamtahark(0)
            setDroshmanish(0)
            return 0
        }
    }


    useEffect( () => {
        if(registeredMethod && payMethod){
            setResult(registerPay())
        } else if(registeredMethod && !payMethod){
            setResult(registerNotPay())
        } else if(!registeredMethod && payMethod){
            setResult(cleanPay())
        } else if(!registeredMethod && !payMethod){
            setResult(cleanNotPay())
        }


    },[currentSalary,registeredMethod,payMethod])

    return (
        <section className={s.salaryCalculate}>
            <div className={g.sectionTitle}>
                <h2>{t("menu.resources.subMenu.item3")}</h2>
            </div>
            <div className={s.calculateBlock}>

                <div className={s.cleanRegisteredBlock}>
                    <div className={(registeredMethod ? s.selectedMethod : "")} onClick={() => handleChangeMethod(setRegisteredMethod,true)}>{t("salary.gross")}</div>
                    <div className={(!registeredMethod ? s.selectedMethod : "")} onClick={() => handleChangeMethod(setRegisteredMethod,false)}>{t("salary.net")}</div>
                </div>
                <div><p>{t("salary.question")}</p></div>
                <div className={s.vcharoxBlock}>
                    <div className={(payMethod ? s.selectedMethod : "")} onClick={() => handleChangeMethod(setPayMethod,true)}>{t("salary.yes")}</div>
                    <div className={(!payMethod ? s.selectedMethod : "")} onClick={() => handleChangeMethod(setPayMethod,false)}>{t("salary.no")}</div>
                </div>

                <div className={s.enterSalary}>
                    <input ref={inputRef} placeholder={registeredMethod ? t("salary.grossPlaceholder") + "..." : t("salary.netPlaceholder") + "..."} type="text" value={currentSalary} onChange={(e) => {
                        let currentSymbol = e.target.value
                        currentSymbol = currentSymbol.split("")
                        currentSymbol = currentSymbol[currentSymbol.length-1]

                        let reg = new RegExp('^[0-9]+$');

                        if(reg.test(currentSymbol) || currentSymbol == undefined) {
                            setCurrentSalary(e.target.value)
                        }
                    }}/>
                </div>
                <div className={s.resultWrapper}>
                    <div className={s.resultBlock}>
                        <div>{t("salary.ekamtahark")} 20%</div>
                        <div>{ekamtahark ? new Intl.NumberFormat("am-AM").format(+ekamtahark) : 0}</div>
                    </div>
                    <div className={s.resultBlock}>
                        <div>{t("salary.social")}</div>
                        <div>{socialPay ? new Intl.NumberFormat("am-AM").format(+socialPay) : 0}</div>
                    </div>
                    <div className={s.resultBlock}>
                        <div>{t("salary.droshmanish")}</div>
                        <div>{droshmanish ? new Intl.NumberFormat("am-AM").format(+droshmanish) : 0}</div>
                    </div>
                    <div className={s.resultBlock}>
                        <div>{registeredMethod ? t("salary.result") : t("salary.netResult")}</div>
                        <div>{new Intl.NumberFormat("am-AM").format(+result)}</div>
                    </div>
                </div>

                <div className={s.salaryInfo}>
                    {(registeredMethod && payMethod) && <RegisterPayInfo currentSalary={currentSalary} socialPay={socialPay} droshmanish={droshmanish} ekamtahark={ekamtahark} result={result}/>}
                    {(registeredMethod && !payMethod) && <RegisterNotPay currentSalary={currentSalary} socialPay={socialPay} droshmanish={droshmanish} ekamtahark={ekamtahark} result={result}/>}
                    {(!registeredMethod && !payMethod) && <CleanNotPayInfo currentSalary={currentSalary} socialPay={socialPay} droshmanish={droshmanish} ekamtahark={ekamtahark} result={result}/>}
                    {(!registeredMethod && payMethod) && <CleanPayInfo currentSalary={currentSalary} socialPay={socialPay} droshmanish={droshmanish} ekamtahark={ekamtahark} result={result}/>}
                </div>
            </div>
        </section>
    );
}

export default SalaryCalculation;