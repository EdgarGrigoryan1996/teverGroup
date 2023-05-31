import React, { useCallback, useMemo, useState } from 'react';
import g from "../../../globalStyles.module.css";
import s from "./LoanCalculator.module.css"
import {useTranslation} from "react-i18next";
import Select from 'react-select';

function LoanCalculator(props) {
    const {t} = useTranslation()
    const [money, setMoney] = useState("")
    const [percent, setPercent] = useState("")
    const [month, setMonth] = useState("")

    const [totalTokos, setTotalTokos] = useState("")
    const [totalMayrGumar, setTotalMayrGumar] = useState("")
    const [totalYndameny, setTotalYndameny] = useState("")

    const [loanList, setLoanList] = useState([])
    const [totalList, setTotalList] = useState({})

    const options = [
        { value: 'year', label: 'Տարի' },
        { value: 'month', label: 'Ամիս' },
    ]

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const renderTable = useCallback((arr,total) => {
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
                
                    <tr>
                        <td></td>
                        <td></td>
                        <td>{total.totalTokos}</td>
                        <td>{total.totalMayrGumar}</td>
                        <td>{total.totalYndameny}</td>
                    </tr>
                
            </table>
        )
    }, [loanList])

    const handleCalculate = useCallback(() =>{
        console.log(selectedOption);
        let toMonth = selectedOption.value === "year" ? month * 12 : month;
        let vark = money

        let totalTokos = 0
        let totalMayrGumar = 0
        let totalYndameny = 0

        const result = []

        for(let i = 1; i<= toMonth; i++){
            
            const calcData = {}
            if(i !== toMonth){
                let tokos = Math.round(vark * (percent / 100) / 12)
                let yndameny = Math.round(money * (percent / 100) / 12 / (1 - 1 / (1 + (percent / 100) / 12) ** toMonth))
                let mayrGumar = Math.round(yndameny - tokos)
                let mnacord = Math.round(vark - mayrGumar)
                calcData.mnacord = mnacord
                calcData.tokos = tokos
                calcData.mayrGumar = mayrGumar
                calcData.marvoxGumar = yndameny

                totalTokos += tokos
                totalMayrGumar += mayrGumar
                totalYndameny += yndameny
            
                result.push(calcData)
                vark = vark - mayrGumar
            } else {
                let tokos = Math.round(vark * (percent / 100) / 12)
                let yndameny = Math.round(money * (percent / 100) / 12 / (1 - 1 / (1 + (percent / 100) / 12) ** toMonth))
                let mayrGumar = Math.round(yndameny - tokos)
                let mnacord = Math.round(vark - mayrGumar)
                yndameny += mnacord
                mayrGumar = mayrGumar + mnacord
                mnacord = 0
                calcData.mnacord = mnacord
                calcData.tokos = tokos
                calcData.mayrGumar = mayrGumar
                calcData.marvoxGumar = yndameny

                totalTokos += tokos
                totalMayrGumar += mayrGumar
                totalYndameny += yndameny
            
                result.push(calcData)
                vark = vark - mayrGumar
            }
            
        }
        

        setLoanList(result)
        setTotalList({
            totalTokos,
            totalMayrGumar,
            totalYndameny
        })
    }, [money, percent, month, loanList,selectedOption])
    
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
                        <div className={s.montBlock}>
                            <input type="number" placeholder='Մարման ժամկետ' value={month} onChange={(e) => {
                                    setMonth(e.target.value)
                                }}
                            />
                            <Select 
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                styles={{
                                    control: (baseStyles, state) => ({
                                      ...baseStyles,
                                      marginTop:10
                                    }),
                                  }}
                            />
                        </div>
                    </div>
                </div>

                <div className={s.showResult} onClick={handleCalculate}>Հաշվել</div>
            </div>




            {!!loanList.length && renderTable(loanList,totalList)}
        </section>
    );
}

export default LoanCalculator;