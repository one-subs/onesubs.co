import { Helmet } from "react-helmet";
import Landing from './components/Landing';
import Description from './components/Description';
import Cta from './components/Cta';
import Pricing from './components/Pricing';
import BusinessCta from './components/BusinessCta';

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
      <Pricing bottom={"200px"}/>
      <BusinessCta/>
    </>
  );
}

export default Opening;
