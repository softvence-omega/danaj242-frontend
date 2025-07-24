import Banner from "@/components/Modules/Home/Banner";

import CommonGlowingHeader from "@/common/CommonGlowingHeader";
import AnalyticsSection from "@/components/Modules/Home/Analytics";
import { FeaturedLocationsCarousel } from "@/components/Modules/Home/FeaturedLocation";
import HowItWorksSection from "@/components/Modules/Home/HowItWorks";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import CommonWrapper from "../common/CommonWrapper";

const Home = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <CommonWrapper>
        <Banner />
      </CommonWrapper>
      <div className="mt-20 md:mt-60 mb-20 md:mb-40 ">
        <h1 className="text-white text-center text-2xl md:text-5xl leading-[60px]  md:mb-10">
          Featured
          <CommonGlowingHeader glowingTitle="Locations " />
        </h1>
        <FeaturedLocationsCarousel />
      </div>
      <CommonWrapper>
        <AnalyticsSection />
        <HowItWorksSection />
      </CommonWrapper>
    </>
  );
};

export default Home;
