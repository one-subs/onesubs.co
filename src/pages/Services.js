import { Helmet } from "react-helmet";
import Cta from './components/Cta';

function Partners() {
  return (
    <>
      <Helmet>
          <title>Services</title>
          <meta name="description" content="Discover Our Offerings" />
          <link rel="canonical" href={`${process.env.REACT_APP_ONESUBS}/services`} />
      </Helmet>
      <div className="document">
        <div className="hat">
          {/* <h1>Explore tools with our subscriptions.</h1> */}
          <h1>What Services to Expect?</h1>
        </div>
            <p>We are actively seeking to partner with leading online service providers across various industries. Here are some examples of the types of partners we are targeting:</p>
            <p>• <b>Creative Platforms:</b> Industry leaders in graphic design, video editing, and music production.</p>
            <p>• <b>Educational Services:</b> Renowned online learning platforms, digital libraries, and academic resources.</p>
            <p>• <b>Productivity Providers:</b> Top project management tools, office software, and cloud services.</p>
            <p>• <b>Data Research Firms:</b> Cutting-edge data analysis, survey tools, and market intelligence platforms.</p>
            <p>• <b>Media and entertainment:</b> Media channels, music applications, and streaming portals.</p>
            <h2>Stay Updated</h2>
            <p>While we finalize our partnerships, we invite you to stay updated with our progress. Sign up for our newsletter to receive the latest news on our partner additions and be the first to know when new services become available.</p>
            <h2>Join Us on Our Journey</h2>
            <p style={{ marginBottom: "50px" }}>We are excited about the future and the value we will bring to our users. As we grow, your feedback and support are invaluable to us. Together, we will build a platform that simplifies and enhances your online experience.</p>
        <Cta/>
      </div>
    </>
  );
}

export default Partners;