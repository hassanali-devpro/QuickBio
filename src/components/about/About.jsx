import AboutCard from "./AboutCard"
import WhoWeAre from "./whoWeAre"
import Vission from "./Vission"
import Strategy from "./Strategy"
import Distribution from "./Distribution"
import QA from "./QA"
import FAQ from "../home/FAQ"
import Header from "../common/header/Header"


const About = () => {
  const aboutUs = {
    title: "Who We Are",
    description: "QuickBio USA Inc. is a high-tech enterprise specializing in food safety and animal disease diagnostics. Since its inception, QuickBio has invested in new technologies and innovations. We offer cutting-edge rapid diagnostic test kits for the dairy, food, feed, and veterinary sectors."
  };
  const whyUs = {
    title: true,
    description: "At QuickBio, we provide a suite of diagnostic solutions tailored to various industries. Our agship brands—LactoQuick, FoodQuick, FeedQuick, VetQuick, and MicroQuick—are at the forefront of innovation, delivering rapid and reliable results that set new standards."
  };
  const Qa = {
    title: "QUALITY ASSURANCE & CERTIFICATIONS",
    description: "At QUICKBIO USA, quality is paramount. We adhere to the highest industry standards, ensuring our products meet rigorous regulatory requirements for accuracy and reliability. Our commitment to innovation drives the development of new diagnostic platforms"
  };

  return (
    <>
      <Header bgColor="bg-[#9357A4]" heroText="Who We Are" />
      <WhoWeAre title={aboutUs.title} description={aboutUs.description} />
      <Vission />
      <Strategy />
      <WhoWeAre title={whyUs.title} description={whyUs.description} />
      <Distribution />
      <WhoWeAre title={Qa.title} description={Qa.description} />
      <QA />
      <AboutCard />
      <FAQ />
    </>
  );
};

export default About;

