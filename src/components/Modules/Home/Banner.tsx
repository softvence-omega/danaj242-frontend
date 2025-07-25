import CommonGlowingHeader from "@/common/CommonGlowingHeader";
import CommonHomeButton from "@/common/CommonHomeButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../../../assets/Home/laptop2.png";
import vdo from "../../../assets/Home/video.mp4";
export default function Banner() {
  return (
    <section className="w-full mt-24 md:mt-36 lg:mt-40 relative z-0">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 1,
            },
          },
        }}
      >
        <motion.h1 className="text-2xl text-white md:text-center md:text-5xl md:leading-[60px] flex flex-col">
          {[
            <p>
              {" "}
              Launch
              <CommonGlowingHeader glowingTitle="outdoor ads " />
              <p className="ml-2 inline-block">in minutes</p> —
            </p>,

            <p>
              <p className="inline-block">straight from</p>
              <p className="inline-block pl-2"> your screen</p>
            </p>,
          ].map((word, i) => (
            <motion.span
              key={i}
              style={{ display: "inline-block" }}
              variants={{
                hidden: {
                  opacity: 0,
                  filter: "blur(4px)",
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-white mt-8 md:text-center text-sm md:text-base my-6 max-w-[600px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Unlock the full potential of your brand with digital billboards in
          Nassau, Bahamas, and beyond. SCNE Ads offers a user-friendly platform
          to advertise on the most strategic locations in the Caribbean.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link to="/login" className="mt-12 md:grid place-items-center">
            <CommonHomeButton title="Start Now And Login " isInView={true} />
          </Link>
        </motion.div>
      </motion.div>

      <section className="relative w-full pt-12 md:pt-25 ">
        <div className="relative flex justify-center items-center w-full mx-auto">
          <div className=" relative mx-auto  ">
            <img src={img} alt="Laptop  " className=" object-contain   " />

            <div className="absolute top-8 left-48 w-[65%] h-[70%]">
              <video
                src={vdo}
                controls
                autoPlay
                muted
                loop
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
