import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './pages/components/Navigation';
import Footer from './pages/components/Footer';

import Loading from './pages/Loading';

const Opening = React.lazy(() => import('./pages/Opening'));
const Business = React.lazy(() => import('./pages/Business'));
const Services = React.lazy(() => import('./pages/Services'));

const Terms = React.lazy(() => import('./pages/Terms'));
const Rules = React.lazy(() => import('./pages/Rules'));
const Requirements = React.lazy(() => import('./pages/Requirements'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contacts'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Refund = React.lazy(() => import('./pages/Refund'));

const Users = React.lazy(() => import('./users/Users'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<><Navigation /><Opening /></>} />
          <Route path="/Business" element={<><Navigation /><Business /></>} />
          <Route path="/Services" element={<><Navigation /><Services /></>} />

          <Route path="/Terms-of-use" element={<><Navigation /><Terms /></>} />
          <Route path="/About-us" element={<><Navigation /><About /></>} />
          <Route path="/Contact" element={<><Navigation /><Contact /></>} />
          <Route path="/Business-rules" element={<><Navigation /><Rules /></>} />
          <Route path="/Business-requirements" element={<><Navigation /><Requirements /></>} />
          <Route path="/Privacy-policy" element={<><Navigation /><Privacy /></>} />
          <Route path="/Refund-policy" element={<><Navigation /><Refund /></>} />
          <Route path="/Account/*" element={<Users />} />

        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
