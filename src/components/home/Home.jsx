import Header from "../common/header/Header"
import Hblog from "../Products/Hblog"
import FAQ from "./FAQ"
import WhoWeAre from "../about/whoWeAre"
import AboutCard from "../about/AboutCard"
import QA from "../about/QA"


const Home = () => {
  const aboutUs = {
    title: "Who We Are?",
    description: "QuickBio USA Inc. is a high-tech enterprise specializing in food safety and animal disease diagnostics. Since its inception, QuickBio has invested in new technologies and innovations. We offer cutting-edge rapid diagnostic test kits for the dairy, food, feed, and veterinary sectors."
  };
  const whyUs = {
    title: true,
    description: "At QuickBio, we provide a suite of diagnostic solutions tailored to various industries. Our agship brands—LactoQuick, FoodQuick, FeedQuick, VetQuick, and MicroQuick—are at the forefront of innovation, delivering rapid and reliable results that set new standards."
  };
  return (
    <>
      <Header bgColor="bg-[#99BCC2]" heroText="Shaping the future of diagnostics"/>
      <WhoWeAre title={aboutUs.title} description={aboutUs.description} />
      <Hblog isShow={true} />
      <WhoWeAre title={whyUs.title} description={whyUs.description} />
      <QA />
      <AboutCard />
      <FAQ />
    </>
  )
}

export default Home
