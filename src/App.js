import './App.css';

import {useTranslation} from "react-i18next";
import TopInformationSection from './components/TopInformationSection/TopInformationSection';
import Menu from './components/Menu/Menu';
import Header from "./components/Header/Header";
import Industries from "./components/Industries/Industries";
import HeartbeatMiniSection from "./components/HeartbeatMiniSection/HeartbeatMiniSection";
import Home from "./Pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutCompany from "./Pages/Company/AboutCompany/AboutCompany";
import Partners from "./Pages/Company/Partners/Partners";
import Staff from "./Pages/Company/Staff/Staff";
import BusinessConsulting from "./Pages/Services/BusinessConsulting/BusinessConsulting";
import ConsultancyAccounting from "./Pages/Services/ConsultancyAccounting/ConsultancyAccounting";
import ConsultancyTax from "./Pages/Services/ConsultancyTax/ConsultancyTax";
import Courses from "./Pages/Services/Courses/Courses";
import Hr from "./Pages/Services/Hr/Hr";
import Accounting from "./Pages/Services/Accounting/Accounting";
import Links from "./Pages/UsefulResources/Links/Links";
import SalaryCalculation from "./Pages/UsefulResources/SalaryCalculation/SalaryCalculation";
import Standards from "./Pages/UsefulResources/Standards/Standards";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import LoanCalculator from "./Pages/UsefulResources/LoanCalculator/LoanCalculator";
import ServicePagesTemplate from "./components/Templates/ServicePagesTemplate";
import accountingImg from "./assets/images/services/accounting.jpg"
import taxImg from "./assets/images/services/tax.jpg"
import planningImg from "./assets/images/services/planning.jpg"
import trainingsImg from "./assets/images/services/trainings.jpg"
import hrImg from "./assets/images/services/hr.jpg"



function App() {
  const {t,i18n} = useTranslation()

    const servicePagesData = {
        "accounting": {
            "title": t("accounting.title"),
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
            "items": [
                {
                    "item": t("hr.items.item1"),
                },
                {
                    "item": t("hr.items.item2"),
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

  return (
    <div className="App">

        <TopInformationSection />
        <Menu />

        
    <div className='content'>
    <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/about"} element={<AboutCompany />}/>
                <Route path={"/partners"} element={<Partners />}/>
                <Route path={"/staff"} element={<Staff />}/>
                <Route path={"/businessConsulting"} element={<ServicePagesTemplate data={servicePagesData.planning} image={planningImg}/>}/>
                <Route path={"/consultancyAccounting"} element={<ConsultancyAccounting />}/>
                <Route path={"/consultancyTax"} element={<ServicePagesTemplate data={servicePagesData.tax} image={taxImg}/>}/>
                <Route path={"/courses"} element={<ServicePagesTemplate data={servicePagesData.trainings} image={trainingsImg}/>}/>
                <Route path={"/hr"} element={<ServicePagesTemplate data={servicePagesData.hr} image={hrImg}/>}/>
                <Route path={"/management"} element={<ServicePagesTemplate data={servicePagesData.accounting} image={accountingImg}/>}/>
                <Route path={"/links"} element={<Links />}/>
                <Route path={"/salaryCalculation"} element={<SalaryCalculation />}/>
                <Route path={"/loanCalculation"} element={<LoanCalculator />}/>
                <Route path={"/standards"} element={<Standards />}/>
                <Route path={"*"} element={<NotFound />}/>
            </Routes>
            <Footer />
    </div>
            
            
    </div>
  );
}

export default App;
