import './App.css';

import {useTranslation} from "react-i18next";
import TopInformationSection from './components/TopInformationSection/TopInformationSection';
import Menu from './components/Menu/Menu';

import Home from "./Pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import AboutCompany from "./Pages/Company/AboutCompany/AboutCompany";
import Partners from "./Pages/Company/Partners/Partners";
import Staff from "./Pages/Company/Staff/Staff";
import Links from "./Pages/UsefulResources/Links/Links";
import SalaryCalculation from "./Pages/UsefulResources/SalaryCalculation/SalaryCalculation";
import Standards from "./Pages/UsefulResources/Standards/Standards";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import LoanCalculator from "./Pages/UsefulResources/LoanCalculator/LoanCalculator";
import ServicePagesTemplate from "./components/Templates/ServicePagesTemplate";
import aboutImage from "./assets/images/about.webp"
import accountingImg from "./assets/images/services/accounting.webp"
import taxImg from "./assets/images/services/tax.webp"
import planningImg from "./assets/images/services/planning.webp"
import trainingsImg from "./assets/images/services/trainings.webp"
import hrImg from "./assets/images/services/hr.webp"
import WithScrollTop from "./HOC/WithScrollTop";
import EmailSendMethods from "./components/EmailSendMethods/EmailSendMethods";
import {useEffect, useState} from "react";

function App() {
  const {t} = useTranslation()
    const aboutPageData = {
        "title": t("company.about.title"),
        "description": t("company.about.description")
    }
    const servicePagesData = {
        "accounting": {
            "title": t("accounting.title"),
            "description":t("accounting.description"),
            "description2":t("accounting.description2"),
            "offer":t("accounting.offer"),
            "items":[
                {
                    "item": t("accounting.items.item1"),
                },
                {
                    "item": t("accounting.items.item2"),
                },
                {
                    "item": t("accounting.items.item3"),
                },
                {
                    "item": t("accounting.items.item4")
                }
            ]
        },
        "tax": {
            "title":  t("tax.title"),
            "description":t("tax.description"),
            "description2":t("tax.description2"),
            "description3":t("tax.description3"),
            "offer":t("tax.offer"),
            "items": [
                {
                    "item": t("tax.items.item1"),
                },
                {
                    "item": t("tax.items.item2"),
                },
                {
                    "item": t("tax.items.item3"),
                },
            ]
        },
        "planning": {
            "title":  t("planning.title"),
            "description":t("planning.description"),
            "description2":t("planning.description2"),
            "description3":t("planning.description3"),
            "offer":t("planning.offer"),
            "items": [
                {
                    "item": t("planning.items.item1"),
                },
                {
                    "item": t("planning.items.item2"),
                },
            ]
        },
        "hr": {
            "title":  t("hr.title"),
            "description":t("hr.description"),
            "offer":t("hr.offer"),
            "items": [
                {
                    "item": t("hr.items.item1"),
                },
                {
                    "item": t("hr.items.item2"),
                },
                {
                    "item": t("hr.items.item3"),
                },
            ]
        },
        "trainings": {
            "title":  t("trainings.title"),
            "items": [
                {
                    "item": t("trainings.items.item1"),
                },
                {
                    "item": t("trainings.items.item2"),
                },
                {
                    "item": t("trainings.items.item3"),
                },
            ]
        }
    }
    const [montserat, setMontserat] = useState(false)
    useEffect(() => {
        if(localStorage.getItem("lng") === "en"){
            setMontserat(true)
        } else {
            setMontserat(false)
        }
    },[window.localStorage.lng])

  return (
    <div className={montserat ? "App" + " " + "montserat" : "App"}>
        <TopInformationSection />
        <Menu />
        <div className='content'>
        <Routes>
                    <Route path={"/"} element={<Home />}/>
                    <Route path={"/about"} element={<ServicePagesTemplate data={aboutPageData} image={aboutImage} />}/>
                    <Route path={"/partners"} element={<WithScrollTop Child={Partners} /> }/>
                    <Route path={"/staff"} element={<WithScrollTop Child={Staff} />}/>
                    <Route path={"/businessConsulting"} element={<ServicePagesTemplate data={servicePagesData.planning} image={planningImg}/>}/>
                    {/*<Route path={"/consultancyAccounting"} element={<ConsultancyAccounting />}/>*/}
                    <Route path={"/consultancyTax"} element={<ServicePagesTemplate data={servicePagesData.tax} image={taxImg}/>}/>
                    <Route path={"/courses"} element={<ServicePagesTemplate data={servicePagesData.trainings} image={trainingsImg}/>}/>
                    <Route path={"/hr"} element={<ServicePagesTemplate data={servicePagesData.hr} image={hrImg}/>}/>
                    <Route path={"/management"} element={<ServicePagesTemplate data={servicePagesData.accounting} image={accountingImg}/>}/>
                    <Route path={"/price"} element={<WithScrollTop Child={EmailSendMethods} />}/>
                    <Route path={"/links"} element={<WithScrollTop Child={Links} />}/>
                    <Route path={"/salaryCalculation"} element={<WithScrollTop Child={SalaryCalculation} />}/>
                    <Route path={"/loanCalculation"} element={<WithScrollTop Child={LoanCalculator} />}/>
                    <Route path={"/standards"} element={<WithScrollTop Child={Standards} />} />
                    <Route path={"*"} element={<WithScrollTop Child={NotFound} />}/>
                </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
