import CommonGlowingHeader from "@/common/CommonGlowingHeader";
import CommonHomeButton from "@/common/CommonHomeButton";
import CommonWrapper from "@/common/CommonWrapper";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <CommonWrapper>
      <section className="mt-24 lg:mt-40 mb-24 relative z-0">
        <div>
          <h1 className="text-2xl text-white md:text-center md:text-5xl md:leading-[60px]">
            Launch
            <CommonGlowingHeader glowingTitle="outdoor ads" /> in minutes —{" "}
            <br />
            straight from your screen
          </h1>
          <p className="text-white mt-8 md:text-center text-sm md:text-base my-6 max-w-[600px] mx-auto">
            Unlock the full potential of your brand with digital billboards in
            Nassau, Bahamas, and beyond. SCNE Ads offers a user-friendly
            platform to advertise on the most strategic locations in the
            Caribbean.
          </p>
          <Link to="/login" className="mt-12 grid place-items-center">
            <CommonHomeButton title="Start Now And Login " isInView={true} />
          </Link>
        </div>
      </section>
    </CommonWrapper>
  );
}
