import React, { useCallback, useMemo, useState } from 'react';
import g from "../../../globalStyles.module.css";
import s from "./LoanCalculator.module.css"
import {useTranslation} from "react-i18next";

function LoanCalculator(props) {
    const {t} = useTranslation()
    const [money, setMoney] = useState(null)
    const [percent, setPercent] = useState(null)
    const [month, setMonth] = useState(null)
    const [loanList, setLoanList] = useState([])

    const renderTable = useCallback((arr) => {
        return(
            <table>
                <tr>
                    <th>MayrGumarMnacord</th><th>Tokos</th><th>Mayr Gumar</th><th>Yndameny</th>
                </tr>
                {arr.map(item => (
                    <tr>
                        <td>
                        {item.tokos}
                        </td>
                        <td>
                            {item.mayrGumar}
                        </td>
                        <td>
                            {item.marvoxGumar}
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
            let tokos = vark * (percent / 100) / 12
            let marvoxGumar = vark * tokos / (1 - 1 / (1 + tokos) ** month)

            const mayrGumar = marvoxGumar - tokos
            vark -= marvoxGumar
            calcData.tokos = 10000
            calcData.mayrGumar = 564546 
            calcData.marvoxGumar = 546848946
        
            // console.log({vark}, {tokos}, {marvoxGumar}, {mayrGumar})

            result.push(calcData)    
        }

        setLoanList(result)
    }, [money, percent, month, loanList])
    
    return (
        <section>
            <div className={g.sectionTitle}>
                <h2>{t("menu.resources.subMenu.item4")}</h2>
            </div>

            <div className={s.calculatorBlock}>
                <div><input type="number" placeholder='Money' value={money} onChange={(e) => {
                    setMoney(e.target.value)
                }}/></div>
            </div>

            <div className={s.calculatorBlock}>
                <div><input type="number" placeholder='Percent' value={percent} onChange={(e) => {
                    setPercent(e.target.value)
                }}/></div>
            </div>

            <div className={s.calculatorBlock}>
                <div><input type="number" placeholder='Month' value={month} onChange={(e) => {
                    setMonth(e.target.value)
                }}/></div>
            </div>
            <div className={s.showResult} onClick={handleCalculate}>Hashvel</div>

            {!!loanList.length && renderTable(loanList)}
        </section>
    );
}

export default LoanCalculator;