import React, { Suspense } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './pages/Navigation';
import Footer from './pages/Footer';
import Loading from './pages/Loading';
import NotFound from './pages/NotFound';

// Lazy load components
const Opening = React.lazy(() => import('./pages/Opening'));
const Business = React.lazy(() => import('./pages/Business'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Overview = React.lazy(() => import('./pages/Overview'));
const Services = React.lazy(() => import('./pages/Services'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Rules = React.lazy(() => import('./pages/Rules'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Privacy = React.lazy(() => import('./pages/Privacy'));

const Users = React.lazy(() => import('./users/Users'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<><Navigation /><Opening /></>} />
          <Route path="/Business" element={<><Navigation /><Business /></>} />
          <Route path="/Pricing" element={<><Navigation /><Pricing more={true} /></>} />
          <Route path="/Overview" element={<><Navigation /><Overview /></>} />
          <Route path="/Services" element={<><Navigation /><Services /></>} />
          <Route path="/Terms-of-use" element={<><Navigation /><Terms /></>} />
          <Route path="/About-us" element={<><Navigation /><About /></>} />
          <Route path="/Contact" element={<><Navigation /><Contact /></>} />
          <Route path="/Rules" element={<><Navigation /><Rules /></>} />
          <Route path="/Privacy-policy" element={<><Navigation /><Privacy /></>} />
          <Route path="/Account/*" element={<Users />} />
          <Route path="*" element={<><Navigation /><NotFound /></>} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;