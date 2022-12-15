import About from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/Contact";
import FunFacts from "../src/components/FunFacts";
import HeroSlider from "../src/components/HeroSlider";
import RoadMapSlider from "../src/components/RoadMapStep";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import Team from "../src/components/Team";

const Index = () => {
  return (
    <Layout pageTitle={"Home"}>
      {/* Home Section */}
      <HeroSlider />
      {/* !Home Section */}
      {/* Fun Facts */}
      {/* <FunFacts /> */}
      {/* !Fun Facts */}
      {/* About Section */}
      <About />
      {/* !About Section */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Collection Section */}
      <Collection />
      {/* !Collection Section */}
      {/* Section Divider */}
      <SectionDivider />
      <Team />
      {/* !Section Divider */}
      {/* Section RoadMap */}
      {/* <RoadMapSlider /> */}
      {/* !Section RoadMap */}
      {/* Section Divider */}
      {/* <SectionDivider /> */}
      {/* !Section Divider */}
      {/* Section News */}
      {/* <News /> */}
      {/* !Section News */}
      {/* Section Divider */}
      {/* <SectionDivider /> */}
      {/* !Section Divider */}
      {/* Section */}
      {/* <Contact /> */}
    </Layout>
  );
};
export default Index;
