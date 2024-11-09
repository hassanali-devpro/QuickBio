import AboutCard from "./AboutCard"
import WhoWeAre from "./whoWeAre"
import Vission from "./Vission"
import Strategy from "./Strategy"
import FAQ from "../home/FAQ"
import Header from "../common/header/Header"


const About = () => {
  const aboutUs = {
    title: "Who We Are?",
    description: "A leader in agri-food safety, veterinary and human health diagnostics, is committed to revolutionizing industry standards with advanced rapid strip test kits and strategic technology transfer alliances. Our dedication to quality, precision and innovation drives us to redefine diagnostics across multiple industries. We envision a world where our innovative technologies empower industries to safeguard public health and well-being."
  };
  const whyUs = {
    title: true,
    description: "QuickBio is at the forefront of technological advancements in diagnostics. Our commitment to innovation is reflected in our state-of-the-art manufacturing facilities, cutting-edge R&D centers, and the continuous development of advanced diagnostic products. We invest in the latest technologies, ensuring that our customers receive the most accurate, reliable, and efficient diagnostic solutions available."
  };

  return (
    <>
      <Header bgColor="bg-[#226F6B]" heroText="Who We Are?" />
      <WhoWeAre title={aboutUs.title} description={aboutUs.description} />
      <Vission />
      <Strategy />
      <WhoWeAre title={whyUs.title} description={whyUs.description} />
      <AboutCard />
      <FAQ />
    </>
  );
};

export default About;

