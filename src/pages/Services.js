import Cards from './sections/Cards';
import Cta from './sections/Cta';

function Partners() {
  return (
    <>
      <div className="document">
        <div className="banner" style={{ marginBottom: "0px" }}>
          {/* <h1>Explore tools with our subscriptions.</h1> */}
          <h1>Discover Our Future Offerings</h1>
        </div>
        <Cards
          cards={[
            {
              h1: "AI Tools",
              url: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=270&h=180&dpr=1"
            },
            {
              h1: "Online Editors",
              url: "https://images.pexels.com/photos/17136623/pexels-photo-17136623/free-photo-of-a-computer-and-modern-devices-on-the-desk.jpeg?auto=compress&cs=tinysrgb&w=270&h=180&dpr=1"
            },
            {
              h1: "Entertainment",
              url: "https://images.pexels.com/photos/4144039/pexels-photo-4144039.jpeg?auto=compress&cs=tinysrgb&w=270&h=180&dpr=1"
            }
            ]}/>
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