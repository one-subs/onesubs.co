import React from 'react';
import Landing from './components/Landing';
import Description from './components/Description';
import Pricing from './Pricing';
import Cta from './components/Cta';
import Business from './components/Business';

function Opening() {
  return (
    <>
      <Landing/>
      <Description/>
      <Cta/>
      <Pricing/>
      <Business/>
    </>
  );
}

export default Opening;