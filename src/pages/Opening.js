import React from 'react';
import Landing from './sections/Landing';
import Description from './sections/Description';
import Pricing from './Pricing';
import Cta from './sections/Cta';
import Business from './sections/Business';

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