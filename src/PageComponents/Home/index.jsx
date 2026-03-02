import Brands from "@/Components/Home/Brands";
import Services from "@/Components/Home/Services";
import Counts from "@/Components/Home/Counts";
import Faq from "@/Components/Home/Faq";
import HomeBanner from "@/Components/Home/Homebanner";
import Portfolio from "@/Components/Home/Portfolio";
import Testimonal from "@/Components/Home/Testimonal";
import { HomeData } from "@/constant/Home";

export const HomePageComponents = () => {
  return (
    <>
      <HomeBanner />

      <Brands data={HomeData?.brands} />
      
      <Services data={HomeData?.services} />

      <Portfolio portfolio_data={HomeData?.portfolio} />

      <Counts />

      <Testimonal testimonal_data={HomeData?.testimonials} />

      <Faq faqData={HomeData?.faq} />

    </>
  );
};
