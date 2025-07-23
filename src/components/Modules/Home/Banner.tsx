import CommonGlowingHeader from "@/common/CommonGlowingHeader";
import CommonWrapper from "@/common/CommonWrapper";
import { motion } from "framer-motion";
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
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#38B6FF] hover:bg-[#2DA5EF] text-white text-sm md:text-lg md:w-fit w-full cursor-pointer font-medium py-3 px-6 rounded-full transition-all duration-300"
            >
              Start now and login
            </motion.button>
          </Link>
        </div>
      </section>
    </CommonWrapper>
  );
}
