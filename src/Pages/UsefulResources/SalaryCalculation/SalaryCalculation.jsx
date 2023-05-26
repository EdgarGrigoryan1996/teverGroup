import React, { useState } from 'react';
import s from "./SalaryCalculation.module.css"
import g from "../../../globalStyles.module.css"
function SalaryCalculation(props) {
    const [registeredMethod, setRegisteredMethod] = useState(true)
    const [payMethod, setPayMethod] = useState(true)
    const [currentSalary, setCurrentSalary] = useState(0)

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
                    <input type="text" value={currentSalary} onChange={(e) => {
                        const currentSymbol = e.target.value
                        const regex = /^\d+$/;
                        if(currentSymbol.match(regex)){
                            setCurrentSalary(e.target.value)
                        }
                    }}/>
                </div>
                <div className={s.resultWrapper}>
                    <div className={s.resultBlock}>
                        <div>Եկամտահարկ 20% / ՏՏ 10%	</div>
                        <div>{currentSalary}</div>
                    </div>
                    <div className={s.resultBlock}>
                        <div>Սոցիալական վճար</div>
                        <div>{currentSalary}</div>
                    </div>
                    <div className={s.resultBlock}>
                        <div>Դրոշմանիշային վճար</div>
                        <div>{currentSalary}</div>
                    </div>
                    <div className={s.resultBlock}>
                        <div>Պետք է գրանցել</div>
                        <div>{currentSalary}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SalaryCalculation;