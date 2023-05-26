import React, {useEffect, useState} from 'react';
import s from "./SalaryCalculation.module.css"
import g from "../../../globalStyles.module.css"
function SalaryCalculation(props) {
    const [registeredMethod, setRegisteredMethod] = useState(true)
    const [payMethod, setPayMethod] = useState(true)
    const [currentSalary, setCurrentSalary] = useState("")

    const [ekamtahark, setEkamtahark] = useState(null)
    const [socialPay, setSocialPay] = useState(null)
    const [droshmanish, setDroshmanish] = useState(null)
    const [result, setResult] = useState(null)



    let currentResult;
    if(registeredMethod && payMethod){
        currentResult = currentSalary ? +currentSalary - ekamtahark - socialPay - droshmanish : 0
    } else if(registeredMethod && !payMethod){
        currentResult = "registerNotPay"
    } else if(!registeredMethod && payMethod){
        currentResult = currentSalary ? +currentSalary + ekamtahark + socialPay + droshmanish : 0
    } else if(!registeredMethod && !payMethod){
        currentResult = "cleanNotPay"
    }



    function registerPay(){
            setEkamtahark(Math.round(+currentSalary * 0.2))

            if(+currentSalary < 500000){
                setSocialPay(Math.round(+currentSalary * 5 / 100))
            } else if(+currentSalary < 1125000){
                setSocialPay(Math.round(+currentSalary * 10 / 100) - 25000)
            } else{
                setSocialPay(87500)
            }

            switch (true) {
                case +currentSalary <= 100000 && currentSalary!== "" :
                    setDroshmanish(1500)
                    break;
                case +currentSalary <= 200000 && currentSalary!== "" :
                    setDroshmanish(3000)
                    break;
                case +currentSalary <= 500000 && currentSalary!== "" :
                    setDroshmanish(5500)
                    break;
                case +currentSalary <= 1000000 && currentSalary!== "" :
                    setDroshmanish(8500)
                    break;
                case +currentSalary > 1000000 && currentSalary!== "" :
                    setDroshmanish(15000)
                    break;
                default:
                    setDroshmanish(0)

            }
    }

    function cleanPay(){
        let numberSalary = +currentSalary
        let gross;
        let result;
        if (numberSalary !== 0) {
             result = numberSalary;

            if (numberSalary <= 73500) {
                result += 1500;
            } else if (numberSalary <= 147000) {
                result += 3000;
            } else if (numberSalary <= 369500) {
                result += 5500;
            } else if (numberSalary <= 716500) {
                result += 8500;
            } else {
                result += 15000;
            }

            if (numberSalary <= 369500) {
                result += (numberSalary + result) / 0.75 * 0.05;
            } else if (numberSalary <= 797500) {
                result += ((numberSalary + result - 25000) / 0.7 * 0.1) - 25000;
            } else {
                result += 87500;
            }

            result += (numberSalary <= 369500) ? (numberSalary + result) / 0.75 * 0.05 : (numberSalary <= 797500) ? ((numberSalary + result - 25000) / 0.7 * 0.1) - 25000 : 87500;
            result += (numberSalary <= 73500) ? 1500 : (numberSalary <= 147000) ? 3000 : (numberSalary <= 369500) ? 5500 : (numberSalary <= 716500) ? 8500 : 15000;
            result = (result + numberSalary) / 0.8 * 0.2;
        }
        console.log(result)


    }


    useEffect( () => {
        if(registeredMethod && payMethod){
            registerPay()
        } else if(registeredMethod && !payMethod){

        } else if(!registeredMethod && payMethod){
            cleanPay()
        } else if(!registeredMethod && !payMethod){

        }


    },[currentSalary])

    return (
        <section className={s.salaryCalculate}>
            <div className={g.sectionTitle}>
                <h2>Salary Calculation</h2>
            </div>
            <div className={s.calculateBlock}>

                <div className={s.cleanRegisteredBlock}>
                    <div className={(registeredMethod ? s.selectedMethod : "")} onClick={() => setRegisteredMethod(true)}>Գրանցված</div>
                    <div className={(!registeredMethod ? s.selectedMethod : "")} onClick={() => setRegisteredMethod(false)}>Մաքուր</div>
                </div>

                <div className={s.vcharoxBlock}>
                    <div className={(payMethod ? s.selectedMethod : "")} onClick={() => setPayMethod(true)}>Yes</div>
                    <div className={(!payMethod ? s.selectedMethod : "")} onClick={() => setPayMethod(false)}>No</div>
                </div>

                <div className={s.enterSalary}>
                    <input type="number" value={currentSalary} onChange={(e) => {
                        const currentSymbol = e.target.value
                        const regex = /^\d+$/;

                            setCurrentSalary(e.target.value)

                    }}/>
                </div>
                <div className={s.resultWrapper}>
                    <div className={s.resultBlock}>
                        <div>Եկամտահարկ 20% / ՏՏ 10%	</div>
                        <div>{ekamtahark ? ekamtahark : 0}</div>
                    </div>
                    <div className={s.resultBlock}>
                        <div>Սոցիալական վճար</div>
                        <div>{socialPay ? socialPay : 0}</div>
                    </div>
                    <div className={s.resultBlock}>
                        <div>Դրոշմանիշային վճար</div>
                        <div>{droshmanish ? droshmanish : 0}</div>
                    </div>
                    <div className={s.resultBlock}>
                        <div>{registeredMethod ? "Մաքուր մնացորդ" : "Պետք է գրանցել"}</div>
                        <div>{currentResult}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SalaryCalculation;