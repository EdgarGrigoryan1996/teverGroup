import React, { useCallback, useMemo, useState } from 'react';
import g from "../../../globalStyles.module.css";
import s from "./LoanCalculator.module.css"
import {useTranslation} from "react-i18next";

function LoanCalculator(props) {
    const {t} = useTranslation()
    const [money, setMoney] = useState("")
    const [percent, setPercent] = useState("")
    const [month, setMonth] = useState("")
    const [loanList, setLoanList] = useState([])

    const renderTable = useCallback((arr) => {
        return(
            <table className={s.table}>
                <tr>
                    <th>#</th><th>Մայր գումարի մնացորդ</th><th>Տոկոս</th><th>Մայր գումար</th><th>Ընդամենը վճարում</th>
                </tr>
                {arr.map((item,i) => (
                    <tr>
                        <td>{i+1}</td>
                        <td>
                            {item.mnacord} <span>&#x58F;</span>
                        </td>
                        <td>
                        {item.tokos} <span>&#x58F;</span>
                        </td>
                        <td>
                            {item.mayrGumar} <span>&#x58F;</span>
                        </td>
                        <td>
                            {item.marvoxGumar} <span>&#x58F;</span>
                        </td>
                    </tr>
                ))}
            </table>
        )
    }, [loanList])

    const handleCalculate = useCallback(() =>{
        let vark = money
        const result = []

        for(let i = 1; i<= month; i++){
            const calcData = {}
            let tokos = Math.round(vark * (percent / 100) / 12)
            let yndameny = Math.round(money * (percent / 100) / 12 / (1 - 1 / (1 + (percent / 100) / 12) ** month))
            let mayrGumar = Math.round(yndameny - tokos)
            let mnacord = Math.round(vark - mayrGumar)
            calcData.mnacord = mnacord
            calcData.tokos = tokos
            calcData.mayrGumar = mayrGumar
            calcData.marvoxGumar = yndameny
        
            // console.log({vark}, {tokos}, {marvoxGumar}, {mayrGumar})

            result.push(calcData)
            vark = vark - mayrGumar
        }

        setLoanList(result)
    }, [money, percent, month, loanList])
    
    return (
        <section>
            <div className={g.sectionTitle}>
                <h2>{t("menu.resources.subMenu.item4")}</h2>
            </div>

            <div className={s.calculatorBlock}>
                <div className={s.fieldsBlock}>
                    <div className={s.fieldBlock}>
                        <h3>Վարկի գումար</h3>
                        <input type="number" placeholder='Վարկի գումար' value={money} onChange={(e) => {
                            setMoney(e.target.value)
                        }}/>
                    </div>

                    <div className={s.fieldBlock}>
                        <h3>Տարեկան տոկոսադրույք</h3>
                        <input type="number" placeholder='Տարեկան տոկոսադրույք' value={percent} onChange={(e) => {
                            setPercent(e.target.value)
                        }}/>
                    </div>

                    <div className={s.fieldBlock}>
                        <h3>Մարման ժամկետ</h3>
                        <input type="number" placeholder='Մարման ժամկետ' value={month} onChange={(e) => {
                            setMonth(e.target.value)
                        }}/>
                    </div>
                </div>

                <div className={s.showResult} onClick={handleCalculate}>Հաշվել</div>
            </div>




            {!!loanList.length && renderTable(loanList)}
        </section>
    );
}

export default LoanCalculator;