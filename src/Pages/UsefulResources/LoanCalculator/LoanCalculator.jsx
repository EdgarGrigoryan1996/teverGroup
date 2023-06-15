import React, { useCallback, useMemo, useState } from 'react';
import g from "../../../globalStyles.module.css";
import s from "./LoanCalculator.module.css"
import {useTranslation} from "react-i18next";
import Select from 'react-select';

function LoanCalculator() {
    const {t} = useTranslation()
    const [money, setMoney] = useState("")
    const [percent, setPercent] = useState("")
    const [month, setMonth] = useState("")

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
                            {new Intl.NumberFormat("am-AM").format(+item.mnacord)}
                        </td>
                        <td>
                        {new Intl.NumberFormat("am-AM").format(+item.tokos)}
                        </td>
                        <td>
                            {new Intl.NumberFormat("am-AM").format(+item.mayrGumar)}
                        </td>
                        <td>
                            {new Intl.NumberFormat("am-AM").format(+item.marvoxGumar)}
                        </td>
                    </tr>
                ))}
                
                    <tr>
                        <td colSpan={2}>Ընդամենը</td>
                        <td>{new Intl.NumberFormat("am-AM").format(+total.totalTokos)}</td>
                        <td>{new Intl.NumberFormat("am-AM").format(+total.totalMayrGumar)}</td>
                        <td>{new Intl.NumberFormat("am-AM").format(+total.totalYndameny)}</td>
                    </tr>
                
            </table>
        )
    }, [loanList])

    const handleCalculate = useCallback(() =>{
        let toMonth = selectedOption.value === "year" ? month * 12 : +month;
        let vark = money
        console.log(toMonth);
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
                        <input type="number" placeholder='Տարեկան տոկոսադրույք (0 - 100)' min={0} max={100} value={percent} onChange={(e) => {
                            if(+e.target.value <=100){
                                setPercent(e.target.value)
                            }

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