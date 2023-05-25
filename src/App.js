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
import Management from "./Pages/Services/Management/Management";
import Links from "./Pages/UsefulResources/Links/Links";
import SalaryCalculation from "./Pages/UsefulResources/SalaryCalculation/SalaryCalculation";
import Standards from "./Pages/UsefulResources/Standards/Standards";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
  const {t,i18n} = useTranslation()
  return (
    <div className="App">
      <div className={"fixed"}>
        <TopInformationSection />
        <Menu />
      </div>
        
    <div className='content'>
    <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/about"} element={<AboutCompany />}/>
                <Route path={"/partners"} element={<Partners />}/>
                <Route path={"/staff"} element={<Staff />}/>
                <Route path={"/businessConsulting"} element={<BusinessConsulting />}/>
                <Route path={"/consultancyAccounting"} element={<ConsultancyAccounting />}/>
                <Route path={"/consultancyTax"} element={<ConsultancyTax />}/>
                <Route path={"/courses"} element={<Courses />}/>
                <Route path={"/hr"} element={<Hr />}/>
                <Route path={"/management"} element={<Management />}/>
                <Route path={"/links"} element={<Links />}/>
                <Route path={"/salaryCalculation"} element={<SalaryCalculation />}/>
                <Route path={"/standards"} element={<Standards />}/>
                <Route path={"*"} element={<NotFound />}/>
            </Routes>
            <Footer />
    </div>
            
            
    </div>
  );
}

export default App;
