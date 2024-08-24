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

function App() {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Opening />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Pricing" element={<Pricing more={true} />} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Terms-of-use" element={<Terms />} />
          <Route path="/About-us" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Rules" element={<Rules />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;