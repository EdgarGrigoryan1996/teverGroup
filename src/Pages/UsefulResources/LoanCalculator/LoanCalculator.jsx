import React, {useCallback, useEffect, useState} from 'react';
import g from "../../../globalStyles.module.css";
import s from "./LoanCalculator.module.css"
import {useTranslation} from "react-i18next";
import Select from 'react-select';
import {getSelectedOptionIndex} from "../../../components/EmailSendMethods/helpFunctions/getSelectedOptionIndex";

function LoanCalculator() {
    const {t} = useTranslation()
    const [money, setMoney] = useState("")
    const [percent, setPercent] = useState("")
    const [month, setMonth] = useState("")

    const [loanList, setLoanList] = useState([])
    const [totalList, setTotalList] = useState({})

    const options = [
        { value: 'year', label: t("loan.year") },
        { value: 'month', label: t("loan.month") },
    ]

    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [err, setErr] = useState(null)
    const [calculateErr, setCalculateErr] = useState(null)

    useEffect(() => {

        const selectedValue = selectedOption.value;

        let index = getSelectedOptionIndex(options,selectedValue);

        setSelectedOption(options[index])
    },[window.localStorage.lng,t])
    useEffect(() => {
        setMonth("")
        setErr(null)
    },[selectedOption])

    const renderTable = useCallback((arr,total) => {
        return(
            <table className={s.table}>
                <tr>
                    <th>#</th><th>{t("loan.mayrGumarMnacord")}</th><th>{t("loan.tokos")}</th><th>{t("loan.mayrGumar")}</th><th>{t("loan.yndamenyVchar")}</th>
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
                        <td colSpan={2}>{t("loan.yndameny")}</td>
                        <td>{new Intl.NumberFormat("am-AM").format(+total.totalTokos)}</td>
                        <td>{new Intl.NumberFormat("am-AM").format(+total.totalMayrGumar)}</td>
                        <td>{new Intl.NumberFormat("am-AM").format(+total.totalYndameny)}</td>
                    </tr>
                
            </table>
        )
    }, [loanList])

    const handleCalculate = useCallback(() =>{
        if(money !== "" && percent !== "" && month !== ""){
            setCalculateErr(null)
            let toMonth = selectedOption.value === "year" ? month * 12 : +month;
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
        } else {
            setCalculateErr(t("loan.calculateErr"))
        }

    }, [money, percent, month, loanList,selectedOption])

    const styles = {
        valueContainer: (css, state) => ({ ...css,
            input: { "height": 0 }
        })
    }
    
    return (
        <section>
            <div className={g.sectionTitle}>
                <h2>{t("menu.resources.subMenu.item4")}</h2>
            </div>

            <div className={s.calculatorBlock}>
                <div className={s.fieldsBlock}>
                    <div className={s.fieldBlock}>
                        <h3>{t("loan.loanAmount")}</h3>
                        <input type="number" placeholder={t("loan.loanAmount")} value={money} onChange={(e) => {
                            setMoney(e.target.value)
                        }}/>
                    </div>

                    <div className={s.fieldBlock}>
                        <h3>{t("loan.rate")}</h3>
                        <input type="number" placeholder={t("loan.rate") + " (0 - 100)%"} min={0} max={100} value={percent} onChange={(e) => {
                            if(+e.target.value <=100){
                                setPercent(e.target.value)
                            }

                        }}/>
                    </div>

                    <div className={s.fieldBlock}>
                        <h3>{t("loan.term")}</h3>
                        <div className={s.monthBlock}>
                            <input type="text" placeholder={t("loan.term")} min={1}  value={month} onChange={(e) => {
                                if(e.target.value > 0 || e.target.value === ""){
                                    let currentSymbol = e.target.value
                                    currentSymbol = currentSymbol.split("")
                                    currentSymbol = currentSymbol[currentSymbol.length-1]

                                    let reg = new RegExp('^[0-9]+$');
                                    if(selectedOption.value === "year"){
                                        if(reg.test(currentSymbol) || currentSymbol === undefined) {
                                            if(+e.target.value <= 20){
                                                setErr(null)
                                                setMonth(e.target.value)
                                            } else {
                                                setErr(t("loan.yearInfo"))
                                            }
                                        }
                                    } else {
                                        if(reg.test(currentSymbol) || currentSymbol === undefined) {
                                            if(+e.target.value <= 240){
                                                setErr(null)
                                                setMonth(e.target.value)
                                            } else {
                                                setErr(t("loan.monthInfo"))
                                            }
                                        }
                                    }
                                }

                                }}
                            />
                            {err && <div className={s.err}>{err}</div>}
                            <Select 
                                value={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                styles={{
                                    ...styles,
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        borderColor: state.isFocused ? 'var(--second-color)' : 'var(--grey-color)',
                                        outline:"none",
                                        padding:"5px",
                                        marginTop:"10px",
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
                        </div>
                    </div>
                </div>
                {calculateErr && <div className={s.err}>{calculateErr}</div>}
                <div className={s.showResult} onClick={handleCalculate}>{t("loan.calculate")}</div>
            </div>


            {!!loanList.length && renderTable(loanList,totalList)}
        </section>
    );
}

export default LoanCalculator;