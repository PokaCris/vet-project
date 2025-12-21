import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import DoctorInfo from './pages/DoctorInfo/DoctorInfo';
import Contacts from './pages/Contacts';
import PriceClinic from './pages/PriceClinic';
import About from './pages/AboutPage';
import Articles from './components/Articles/Articles';
import PersonalPage from './pages/PersonalPage';

// AllServices
import TherapyDetails from './pages/AllServices/TherapyDetails';
import DiagnosticsDetails from './pages/AllServices/DiagnosticsDetails';
import VaccinAnestDetails from './pages/AllServices/VaccinAnestDetails';
import CastrationDetails from './pages/AllServices/CastrationDetails';
import SurgeryDetails from './pages/AllServices/SurgeryDetails';
import DentistryDetails from './pages/AllServices/DentistryDetails';
import DermatologyDetails from './pages/AllServices/DermatologyDetails';
import OphthalmologyDetails from './pages/AllServices/OphthalmologyDetails';
import LaboratoryDetails from './pages/AllServices/LaboratoryDetails';

// Consents
import PrivacyPolicyPage from './pages/AllConsents/PrivacyPolicyPage';
import PersonalDataPolicyPage from './pages/AllConsents/PersonalDataPolicyPage';

// Others
import NotFound from './pages/NotFound404';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollPagesUp from './components/ScrollPagesUp/ScrollPagesUp';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollPagesUp />

      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<Services />} />
          <Route path="/price-clinic" element={<PriceClinic />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorInfo />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />

          <Route path="/personal-page" element={<PersonalPage />} />

          <Route path="/services/therapy" element={<TherapyDetails />} />
          <Route path="/services/diagnostics" element={<DiagnosticsDetails />} />
          <Route path="/services/vaccination-anesthesia" element={<VaccinAnestDetails />} />
          <Route path="/services/castration" element={<CastrationDetails />} />
          <Route path="/services/surgery" element={<SurgeryDetails />} />
          <Route path="/services/dentistry" element={<DentistryDetails />} />
          <Route path="/services/dermatology" element={<DermatologyDetails />} />
          <Route path="/services/ophthalmology" element={<OphthalmologyDetails />} />
          <Route path="/services/laboratory" element={<LaboratoryDetails />} />

          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/personal-data-policy" element={<PersonalDataPolicyPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <ScrollToTop />
      </main>
      <Footer />
    </Router>
  );
}

export default App;