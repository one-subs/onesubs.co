import React from 'react';
import { Helmet } from "react-helmet";
import Landing from './components/Landing';
import Description from './components/Description';
import Pricing from './Pricing';
import Cta from './components/Cta';
import Business from './components/Business';

function Opening() {
  return (
    <>
      <Helmet>
          <title>OneSubs</title>
          <meta name="description" content="All-in-one subscription for premium services." />
          <link rel="canonical" href={`${process.env.REACT_APP_ONESUBS}/`} />
      </Helmet>
      <Landing/>
      <Description/>
      <Cta/>
      <Pricing/>
      <Business/>
    </>
  );
}

export default Opening;