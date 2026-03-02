import AboutBanner from "@/Components/About/AboutBanner";
import CoreValues from "@/Components/About/CoreValues";
import Services from "@/Components/About/Services";
import AboutData from "@/Components/About/AboutData";
import { AboutUsData } from "@/constant/AboutUs";
import OurTeam from "@/Components/About/OurTeam";
import MissionBrief from "@/Components/About/MissionBrief";

const AboutPageComponent = () => {
  return (
    <>
      <AboutBanner />
      <AboutData /> {/* Who We Are, Mission, Vision */}
      <Services servicelist={AboutUsData?.services} /> {/* What We Do */}
      <MissionBrief steps={AboutUsData?.missionBrief} /> {/* Our Approach */}
      <OurTeam team={AboutUsData?.team} /> {/* Meet Our Team */}
      <CoreValues coredata={AboutUsData?.whyChooseUs} /> {/* Why Choose Us */}
    </>
  );
};

export default AboutPageComponent;
