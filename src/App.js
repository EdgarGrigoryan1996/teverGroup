import './App.css';

import {useTranslation} from "react-i18next";
import TopInformationSection from './components/TopInformationSection/TopInformationSection';
import Menu from './components/Menu/Menu';

function App() {
  const {t,i18n} = useTranslation()
  return (
    <div className="App">
      <TopInformationSection />
      <Menu />
    </div>
  );
}

export default App;
